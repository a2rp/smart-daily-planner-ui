import React, { useEffect, useMemo, useState } from "react";
import {
    FiActivity,
    FiCalendar,
    FiCheck,
    FiDownload,
    FiEdit3,
    FiMoon,
    FiPlus,
    FiRefreshCw,
    FiSearch,
    FiSun,
    FiTrash2,
    FiUpload,
    FiX,
} from "react-icons/fi";
import { Styled } from "./styled";
import Swal from "sweetalert2";

const STORAGE_KEY = "a2rp_smart_daily_planner_tasks";
const THEME_KEY = "a2rp_smart_daily_planner_theme";

const starterTasks = [
    {
        id: "task-001",
        title: "Build planner layout",
        notes: "Create hero, stats, form, filters, and task list.",
        priority: "High",
        status: "Pending",
        category: "Coding",
        dueDate: "2026-05-26",
        createdAt: new Date().toISOString(),
    },
    {
        id: "task-002",
        title: "Push project to GitHub",
        notes: "Add topics: website-apps, single-page, reactjs, vite, styled-components.",
        priority: "Medium",
        status: "Pending",
        category: "GitHub",
        dueDate: "2026-05-27",
        createdAt: new Date().toISOString(),
    },
    {
        id: "task-003",
        title: "Test localStorage data",
        notes: "Refresh page and confirm tasks, filters, and theme are saved.",
        priority: "Medium",
        status: "Done",
        category: "Testing",
        dueDate: "2026-05-26",
        createdAt: new Date().toISOString(),
    },
];

const emptyForm = {
    title: "",
    notes: "",
    priority: "Medium",
    category: "Personal",
    dueDate: "",
};

const normalizeTask = (task) => {
    return {
        id: task.id || crypto.randomUUID(),
        title: task.title || "",
        notes: task.notes || "",
        priority: task.priority || "Medium",
        status: task.status || "Pending",
        category: task.category || "Personal",
        dueDate: task.dueDate || "",
        createdAt: task.createdAt || new Date().toISOString(),
    };
};

const getSavedTasks = () => {
    try {
        const savedTasks = localStorage.getItem(STORAGE_KEY);

        if (!savedTasks) {
            return starterTasks;
        }

        const parsedTasks = JSON.parse(savedTasks);

        if (!Array.isArray(parsedTasks)) {
            return starterTasks;
        }

        return parsedTasks.map(normalizeTask);
    } catch {
        return starterTasks;
    }
};

const SmartPlanner = () => {
    const [tasks, setTasks] = useState(getSavedTasks);
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
        const taskCategories = tasks
            .map((task) => task.category)
            .filter(Boolean);

        return ["All", ...new Set(taskCategories)];
    }, [tasks]);

    const filteredTasks = useMemo(() => {
        const query = searchText.trim().toLowerCase();

        return tasks.filter((task) => {
            const searchSource = [
                task.title,
                task.notes,
                task.priority,
                task.status,
                task.category,
                task.dueDate,
            ]
                .join(" ")
                .toLowerCase();

            const matchesSearch = !query || searchSource.includes(query);

            const matchesPriority =
                priorityFilter === "All" || task.priority === priorityFilter;

            const matchesStatus =
                statusFilter === "All" || task.status === statusFilter;

            const matchesCategory =
                categoryFilter === "All" || task.category === categoryFilter;

            return (
                matchesSearch &&
                matchesPriority &&
                matchesStatus &&
                matchesCategory
            );
        });
    }, [tasks, searchText, priorityFilter, statusFilter, categoryFilter]);

    const completedCount = tasks.filter(
        (task) => task.status === "Done",
    ).length;

    const pendingCount = tasks.length - completedCount;

    const highPriorityCount = tasks.filter(
        (task) => task.priority === "High",
    ).length;

    const progressPercent = tasks.length
        ? Math.round((completedCount / tasks.length) * 100)
        : 0;

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

        window.scrollTo({ top: 0, behavior: "smooth" });
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
                if (task.id === taskId) {
                    updatedStatus = task.status === "Done" ? "Pending" : "Done";

                    return normalizeTask({
                        ...task,
                        status: updatedStatus,
                    });
                }

                return task;
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
        const completedTasks = tasks.filter((task) => task.status === "Done");

        if (completedTasks.length === 0) {
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

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            try {
                const importedTasks = JSON.parse(reader.result);

                if (Array.isArray(importedTasks)) {
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
                } else {
                    throw new Error();
                }
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

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.TopBar>
                    <div>
                        <span>Productivity App</span>
                        <strong>Smart Daily Planner</strong>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setTheme((currentTheme) =>
                                currentTheme === "dark" ? "light" : "dark",
                            )
                        }
                    >
                        {theme === "dark" ? <FiSun /> : <FiMoon />}
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </button>
                </Styled.TopBar>

                <Styled.Hero>
                    <div>
                        <span className="eyebrow">Smart Daily Planner</span>
                        <h1>Plan your day with clarity.</h1>
                        <p>
                            Add tasks, set priority, choose categories, track
                            due dates, filter your work, import/export data, and
                            keep everything saved in your browser.
                        </p>
                    </div>

                    <div className="heroActions">
                        <button onClick={handleExport}>
                            <FiDownload />
                            Export
                        </button>

                        <label>
                            <FiUpload />
                            Import
                            <input
                                type="file"
                                accept="application/json"
                                onChange={handleImport}
                            />
                        </label>
                    </div>
                </Styled.Hero>

                <Styled.StatsGrid>
                    <div className="statCard">
                        <FiActivity />
                        <span>Total Tasks</span>
                        <strong>{tasks.length}</strong>
                    </div>

                    <div className="statCard">
                        <FiCheck />
                        <span>Completed</span>
                        <strong>{completedCount}</strong>
                    </div>

                    <div className="statCard">
                        <FiX />
                        <span>Pending</span>
                        <strong>{pendingCount}</strong>
                    </div>

                    <div className="statCard">
                        <FiCalendar />
                        <span>High Priority</span>
                        <strong>{highPriorityCount}</strong>
                    </div>

                    <div className="statCard progressCard">
                        <span>Overall Progress</span>
                        <strong>{progressPercent}%</strong>

                        <div className="progressTrack">
                            <div
                                className="progressFill"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>
                </Styled.StatsGrid>

                <Styled.MainGrid>
                    <Styled.FormCard>
                        <div className="sectionHead">
                            <span>
                                {editingId ? "Update Task" : "New Task"}
                            </span>
                            <h2>
                                {editingId
                                    ? "Edit your task"
                                    : "Create a useful task"}
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label>Task title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Example: Complete GitHub deployment"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="field">
                                <label>Notes</label>
                                <textarea
                                    name="notes"
                                    placeholder="Add useful details, links, checklist idea, or reminders..."
                                    value={formData.notes}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="twoFields">
                                <div className="field">
                                    <label>Priority</label>
                                    <select
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>

                                <div className="field">
                                    <label>Due date</label>
                                    <input
                                        type="date"
                                        name="dueDate"
                                        value={formData.dueDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label>Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Coding, Fitness, Work, Learning..."
                                    value={formData.category}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="buttonRow">
                                <button type="submit">
                                    <FiPlus />
                                    {editingId ? "Save Changes" : "Add Task"}
                                </button>

                                {editingId && (
                                    <button
                                        type="button"
                                        className="ghostButton"
                                        onClick={handleCancelEdit}
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </Styled.FormCard>

                    <Styled.TaskPanel>
                        <div className="toolbar">
                            <div className="searchBox">
                                <FiSearch />
                                <input
                                    type="text"
                                    placeholder="Search tasks, category, notes..."
                                    value={searchText}
                                    onChange={(event) =>
                                        setSearchText(event.target.value)
                                    }
                                />
                            </div>

                            <select
                                value={priorityFilter}
                                onChange={(event) =>
                                    setPriorityFilter(event.target.value)
                                }
                            >
                                <option>All</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>

                            <select
                                value={statusFilter}
                                onChange={(event) =>
                                    setStatusFilter(event.target.value)
                                }
                            >
                                <option>All</option>
                                <option>Pending</option>
                                <option>Done</option>
                            </select>

                            <select
                                value={categoryFilter}
                                onChange={(event) =>
                                    setCategoryFilter(event.target.value)
                                }
                            >
                                {categories.map((category) => (
                                    <option key={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div className="miniActions">
                            <button onClick={handleClearCompleted}>
                                <FiTrash2 />
                                Clear Done
                            </button>

                            <button onClick={handleResetDemo}>
                                <FiRefreshCw />
                                Reset Sample
                            </button>

                            <button onClick={handleClearFilters}>
                                <FiX />
                                Clear Filters
                            </button>
                        </div>

                        <div className="taskList">
                            {filteredTasks.length === 0 && (
                                <div className="emptyBox">
                                    No tasks found. Add a new task or adjust
                                    your filters.
                                </div>
                            )}

                            {filteredTasks.map((task) => (
                                <article
                                    className={`taskCard ${
                                        task.status === "Done" ? "done" : ""
                                    }`}
                                    key={task.id}
                                >
                                    <div className="taskTop">
                                        <div>
                                            <div className="metaRow">
                                                <span
                                                    className={`priority ${task.priority.toLowerCase()}`}
                                                >
                                                    {task.priority}
                                                </span>

                                                <span className="category">
                                                    {task.category}
                                                </span>

                                                {task.dueDate && (
                                                    <span className="date">
                                                        {task.dueDate}
                                                    </span>
                                                )}
                                            </div>

                                            <h3>{task.title}</h3>
                                        </div>

                                        <span className="status">
                                            {task.status}
                                        </span>
                                    </div>

                                    {task.notes && <p>{task.notes}</p>}

                                    <div className="taskActions">
                                        <button
                                            onClick={() =>
                                                handleToggleStatus(task.id)
                                            }
                                        >
                                            <FiCheck />
                                            {task.status === "Done"
                                                ? "Undo"
                                                : "Done"}
                                        </button>

                                        <button
                                            onClick={() => handleEdit(task)}
                                        >
                                            <FiEdit3 />
                                            Edit
                                        </button>

                                        <button
                                            className="danger"
                                            onClick={() =>
                                                handleDelete(task.id)
                                            }
                                        >
                                            <FiTrash2 />
                                            Delete
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Styled.TaskPanel>
                </Styled.MainGrid>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default SmartPlanner;
