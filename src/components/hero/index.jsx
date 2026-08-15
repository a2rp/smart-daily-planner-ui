import {
    FiArrowDownRight,
    FiCheckCircle,
    FiClock,
    FiTarget,
} from "react-icons/fi";

import { Styled } from "./styled";

const Hero = ({
    totalTasks,
    completedCount,
    pendingCount,
    progressPercent,
}) => {
    return (
        <Styled.Wrapper>
            <div className="heroGrid" />

            <div className="heroContent">
                <div className="eyebrow">
                    <span className="eyebrowDot" />
                    Smart Daily Planner
                </div>

                <h1>
                    Plan less.
                    <span>Do more.</span>
                </h1>

                <p>
                    Build a focused daily workflow, organize priorities, track
                    progress, and keep every task saved locally in your browser.
                </p>

                <div className="heroHighlights">
                    <span>
                        <FiCheckCircle />
                        Local persistence
                    </span>

                    <span>
                        <FiTarget />
                        Priority focused
                    </span>

                    <span>
                        <FiClock />
                        Due-date aware
                    </span>
                </div>
            </div>

            <div className="heroPanel">
                <div className="panelTop">
                    <div>
                        <span>DAILY SNAPSHOT</span>
                        <strong>Today's Focus</strong>
                    </div>

                    <FiArrowDownRight />
                </div>

                <div className="focusNumber">
                    <strong>{pendingCount}</strong>
                    <span>Pending task{pendingCount === 1 ? "" : "s"}</span>
                </div>

                <div className="panelProgress">
                    <div className="progressMeta">
                        <span>Completion</span>
                        <strong>{progressPercent}%</strong>
                    </div>

                    <div className="progressTrack">
                        <div
                            className="progressFill"
                            style={{
                                width: `${progressPercent}%`,
                            }}
                        />
                    </div>
                </div>

                <div className="panelStats">
                    <div>
                        <span>Total</span>
                        <strong>{totalTasks}</strong>
                    </div>

                    <div>
                        <span>Done</span>
                        <strong>{completedCount}</strong>
                    </div>

                    <div>
                        <span>Pending</span>
                        <strong>{pendingCount}</strong>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Hero;
