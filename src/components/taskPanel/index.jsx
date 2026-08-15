import {
    FiCheck,
    FiEdit3,
    FiRefreshCw,
    FiSearch,
    FiTrash2,
    FiX,
} from "react-icons/fi";

import { Styled } from "./styled";

const TaskPanel = ({
    filteredTasks,
    categories,
    searchText,
    priorityFilter,
    statusFilter,
    categoryFilter,
    onSearchChange,
    onPriorityChange,
    onStatusChange,
    onCategoryChange,
    onClearCompleted,
    onResetDemo,
    onClearFilters,
    onToggleStatus,
    onEdit,
    onDelete,
}) => {
    return (
        <Styled.Wrapper>
            <div className="toolbar">
                <div className="searchBox">
                    <FiSearch />

                    <input
                        type="text"
                        placeholder="Search tasks, category, notes..."
                        value={searchText}
                        onChange={(event) => onSearchChange(event.target.value)}
                    />
                </div>

                <select
                    value={priorityFilter}
                    onChange={(event) => onPriorityChange(event.target.value)}
                >
                    <option>All</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <select
                    value={statusFilter}
                    onChange={(event) => onStatusChange(event.target.value)}
                >
                    <option>All</option>
                    <option>Pending</option>
                    <option>Done</option>
                </select>

                <select
                    value={categoryFilter}
                    onChange={(event) => onCategoryChange(event.target.value)}
                >
                    {categories.map((category) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="toolbarActions">
                <button type="button" onClick={onClearCompleted}>
                    <FiTrash2 />
                    Clear Done
                </button>

                <button type="button" onClick={onResetDemo}>
                    <FiRefreshCw />
                    Reset Sample
                </button>

                <button type="button" onClick={onClearFilters}>
                    <FiX />
                    Clear Filters
                </button>
            </div>

            <div className="tasksList">
                {filteredTasks.length === 0 ? (
                    <div className="emptyState">
                        <strong>No tasks found</strong>

                        <span>Try changing your search or filters.</span>
                    </div>
                ) : (
                    filteredTasks.map((task) => (
                        <article
                            key={task.id}
                            className={`taskCard ${
                                task.status === "Done" ? "isDone" : ""
                            }`}
                        >
                            <div className="taskMeta">
                                <span
                                    className={`priority priority${task.priority}`}
                                >
                                    {task.priority}
                                </span>

                                <span>{task.category}</span>

                                {task.dueDate && <span>{task.dueDate}</span>}
                            </div>

                            <div className="taskContent">
                                <div>
                                    <h3>{task.title}</h3>

                                    {task.notes && <p>{task.notes}</p>}
                                </div>

                                <span
                                    className={`statusBadge status${task.status}`}
                                >
                                    {task.status}
                                </span>
                            </div>

                            <div className="taskActions">
                                <button
                                    type="button"
                                    onClick={() => onToggleStatus(task.id)}
                                >
                                    <FiCheck />

                                    {task.status === "Done" ? "Reopen" : "Done"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onEdit(task)}
                                >
                                    <FiEdit3 />
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onDelete(task.id)}
                                >
                                    <FiTrash2 />
                                    Delete
                                </button>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default TaskPanel;
