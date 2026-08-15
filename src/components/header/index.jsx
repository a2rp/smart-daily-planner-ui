import { FiDownload, FiMoon, FiSun, FiUpload } from "react-icons/fi";

import { Styled } from "./styled";

const Header = ({ theme, onToggleTheme, onExport, onImport }) => {
    return (
        <Styled.Wrapper>
            <div className="headerInner">
                <button
                    className="brand"
                    type="button"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                >
                    <span className="brandMark">SD</span>

                    <span className="brandText">
                        <strong>Smart Daily Planner</strong>
                        <small>Personal Productivity Workspace</small>
                    </span>
                </button>

                <div className="headerMeta">
                    <span className="status">
                        <i />
                        Local workspace
                    </span>

                    <span className="storage">Browser saved</span>
                </div>

                <div className="headerActions">
                    <button
                        className="actionButton"
                        type="button"
                        onClick={onExport}
                    >
                        <FiDownload />
                        <span>Export</span>
                    </button>

                    <label className="actionButton">
                        <FiUpload />
                        <span>Import</span>

                        <input
                            type="file"
                            accept="application/json"
                            onChange={onImport}
                        />
                    </label>

                    <button
                        className="themeButton"
                        type="button"
                        onClick={onToggleTheme}
                        aria-label={
                            theme === "dark"
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                    >
                        {theme === "dark" ? <FiSun /> : <FiMoon />}

                        <span>{theme === "dark" ? "Light" : "Dark"}</span>
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Header;
