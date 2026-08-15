import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        min-width: 0;
        padding: 22px;
        border: 1px solid var(--color-border, #242a33);
        border-radius: 24px;
        background: var(--color-surface, #10131a);

        .toolbar {
            display: grid;
            grid-template-columns: minmax(220px, 1fr) repeat(3, 130px);
            gap: 10px;
        }

        .searchBox {
            min-height: 46px;
            padding: 0 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border, #2a303a);
            border-radius: 999px;
            background: var(--color-surface-strong, #181c24);
        }

        .searchBox svg {
            flex: 0 0 auto;
            color: var(--color-muted, #8a929e);
        }

        .searchBox input {
            width: 100%;
            min-width: 0;
            border: 0;
            outline: 0;
            background: transparent;
            color: var(--color-heading, #f4f6fa);
        }

        select {
            min-height: 46px;
            padding: 0 13px;
            border: 1px solid var(--color-border, #2a303a);
            border-radius: 999px;
            outline: 0;
            background: var(--color-surface-strong, #181c24);
            color: var(--color-heading, #f4f6fa);
        }

        .toolbarActions {
            margin-top: 12px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            flex-wrap: wrap;
        }

        .toolbarActions button,
        .taskActions button {
            min-height: 36px;
            padding: 0 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            border: 1px solid var(--color-border, #2a303a);
            border-radius: 999px;
            background: var(--color-surface);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
            color: var(--color-text, #d4d8df);
            font-size: 0.65rem;
            cursor: pointer;
            transition: 0.22s ease;
        }

        .toolbarActions button:hover,
        .taskActions button:hover {
            transform: translateY(-1px);
            border-color: rgba(0, 212, 255, 0.3);
            background: var(--color-surface-strong);
        }

        .tasksList {
            margin-top: 18px;
            display: grid;
            gap: 12px;
        }

        .taskCard {
            padding: 22px;
            border: 1px solid var(--color-border, #2a303a);
            border-radius: 18px;

            background:
                linear-gradient(
                    145deg,
                    rgba(255, 255, 255, 0.035),
                    rgba(255, 255, 255, 0.012)
                ),
                var(--color-surface-strong, #181c24);

            box-shadow:
                0 14px 34px rgba(0, 0, 0, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.04);

            transition:
                transform 0.22s ease,
                border-color 0.22s ease,
                box-shadow 0.22s ease;
        }

        .taskCard:hover {
            transform: translateY(-6px);

            border-color: rgba(0, 212, 255, 0.35);

            box-shadow:
                0 24px 54px rgba(0, 0, 0, 0.16),
                0 0 24px rgba(0, 212, 255, 0.06);
        }

        .taskCard.isDone {
            opacity: 0.82;
        }

        .taskCard.isDone h3 {
            text-decoration: line-through;
        }

        .taskMeta {
            display: flex;
            gap: 7px;
            flex-wrap: wrap;
        }

        .taskMeta > span {
            min-height: 25px;
            padding: 0 9px;
            display: inline-flex;
            align-items: center;
            border: 1px solid var(--color-border, #303640);
            border-radius: 999px;
            color: var(--color-muted, #8a929e);
            font-family: "Antonio", sans-serif;
            font-size: 0.57rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .priorityHigh {
            border-color: rgba(255, 84, 112, 0.28) !important;
            background: rgba(255, 84, 112, 0.08);
            color: #ff7088 !important;
        }

        .priorityMedium {
            border-color: rgba(255, 190, 70, 0.28) !important;
            background: rgba(255, 190, 70, 0.07);
            color: #ffc45e !important;
        }

        .priorityLow {
            border-color: rgba(0, 255, 179, 0.22) !important;
            background: rgba(0, 255, 179, 0.06);
            color: var(--color-secondary, #00ffb3) !important;
        }

        .taskContent {
            margin-top: 16px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 18px;
            align-items: start;
        }

        .taskContent h3 {
            color: var(--color-heading, #f4f6fa);
            font-family: "Antonio", sans-serif;
            font-size: 1.95rem;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: -0.02em;
        }

        .taskContent p {
            margin-top: 10px;
            color: var(--color-muted, #8a929e);
            font-size: 0.74rem;
            line-height: 1.7;
        }

        .statusBadge {
            min-height: 38px;
            padding: 0 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border, #303640);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.03);
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .statusPending {
            color: #ffc45e;
        }

        .statusDone {
            color: var(--color-secondary, #00ffb3);
        }

        .taskActions {
            margin-top: 18px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .emptyState {
            min-height: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px dashed var(--color-border, #303640);
            border-radius: 18px;
            color: var(--color-muted, #8a929e);
            text-align: center;
        }

        .emptyState strong {
            color: var(--color-heading, #f4f6fa);
            font-family: "Antonio", sans-serif;
            font-size: 1.6rem;
            text-transform: uppercase;
        }

        .emptyState span {
            font-size: 0.74rem;
        }

        @media (max-width: 1150px) {
            .toolbar {
                grid-template-columns: 1fr 1fr;
            }

            .searchBox {
                grid-column: 1 / -1;
            }
        }

        @media (max-width: 600px) {
            padding: 16px;

            .toolbar {
                grid-template-columns: 1fr;
            }

            .searchBox {
                grid-column: auto;
            }

            .toolbarActions {
                justify-content: stretch;
            }

            .toolbarActions button {
                flex: 1;
            }

            .taskContent {
                grid-template-columns: 1fr;
            }

            .statusBadge {
                width: fit-content;
            }

            .taskActions button {
                flex: 1;
            }
        }
    `,
};
