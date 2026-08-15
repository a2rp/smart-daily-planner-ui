import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;
        overflow-x: hidden;
        background:
            radial-gradient(
                circle at 8% 10%,
                rgba(0, 212, 255, 0.08),
                transparent 30%
            ),
            radial-gradient(
                circle at 92% 18%,
                rgba(0, 255, 179, 0.06),
                transparent 28%
            ),
            var(--color-bg, #07090d);
        color: var(--color-text, #d4d8df);

        button,
        input,
        textarea,
        select {
            font: inherit;
        }

        button {
            cursor: pointer;
        }
    `,

    Container: styled.main`
        width: min(1440px, calc(100% - 48px));
        margin: 0 auto;
        padding: 42px 0 90px;

        @media (max-width: 700px) {
            width: calc(100% - 28px);
            padding-top: 24px;
            padding-bottom: 64px;
        }
    `,

    MainGrid: styled.section`
        margin-top: 18px;
        display: grid;
        grid-template-columns:
            minmax(320px, 0.72fr)
            minmax(0, 1.5fr);
        gap: 18px;
        align-items: start;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,
};
