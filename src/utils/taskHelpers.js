export const emptyForm = {
    title: "",
    notes: "",
    priority: "Medium",
    category: "Personal",
    dueDate: "",
};

export const normalizeTask = (task) => {
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

export const getSavedTasks = (storageKey, fallbackTasks) => {
    try {
        const savedTasks = localStorage.getItem(storageKey);

        if (!savedTasks) {
            return fallbackTasks;
        }

        const parsedTasks = JSON.parse(savedTasks);

        if (!Array.isArray(parsedTasks)) {
            return fallbackTasks;
        }

        return parsedTasks.map(normalizeTask);
    } catch {
        return fallbackTasks;
    }
};

export const getTaskCategories = (tasks) => {
    const categories = tasks.map((task) => task.category).filter(Boolean);

    return ["All", ...new Set(categories)];
};

export const filterTasks = ({
    tasks,
    searchText,
    priorityFilter,
    statusFilter,
    categoryFilter,
}) => {
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
            matchesSearch && matchesPriority && matchesStatus && matchesCategory
        );
    });
};

export const getPlannerStats = (tasks) => {
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

    return {
        completedCount,
        pendingCount,
        highPriorityCount,
        progressPercent,
    };
};
