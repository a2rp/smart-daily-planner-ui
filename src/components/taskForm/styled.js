import styled from "styled-components";

export const Styled = {
    Wrapper: styled.aside`
        position: sticky;
        top: 102px;
        padding: 30px;
        border: 1px solid var(--color-border);
        border-radius: 26px;

        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.025),
                rgba(255, 255, 255, 0.01)
            ),
            var(--color-surface);

        box-shadow:
            0 18px 48px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);

        scroll-margin-top: 110px;

        .sectionHead {
            margin-bottom: 6px;
        }

        .sectionHead > span {
            display: inline-block;

            color: var(--color-primary);

            font-family: "Antonio", sans-serif;
            font-size: 0.64rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.18em;
        }

        .sectionHead h2 {
            margin-top: 10px;

            color: var(--color-heading);

            font-family: "Antonio", sans-serif;
            font-size: clamp(2.3rem, 4vw, 3.6rem);
            font-weight: 700;
            line-height: 0.92;
            letter-spacing: -0.03em;
            text-transform: uppercase;
        }

        form {
            margin-top: 28px;

            display: grid;
            gap: 18px;
        }

        .field {
            display: grid;
            gap: 8px;
        }

        .field label {
            color: var(--color-muted);

            font-size: 0.66rem;
            font-weight: 700;

            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        input,
        textarea,
        select {
            width: 100%;

            border: 1px solid var(--color-border);
            border-radius: 15px;

            outline: none;

            background: var(--color-surface-strong);

            color: var(--color-heading);

            transition: 0.22s ease;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        input,
        select {
            min-height: 52px;
            padding: 0 16px;
        }

        textarea {
            min-height: 140px;
            padding: 15px 16px;

            resize: vertical;
        }

        input:hover,
        textarea:hover,
        select:hover {
            border-color: rgba(0, 212, 255, 0.18);
        }

        input:focus,
        textarea:focus,
        select:focus {
            border-color: var(--color-primary);

            box-shadow:
                0 0 0 4px rgba(0, 212, 255, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        input::placeholder,
        textarea::placeholder {
            color: #6f7783;
        }

        .twoFields {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
        }

        .formActions {
            margin-top: 4px;

            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .primaryButton,
        .secondaryButton {
            min-height: 50px;

            padding: 0 22px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;

            border-radius: 999px;

            font-size: 0.72rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                transform 0.22s ease,
                background 0.22s ease,
                border-color 0.22s ease,
                box-shadow 0.22s ease;
        }

        .primaryButton {
            border: 1px solid rgba(0, 212, 255, 0.25);

            background: linear-gradient(
                135deg,
                var(--color-primary),
                var(--color-secondary)
            );

            color: #061015;

            box-shadow: 0 12px 28px rgba(0, 212, 255, 0.18);
        }

        .primaryButton:hover {
            transform: translateY(-3px);

            box-shadow: 0 18px 40px rgba(0, 212, 255, 0.25);
        }

        .secondaryButton {
            border: 1px solid var(--color-border);

            background: var(--color-surface-strong);

            color: var(--color-heading);
        }

        .secondaryButton:hover {
            transform: translateY(-3px);

            border-color: rgba(0, 212, 255, 0.3);

            background: rgba(0, 212, 255, 0.05);
        }

        @media (max-width: 980px) {
            position: static;
        }

        @media (max-width: 560px) {
            padding: 22px;

            .twoFields {
                grid-template-columns: 1fr;
            }

            .formActions {
                flex-direction: column;
            }

            .primaryButton,
            .secondaryButton {
                width: 100%;
            }

            .sectionHead h2 {
                font-size: 2.5rem;
            }
        }
    `,
};
