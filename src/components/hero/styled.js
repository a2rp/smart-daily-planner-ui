import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        min-height: 470px;
        padding: clamp(34px, 6vw, 76px);
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.65fr);
        gap: clamp(40px, 7vw, 100px);
        align-items: center;
        overflow: hidden;
        border: 1px solid var(--color-border, #242a33);
        border-radius: 32px;
        background:
            radial-gradient(
                circle at 15% 20%,
                rgba(0, 212, 255, 0.08),
                transparent 32%
            ),
            radial-gradient(
                circle at 90% 15%,
                rgba(0, 255, 179, 0.07),
                transparent 30%
            ),
            var(--color-surface, #10131a);

        .heroGrid {
            position: absolute;
            inset: 0;
            opacity: 0.17;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.045) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.045) 1px,
                    transparent 1px
                );
            background-size: 60px 60px;
            pointer-events: none;
        }

        .heroContent,
        .heroPanel {
            position: relative;
            z-index: 2;
        }

        .eyebrow {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-secondary, #00ffb3);
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .eyebrowDot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--color-secondary, #00ffb3);
            box-shadow: 0 0 14px rgba(0, 255, 179, 0.5);
        }

        h1 {
            margin-top: 22px;
            color: var(--color-heading, #f4f6fa);
            font-family: "Antonio", sans-serif;
            font-size: clamp(4.6rem, 8vw, 9rem);
            font-weight: 700;
            line-height: 0.82;
            text-transform: uppercase;
            letter-spacing: -0.05em;
        }

        h1 span {
            display: block;
            color: var(--color-primary, #00d4ff);
        }

        .heroContent > p {
            max-width: 670px;
            margin-top: 28px;
            color: var(--color-muted, #8a929e);
            font-size: 0.9rem;
            line-height: 1.85;
        }

        .heroHighlights {
            margin-top: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px 22px;
        }

        .heroHighlights span {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: var(--color-muted, #8a929e);
            font-size: 0.68rem;
        }

        .heroHighlights svg {
            color: var(--color-secondary, #00ffb3);
        }

        .heroPanel {
            padding: 26px;
            border: 1px solid var(--color-border, #2a303a);
            border-radius: 24px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.045),
                rgba(255, 255, 255, 0.015)
            );
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
        }

        .panelTop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 20px;
        }

        .panelTop > div {
            display: grid;
            gap: 4px;
        }

        .panelTop span {
            color: var(--color-muted, #8a929e);
            font-family: "Antonio", sans-serif;
            font-size: 0.55rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .panelTop strong {
            color: var(--color-heading, #f4f6fa);
            font-family: "Antonio", sans-serif;
            font-size: 1.4rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .panelTop svg {
            color: var(--color-primary, #00d4ff);
        }

        .focusNumber {
            margin-top: 42px;
        }

        .focusNumber strong {
            display: block;
            color: var(--color-heading, #f4f6fa);
            font-family: "Antonio", sans-serif;
            font-size: clamp(5rem, 8vw, 7rem);
            font-weight: 700;
            line-height: 0.8;
        }

        .focusNumber span {
            display: block;
            margin-top: 10px;
            color: var(--color-muted, #8a929e);
            font-size: 0.68rem;
        }

        .panelProgress {
            margin-top: 34px;
        }

        .progressMeta {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            color: var(--color-muted, #8a929e);
            font-size: 0.62rem;
        }

        .progressMeta strong {
            color: var(--color-heading, #f4f6fa);
        }

        .progressTrack {
            height: 7px;
            margin-top: 10px;
            overflow: hidden;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
        }

        .progressFill {
            height: 100%;
            border-radius: inherit;
            background: linear-gradient(
                90deg,
                var(--color-primary, #00d4ff),
                var(--color-secondary, #00ffb3)
            );
            transition: width 0.3s ease;
        }

        .panelStats {
            margin-top: 28px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-top: 1px solid var(--color-border, #2a303a);
        }

        .panelStats div {
            padding-top: 18px;
            display: grid;
            gap: 5px;
        }

        .panelStats span {
            color: var(--color-muted, #8a929e);
            font-size: 0.58rem;
        }

        .panelStats strong {
            color: var(--color-heading, #f4f6fa);
            font-family: "Antonio", sans-serif;
            font-size: 1.4rem;
            font-weight: 600;
        }

        @media (max-width: 980px) {
            grid-template-columns: 1fr;

            .heroPanel {
                max-width: 560px;
            }
        }

        @media (max-width: 640px) {
            min-height: auto;
            padding: 30px 22px;
            border-radius: 24px;

            h1 {
                font-size: clamp(4rem, 19vw, 6rem);
            }

            .heroPanel {
                padding: 22px;
            }
        }
    `,
};
