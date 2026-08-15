import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        margin-top: 18px;

        display: grid;
        grid-template-columns: repeat(4, 1fr) 1.15fr;
        gap: 14px;

        .statCard {
            position: relative;
            overflow: hidden;

            min-height: 170px;

            padding: 24px;

            display: flex;
            flex-direction: column;

            border: 1px solid var(--color-border);
            border-radius: 22px;

            background:
                linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.03),
                    rgba(255, 255, 255, 0.01)
                ),
                var(--color-surface);

            box-shadow:
                0 18px 42px rgba(0, 0, 0, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);

            transition:
                transform 0.25s ease,
                border-color 0.25s ease,
                box-shadow 0.25s ease;
        }

        .statCard::before {
            content: "";

            position: absolute;

            top: 0;
            left: 0;

            width: 100%;
            height: 3px;

            background: linear-gradient(
                90deg,
                var(--color-primary),
                var(--color-secondary)
            );

            opacity: 0.75;
        }

        .statCard:hover {
            transform: translateY(-6px);

            border-color: rgba(0, 212, 255, 0.34);

            box-shadow:
                0 26px 58px rgba(0, 0, 0, 0.15),
                0 0 26px rgba(0, 212, 255, 0.06);
        }

        .statTop {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 18px;
        }

        .statNumber {
            color: var(--color-muted);

            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 700;

            letter-spacing: 0.15em;

            text-transform: uppercase;
        }

        .statIcon {
            width: 44px;
            height: 44px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 50%;

            background: linear-gradient(
                135deg,
                rgba(0, 212, 255, 0.1),
                rgba(0, 255, 179, 0.04)
            );

            color: var(--color-primary);

            transition: 0.25s ease;
        }

        .statCard:hover .statIcon {
            transform: rotate(8deg) scale(1.08);

            border-color: rgba(0, 255, 179, 0.32);
        }

        .statIcon svg {
            width: 18px;
            height: 18px;
        }

        .statContent {
            margin-top: auto;
            padding-top: 34px;
        }

        .statContent span {
            display: block;

            color: var(--color-muted);

            font-size: 0.66rem;

            letter-spacing: 0.04em;
        }

        .statContent strong {
            display: block;

            margin-top: 8px;

            color: var(--color-heading);

            font-family: "Antonio", sans-serif;
            font-size: 2.85rem;
            font-weight: 700;
            line-height: 0.9;

            letter-spacing: -0.03em;
        }

        .progressCard {
            justify-content: space-between;
        }

        .progressLabel {
            color: var(--color-secondary);

            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 700;

            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .progressContent {
            margin-top: auto;
            padding-top: 26px;
        }

        .progressContent strong {
            display: block;

            color: var(--color-heading);

            font-family: "Antonio", sans-serif;
            font-size: 3.2rem;
            font-weight: 700;
            line-height: 0.9;

            letter-spacing: -0.03em;
        }

        .progressContent span {
            display: block;

            margin-top: 8px;

            color: var(--color-muted);

            font-size: 0.6rem;
        }

        .progressTrack {
            height: 8px;

            margin-top: 20px;

            overflow: hidden;

            border-radius: 999px;

            background: rgba(255, 255, 255, 0.06);
        }

        .progressFill {
            height: 100%;

            border-radius: inherit;

            background: linear-gradient(
                90deg,
                var(--color-primary),
                var(--color-secondary)
            );

            transition: width 0.4s ease;
        }

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);

            .progressCard {
                grid-column: span 2;
            }
        }

        @media (max-width: 560px) {
            grid-template-columns: 1fr;

            .progressCard {
                grid-column: auto;
            }

            .statCard {
                min-height: 155px;
            }

            .statContent strong {
                font-size: 2.5rem;
            }

            .progressContent strong {
                font-size: 2.8rem;
            }
        }
    `,
};
