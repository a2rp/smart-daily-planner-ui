import { FiActivity, FiCalendar, FiCheck, FiClock } from "react-icons/fi";

import { Styled } from "./styled";

const stats = [
    {
        key: "total",
        label: "Total Tasks",
        icon: FiActivity,
    },
    {
        key: "completed",
        label: "Completed",
        icon: FiCheck,
    },
    {
        key: "pending",
        label: "Pending",
        icon: FiClock,
    },
    {
        key: "priority",
        label: "High Priority",
        icon: FiCalendar,
    },
];

const StatsGrid = ({
    totalTasks,
    completedCount,
    pendingCount,
    highPriorityCount,
    progressPercent,
}) => {
    const values = {
        total: totalTasks,
        completed: completedCount,
        pending: pendingCount,
        priority: highPriorityCount,
    };

    return (
        <Styled.Wrapper>
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <article key={stat.key} className="statCard">
                        <div className="statTop">
                            <span className="statNumber">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="statIcon">
                                <Icon />
                            </span>
                        </div>

                        <div className="statContent">
                            <span>{stat.label}</span>
                            <strong>{values[stat.key]}</strong>
                        </div>
                    </article>
                );
            })}

            <article className="statCard progressCard">
                <div className="statTop">
                    <span className="statNumber">05</span>

                    <span className="progressLabel">Progress</span>
                </div>

                <div className="progressContent">
                    <strong>{progressPercent}%</strong>

                    <span>
                        {completedCount} of {totalTasks} completed
                    </span>
                </div>

                <div className="progressTrack">
                    <div
                        className="progressFill"
                        style={{
                            width: `${progressPercent}%`,
                        }}
                    />
                </div>
            </article>
        </Styled.Wrapper>
    );
};

export default StatsGrid;
