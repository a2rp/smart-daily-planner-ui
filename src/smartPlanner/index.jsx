import { useEffect, useMemo, useRef, useState } from "react";
import Swal from "sweetalert2";

import Footer from "../components/footer";
import GoToTop from "../components/goToTop";
import Header from "../components/header";
import Hero from "../components/hero";
import StatsGrid from "../components/statsGrid";
import TaskForm from "../components/taskForm";
import TaskPanel from "../components/taskPanel";

import { starterTasks } from "../data/starterTasks";
import {
    emptyForm,
    filterTasks,
    getPlannerStats,
    getSavedTasks,
    getTaskCategories,
    normalizeTask,
} from "../utils/taskHelpers";

import { Styled } from "./styled";

const STORAGE_KEY = "a2rp_smart_daily_planner_tasks";
const THEME_KEY = "a2rp_smart_daily_planner_theme";

const SmartPlanner = () => {
    const taskFormRef = useRef(null);
    const [tasks, setTasks] = useState(() =>
        getSavedTasks(STORAGE_KEY, starterTasks),
    );

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem(THEME_KEY) || "dark";
    });

    const [formData, setFormData] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);

    const [searchText, setSearchText] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const categories = useMemo(() => {
        return getTaskCategories(tasks);
    }, [tasks]);

    const filteredTasks = useMemo(() => {
        return filterTasks({
            tasks,
            searchText,
            priorityFilter,
            statusFilter,
            categoryFilter,
        });
    }, [tasks, searchText, priorityFilter, statusFilter, categoryFilter]);

    const { completedCount, pendingCount, highPriorityCount, progressPercent } =
        useMemo(() => {
            return getPlannerStats(tasks);
        }, [tasks]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.title.trim()) {
            Swal.fire({
                icon: "warning",
                title: "Task title required",
                text: "Please enter a task title before saving.",
                background: "var(--color-bg-soft)",
                color: "var(--color-heading)",
                confirmButtonColor: "#00d4ff",
            });

            return;
        }

        if (editingId) {
            setTasks((currentTasks) =>
                currentTasks.map((task) =>
                    task.id === editingId
                        ? normalizeTask({
                              ...task,
                              title: formData.title.trim(),
                              notes: formData.notes.trim(),
                              priority: formData.priority,
                              category: formData.category.trim() || "Personal",
                              dueDate: formData.dueDate,
                          })
                        : task,
                ),
            );

            Swal.fire({
                icon: "success",
                title: "Task updated",
                text: "Your task was updated successfully.",
                timer: 1600,
                showConfirmButton: false,
                background: "var(--color-bg-soft)",
                color: "var(--color-heading)",
            });

            setEditingId(null);
            setFormData(emptyForm);

            return;
        }

        const newTask = normalizeTask({
            id: crypto.randomUUID(),
            title: formData.title.trim(),
            notes: formData.notes.trim(),
            priority: formData.priority,
            status: "Pending",
            category: formData.category.trim() || "Personal",
            dueDate: formData.dueDate,
            createdAt: new Date().toISOString(),
        });

        setTasks((currentTasks) => [newTask, ...currentTasks]);

        Swal.fire({
            icon: "success",
            title: "Task added",
            text: "New task created successfully.",
            timer: 1600,
            showConfirmButton: false,
            background: "var(--color-bg-soft)",
            color: "var(--color-heading)",
        });

        setFormData(emptyForm);
    };

    const handleEdit = (task) => {
        const safeTask = normalizeTask(task);

        setEditingId(safeTask.id);

        setFormData({
            title: safeTask.title,
            notes: safeTask.notes,
            priority: safeTask.priority,
            category: safeTask.category,
            dueDate: safeTask.dueDate,
        });

        requestAnimationFrame(() => {
            taskFormRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData(emptyForm);
    };

    const handleDelete = async (taskId) => {
        const result = await Swal.fire({
            title: "Delete task?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            background: "var(--color-bg-soft)",
            color: "var(--color-heading)",
            confirmButtonColor: "#ff5470",
            cancelButtonColor: "#2b2b35",
            reverseButtons: true,
        });

        if (!result.isConfirmed) {
            return;
        }

        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== taskId),
        );

        if (editingId === taskId) {
            handleCancelEdit();
        }

        Swal.fire({
            icon: "success",
            title: "Task deleted",
            text: "Task removed successfully.",
            timer: 1500,
            showConfirmButton: false,
            background: "var(--color-bg-soft)",
            color: "var(--color-heading)",
        });
    };

    const handleToggleStatus = (taskId) => {
        let updatedStatus = "";

        setTasks((currentTasks) =>
            currentTasks.map((task) => {
                if (task.id !== taskId) {
                    return task;
                }

                updatedStatus = task.status === "Done" ? "Pending" : "Done";

                return normalizeTask({
                    ...task,
                    status: updatedStatus,
                });
            }),
        );

        Swal.fire({
            icon: "success",
            title:
                updatedStatus === "Done" ? "Task completed" : "Task reopened",
            timer: 1400,
            showConfirmButton: false,
            background: "var(--color-bg-soft)",
            color: "var(--color-heading)",
        });
    };

    const handleClearCompleted = () => {
        const hasCompletedTasks = tasks.some((task) => task.status === "Done");

        if (!hasCompletedTasks) {
            Swal.fire({
                icon: "info",
                title: "Nothing to clear",
                text: "No completed tasks found.",
                background: "var(--color-bg-soft)",
                color: "var(--color-heading)",
                confirmButtonColor: "#00d4ff",
            });

            return;
        }

        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.status !== "Done"),
        );

        Swal.fire({
            icon: "success",
            title: "Completed tasks cleared",
            timer: 1600,
            showConfirmButton: false,
            background: "var(--color-bg-soft)",
            color: "var(--color-heading)",
        });
    };

    const handleResetDemo = async () => {
        const result = await Swal.fire({
            title: "Reset planner?",
            text: "All current tasks will be replaced with sample tasks.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, reset",
            cancelButtonText: "Cancel",
            background: "var(--color-bg-soft)",
            color: "var(--color-heading)",
            confirmButtonColor: "#00d4ff",
            cancelButtonColor: "#2b2b35",
            reverseButtons: true,
        });

        if (!result.isConfirmed) {
            return;
        }

        setTasks(starterTasks);
        setFormData(emptyForm);
        setEditingId(null);

        Swal.fire({
            icon: "success",
            title: "Planner reset complete",
            text: "Sample tasks restored successfully.",
            timer: 1600,
            showConfirmButton: false,
            background: "var(--color-bg-soft)",
            color: "var(--color-heading)",
        });
    };

    const handleExport = () => {
        const fileData = JSON.stringify(tasks, null, 2);

        const blob = new Blob([fileData], {
            type: "application/json",
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "smart-daily-planner-tasks.json";

        link.click();

        URL.revokeObjectURL(url);

        Swal.fire({
            icon: "success",
            title: "Export complete",
            text: "Tasks exported successfully.",
            timer: 1600,
            showConfirmButton: false,
            background: "var(--color-bg-soft)",
            color: "var(--color-heading)",
        });
    };

    const handleImport = (event) => {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            try {
                const importedTasks = JSON.parse(reader.result);

                if (!Array.isArray(importedTasks)) {
                    throw new Error();
                }

                setTasks(importedTasks.map(normalizeTask));

                Swal.fire({
                    icon: "success",
                    title: "Import successful",
                    text: "Tasks imported successfully.",
                    timer: 1600,
                    showConfirmButton: false,
                    background: "var(--color-bg-soft)",
                    color: "var(--color-heading)",
                });
            } catch {
                Swal.fire({
                    icon: "error",
                    title: "Invalid file",
                    text: "Please import a valid JSON file.",
                    background: "var(--color-bg-soft)",
                    color: "var(--color-heading)",
                    confirmButtonColor: "#ff5470",
                });
            }
        };

        reader.readAsText(file);
        event.target.value = "";
    };

    const handleClearFilters = () => {
        setSearchText("");
        setPriorityFilter("All");
        setStatusFilter("All");
        setCategoryFilter("All");
    };

    const handleToggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
        );
    };

    return (
        <Styled.Wrapper>
            <Header
                theme={theme}
                onToggleTheme={handleToggleTheme}
                onExport={handleExport}
                onImport={handleImport}
            />

            <Styled.Container>
                <Hero
                    totalTasks={tasks.length}
                    completedCount={completedCount}
                    pendingCount={pendingCount}
                    progressPercent={progressPercent}
                />

                <StatsGrid
                    totalTasks={tasks.length}
                    completedCount={completedCount}
                    pendingCount={pendingCount}
                    highPriorityCount={highPriorityCount}
                    progressPercent={progressPercent}
                />

                <Styled.MainGrid>
                    <TaskForm
                        formRef={taskFormRef}
                        editingId={editingId}
                        formData={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onCancelEdit={handleCancelEdit}
                    />

                    <TaskPanel
                        filteredTasks={filteredTasks}
                        categories={categories}
                        searchText={searchText}
                        priorityFilter={priorityFilter}
                        statusFilter={statusFilter}
                        categoryFilter={categoryFilter}
                        onSearchChange={setSearchText}
                        onPriorityChange={setPriorityFilter}
                        onStatusChange={setStatusFilter}
                        onCategoryChange={setCategoryFilter}
                        onClearCompleted={handleClearCompleted}
                        onResetDemo={handleResetDemo}
                        onClearFilters={handleClearFilters}
                        onToggleStatus={handleToggleStatus}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </Styled.MainGrid>
            </Styled.Container>

            <Footer />

            <GoToTop />
        </Styled.Wrapper>
    );
};

export default SmartPlanner;
