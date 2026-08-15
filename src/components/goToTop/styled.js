import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        right: 26px;
        bottom: 26px;
        z-index: 1200;

        button {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid rgba(0, 212, 255, 0.24);
            border-radius: 50%;

            background: rgba(11, 15, 20, 0.92);
            backdrop-filter: blur(18px);

            color: var(--shell-primary);

            box-shadow:
                0 14px 40px rgba(0, 0, 0, 0.35),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);

            cursor: pointer;

            transition:
                transform 0.22s ease,
                background 0.22s ease,
                border-color 0.22s ease,
                box-shadow 0.22s ease;
        }

        button:hover {
            transform: translateY(-5px);

            background: rgba(18, 24, 31, 0.98);

            border-color: rgba(0, 255, 179, 0.42);

            box-shadow:
                0 20px 50px rgba(0, 0, 0, 0.45),
                0 0 20px rgba(0, 212, 255, 0.18);
        }

        button:active {
            transform: translateY(-2px) scale(0.96);
        }

        button svg {
            width: 20px;
            height: 20px;

            transition:
                transform 0.2s ease,
                color 0.2s ease;
        }

        button:hover svg {
            transform: translateY(-2px);
            color: var(--shell-secondary);
        }

        @media (max-width: 768px) {
            right: 18px;
            bottom: 18px;

            button {
                width: 50px;
                height: 50px;
            }

            button svg {
                width: 18px;
                height: 18px;
            }
        }

        @media (max-width: 480px) {
            right: 14px;
            bottom: 14px;

            button {
                width: 46px;
                height: 46px;
            }

            button svg {
                width: 16px;
                height: 16px;
            }
        }
    `,
};
