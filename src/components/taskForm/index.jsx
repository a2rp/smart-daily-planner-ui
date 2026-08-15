import { FiEdit3, FiPlus, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const TaskForm = ({
    formRef,
    editingId,
    formData,
    onChange,
    onSubmit,
    onCancelEdit,
}) => {
    return (
        <Styled.Wrapper ref={formRef}>
            <div className="sectionHead">
                <span>{editingId ? "Update Task" : "New Task"}</span>

                <h2>{editingId ? "Edit your task" : "Create a useful task"}</h2>
            </div>

            <form onSubmit={onSubmit}>
                <div className="field">
                    <label>Task title</label>

                    <input
                        type="text"
                        name="title"
                        placeholder="Example: Complete GitHub deployment"
                        value={formData.title}
                        onChange={onChange}
                    />
                </div>

                <div className="field">
                    <label>Notes</label>

                    <textarea
                        name="notes"
                        placeholder="Add useful details, links, checklist idea, or reminders..."
                        value={formData.notes}
                        onChange={onChange}
                    />
                </div>

                <div className="twoFields">
                    <div className="field">
                        <label>Priority</label>

                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={onChange}
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>Category</label>

                        <input
                            type="text"
                            name="category"
                            placeholder="Personal"
                            value={formData.category}
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label>Due date</label>

                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={onChange}
                    />
                </div>

                <div className="formActions">
                    <button className="primaryButton" type="submit">
                        {editingId ? <FiEdit3 /> : <FiPlus />}

                        {editingId ? "Update Task" : "Add Task"}
                    </button>

                    {editingId && (
                        <button
                            className="secondaryButton"
                            type="button"
                            onClick={onCancelEdit}
                        >
                            <FiX />
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </Styled.Wrapper>
    );
};

export default TaskForm;
