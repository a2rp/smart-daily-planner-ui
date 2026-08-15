import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        position: relative;
        margin-top: 24px;
        padding: 72px 24px 24px;
        border-top: 1px solid var(--shell-border);
        background: var(--shell-bg);
        color: var(--shell-text);

        .footerInner {
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .footerTop {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 320px;
            gap: 80px;
        }

        .brandBlock {
            max-width: 820px;
        }

        .eyebrow {
            color: var(--shell-secondary);
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.16em;
        }

        h2 {
            margin-top: 16px;
            color: var(--shell-heading);
            font-family: "Antonio", sans-serif;
            font-size: clamp(3rem, 5vw, 5.6rem);
            font-weight: 700;
            line-height: 0.92;
            text-transform: uppercase;
            letter-spacing: -0.03em;
        }

        h2 span {
            display: block;
            color: var(--shell-primary);
        }

        .brandBlock p {
            max-width: 650px;
            margin-top: 22px;
            color: var(--shell-muted);
            font-size: 0.78rem;
            line-height: 1.8;
        }

        .footerLinks {
            display: grid;
            align-content: start;
        }

        .groupLabel {
            margin-bottom: 14px;
            color: var(--shell-muted);
            font-family: "Antonio", sans-serif;
            font-size: 0.55rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        .footerLinks a {
            min-height: 54px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 10px;
            align-items: center;
            border-bottom: 1px solid var(--shell-border);
            color: var(--shell-text);
            font-size: 0.7rem;
            transition:
                color 0.2s ease,
                padding-left 0.2s ease,
                border-color 0.2s ease;
        }

        .footerLinks a:hover {
            padding-left: 4px;
            color: var(--shell-primary);
            border-color: rgba(0, 212, 255, 0.32);
        }

        .footerLinks a > svg:first-child {
            color: var(--shell-secondary);
        }

        .footerLinks a > svg:last-child {
            width: 13px;
            height: 13px;
            color: var(--shell-muted);
        }

        .footerBottom {
            min-height: 74px;
            margin-top: 56px;
            padding-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            border-top: 1px solid var(--shell-border);
            color: var(--shell-muted);
            font-size: 0.62rem;
        }

        .footerBottom a {
            color: var(--shell-heading);
            font-weight: 700;
            transition: color 0.2s ease;
        }

        .footerBottom a:hover {
            color: var(--shell-primary);
        }

        @media (max-width: 800px) {
            .footerTop {
                grid-template-columns: 1fr;
                gap: 44px;
            }
        }

        @media (max-width: 600px) {
            padding: 56px 18px 20px;

            .footerBottom {
                align-items: flex-start;
                flex-direction: column;
                gap: 8px;
            }
        }
    `,
};
