import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1000;
        width: 100%;
        border-bottom: 1px solid var(--shell-border);
        background: rgba(5, 7, 10, 0.94);
        backdrop-filter: blur(20px);

        .headerInner {
            width: min(1440px, calc(100% - 48px));
            min-height: 82px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 32px;
            align-items: center;
        }

        .brand {
            padding: 0;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            border: 0;
            background: transparent;
            color: var(--shell-heading);
            cursor: pointer;
            text-align: left;
        }

        .brandMark {
            width: 42px;
            height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0, 212, 255, 0.3);
            border-radius: 12px;
            background: linear-gradient(
                145deg,
                rgba(0, 212, 255, 0.12),
                rgba(0, 255, 179, 0.04)
            );
            color: var(--shell-primary);
            font-family: "Antonio", sans-serif;
            font-size: 0.92rem;
            font-weight: 700;
            letter-spacing: 0.08em;

            img {
                width: 30px;
                height: 30px;
                object-fit: contain;
            }
        }

        .brandText {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .brandText strong {
            color: var(--shell-heading);
            font-family: "Antonio", sans-serif;
            font-size: 1.15rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }

        .brandText small {
            color: var(--shell-muted);
            font-size: 0.58rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .headerMeta {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            color: var(--shell-muted);
            font-size: 0.62rem;
        }

        .status {
            display: inline-flex;
            align-items: center;
            gap: 7px;
        }

        .status i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--shell-secondary);
            box-shadow: 0 0 12px rgba(0, 255, 179, 0.5);
        }

        .storage {
            padding-left: 18px;
            border-left: 1px solid var(--shell-border);
        }

        .headerActions {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .actionButton,
        .themeButton {
            min-height: 42px;
            padding: 0 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid var(--shell-border);
            border-radius: 999px;
            background: var(--shell-surface);
            color: var(--shell-heading);
            font-size: 0.68rem;
            cursor: pointer;
            transition:
                border-color 0.2s ease,
                background 0.2s ease,
                color 0.2s ease;
        }

        .actionButton:hover,
        .themeButton:hover {
            border-color: rgba(0, 212, 255, 0.38);
            background: #111720;
        }

        .actionButton svg,
        .themeButton svg {
            color: var(--shell-primary);
        }

        .actionButton input {
            display: none;
        }

        .themeButton {
            min-width: 88px;
            border-color: rgba(0, 212, 255, 0.26);
        }

        @media (max-width: 980px) {
            .headerInner {
                grid-template-columns: 1fr auto;
            }

            .headerMeta {
                display: none;
            }
        }

        @media (max-width: 700px) {
            .headerInner {
                width: calc(100% - 32px);
                min-height: 72px;
            }

            .brandText small {
                display: none;
            }

            .headerActions .actionButton {
                width: 40px;
                min-height: 40px;
                padding: 0;
            }

            .headerActions .actionButton > span {
                display: none;
            }

            .themeButton {
                width: 40px;
                min-width: 40px;
                min-height: 40px;
                padding: 0;
            }

            .themeButton span {
                display: none;
            }
        }

        @media (max-width: 480px) {
            .brandText strong {
                font-size: 0.95rem;
            }

            .headerActions {
                gap: 5px;
            }
        }
    `,
};
