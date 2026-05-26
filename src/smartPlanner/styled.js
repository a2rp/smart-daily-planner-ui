import styled from "styled-components";

export const Styled = {
    Wrapper: styled.main`
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        background:
            radial-gradient(
                circle at 12% 8%,
                rgba(0, 212, 255, 0.15),
                transparent 28%
            ),
            radial-gradient(
                circle at 88% 18%,
                rgba(0, 255, 163, 0.1),
                transparent 30%
            ),
            linear-gradient(
                135deg,
                var(--color-bg),
                var(--color-bg-soft) 48%,
                var(--color-bg)
            );
        color: var(--color-heading);
    `,

    Container: styled.div`
        width: min(100% - 32px, 1220px);
        margin: 0 auto;
        padding: 30px 0 70px;
    `,

    TopBar: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 18px;
        margin-bottom: 18px;
        padding: 14px 16px;
        border: 1px solid var(--color-border);
        border-radius: 22px;
        background: var(--color-surface);
        box-shadow: var(--shadow-card);
        backdrop-filter: blur(16px);

        div {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        span {
            color: var(--color-muted);
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        strong {
            color: var(--color-heading);
            font-size: 14px;
        }

        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-height: 40px;
            padding: 0 14px;
            border-radius: var(--radius-pill);
            color: #041012;
            background: linear-gradient(
                135deg,
                var(--color-primary),
                var(--color-secondary)
            );
            cursor: pointer;
            transition: 0.25s;
        }

        button:hover {
            transform: translateY(-2px);
        }

        @media (max-width: 540px) {
            flex-direction: column;
            align-items: stretch;

            button {
                width: 100%;
            }
        }
    `,

    Hero: styled.section`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 24px;
        margin-bottom: 22px;
        padding: 30px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: var(--color-surface);
        box-shadow: var(--shadow-soft);
        backdrop-filter: blur(16px);

        .eyebrow {
            display: inline-flex;
            margin-bottom: 12px;
            color: var(--color-secondary);
            font-size: 12px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
        }

        h1 {
            max-width: 720px;
            margin-bottom: 12px;
            color: var(--color-heading);
            font-size: clamp(42px, 6vw, 86px);
            line-height: 0.92;
            letter-spacing: -0.05em;
        }

        p {
            max-width: 680px;
            color: var(--color-text);
            font-size: 14px;
        }

        .heroActions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        button,
        label {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            min-width: 120px;
            height: 44px;
            padding: 0 18px;
            border-radius: var(--radius-pill);
            color: #041012;
            background: linear-gradient(
                135deg,
                var(--color-primary),
                var(--color-secondary)
            );
            cursor: pointer;
            transition: 0.25s;
            overflow: hidden;
        }

        input {
            display: none;
        }

        button:hover,
        label:hover {
            transform: translateY(-3px);
            box-shadow: 0 18px 38px rgba(0, 212, 255, 0.18);
        }

        @media (max-width: 760px) {
            flex-direction: column;
            padding: 24px;

            .heroActions,
            button,
            label {
                width: 100%;
            }
        }
    `,

    StatsGrid: styled.section`
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 14px;
        margin-bottom: 22px;

        .statCard {
            min-height: 128px;
            padding: 20px;
            border-radius: 24px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            box-shadow: var(--shadow-card);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        svg {
            color: var(--color-primary);
            font-size: 22px;
        }

        span {
            color: var(--color-muted);
            font-size: 12px;
        }

        strong {
            color: var(--color-heading);
            font-size: 34px;
            line-height: 1;
        }

        .progressTrack {
            width: 100%;
            height: 8px;
            margin-top: auto;
            overflow: hidden;
            border-radius: 999px;
            background: var(--color-surface-strong);
        }

        .progressFill {
            height: 100%;
            border-radius: inherit;
            background: linear-gradient(
                135deg,
                var(--color-primary),
                var(--color-secondary)
            );
            transition: 0.3s;
        }

        @media (max-width: 1050px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        @media (max-width: 700px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,

    MainGrid: styled.section`
        display: grid;
        grid-template-columns: 390px 1fr;
        gap: 22px;
        align-items: start;

        @media (max-width: 980px) {
            grid-template-columns: 1fr;
        }
    `,

    FormCard: styled.aside`
        position: sticky;
        top: 22px;
        padding: 24px;
        border-radius: 28px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        box-shadow: var(--shadow-card);
        backdrop-filter: blur(14px);

        .sectionHead {
            margin-bottom: 22px;
        }

        .sectionHead span {
            display: inline-flex;
            margin-bottom: 8px;
            color: var(--color-primary);
            font-size: 11px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
        }

        h2 {
            color: var(--color-heading);
            font-size: 34px;
            line-height: 1;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .twoFields {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        label {
            color: var(--color-muted);
            font-size: 12px;
        }

        input,
        textarea,
        select {
            width: 100%;
            border: 1px solid var(--color-border);
            outline: none;
            border-radius: 18px;
            background: var(--color-surface-strong);
            color: var(--color-heading);
            font-size: 13px;
            transition: 0.2s;
        }

        input,
        select {
            height: 46px;
            padding: 0 15px;
        }

        textarea {
            min-height: 120px;
            resize: vertical;
            padding: 14px 15px;
        }

        input:focus,
        textarea:focus,
        select:focus {
            border-color: rgba(0, 212, 255, 0.45);
            box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.08);
        }

        option {
            background: var(--color-bg);
            color: var(--color-heading);
        }

        .buttonRow {
            display: flex;
            gap: 10px;
        }

        .buttonRow button {
            flex: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 46px;
            border-radius: var(--radius-pill);
            color: #041012;
            background: linear-gradient(
                135deg,
                var(--color-primary),
                var(--color-secondary)
            );
            cursor: pointer;
            transition: 0.25s;
        }

        .buttonRow button:hover {
            transform: translateY(-2px);
            box-shadow: 0 16px 34px rgba(0, 212, 255, 0.18);
        }

        .buttonRow .ghostButton {
            color: var(--color-heading);
            border: 1px solid var(--color-border);
            background: var(--color-surface-strong);
        }

        @media (max-width: 980px) {
            position: static;
        }

        @media (max-width: 520px) {
            .twoFields {
                grid-template-columns: 1fr;
            }

            .buttonRow {
                flex-direction: column;
            }
        }
    `,

    TaskPanel: styled.section`
        min-height: 580px;
        padding: 22px;
        border-radius: 28px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        box-shadow: var(--shadow-card);

        .toolbar {
            display: grid;
            grid-template-columns: 1fr 120px 120px 140px;
            gap: 12px;
            margin-bottom: 12px;
        }

        .searchBox {
            position: relative;
        }

        .searchBox svg {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-muted);
        }

        input,
        select {
            width: 100%;
            height: 44px;
            border-radius: var(--radius-pill);
            border: 1px solid var(--color-border);
            outline: none;
            background: var(--color-surface-strong);
            color: var(--color-heading);
            font-size: 12px;
        }

        input {
            padding: 0 16px 0 42px;
        }

        select {
            padding: 0 14px;
        }

        input:focus,
        select:focus {
            border-color: rgba(0, 212, 255, 0.45);
            box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.08);
        }

        option {
            background: var(--color-bg);
        }

        .miniActions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-bottom: 18px;
        }

        .miniActions button {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            height: 34px;
            padding: 0 12px;
            border-radius: var(--radius-pill);
            color: var(--color-heading);
            background: var(--color-surface-strong);
            border: 1px solid var(--color-border);
            font-size: 12px;
            cursor: pointer;
            transition: 0.2s;
        }

        .miniActions button:hover {
            transform: translateY(-2px);
            border-color: rgba(0, 212, 255, 0.35);
        }

        .taskList {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .emptyBox {
            min-height: 260px;
            display: grid;
            place-items: center;
            border-radius: 22px;
            border: 1px dashed var(--color-border-strong);
            color: var(--color-muted);
            text-align: center;
            padding: 22px;
        }

        .taskCard {
            padding: 18px;
            border-radius: 22px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-strong);
            transition: 0.25s;
        }

        .taskCard:hover {
            transform: translateY(-3px);
            border-color: rgba(0, 212, 255, 0.28);
            box-shadow: var(--shadow-card);
        }

        .taskCard.done {
            opacity: 0.72;
        }

        .taskTop {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 12px;
        }

        .metaRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
        }

        .priority,
        .category,
        .date {
            display: inline-flex;
            padding: 5px 9px;
            border-radius: 999px;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .status {
            width: 66px;
            height: 66px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            border-radius: 50%;
            color: var(--color-text);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            font-size: 10px;
            font-weight: 700;
            text-align: center;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .priority.low {
            color: var(--color-success);
            background: rgba(158, 228, 147, 0.1);
            border: 1px solid rgba(158, 228, 147, 0.18);
        }

        .priority.medium {
            color: var(--color-warning);
            background: rgba(255, 209, 102, 0.1);
            border: 1px solid rgba(255, 209, 102, 0.18);
        }

        .priority.high {
            color: var(--color-danger);
            background: rgba(255, 84, 112, 0.1);
            border: 1px solid rgba(255, 84, 112, 0.2);
        }

        .category,
        .date {
            color: var(--color-text);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
        }

        h3 {
            color: var(--color-heading);
            font-size: 26px;
            line-height: 1.05;
        }

        .done h3 {
            text-decoration: line-through;
            color: var(--color-muted);
        }

        p {
            margin-bottom: 16px;
            color: var(--color-text);
            font-size: 13px;
        }

        .taskActions {
            display: flex;
            flex-wrap: wrap;
            gap: 9px;
        }

        .taskActions button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            min-height: 36px;
            padding: 0 12px;
            border-radius: var(--radius-pill);
            color: var(--color-heading);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            font-size: 12px;
            cursor: pointer;
            transition: 0.2s;
        }

        .taskActions button:hover {
            transform: translateY(-2px);
            color: #041012;
            background: linear-gradient(
                135deg,
                var(--color-primary),
                var(--color-secondary)
            );
        }

        .taskActions .danger:hover {
            color: #fff;
            background: rgba(255, 80, 110, 0.18);
            border-color: rgba(255, 80, 110, 0.32);
        }

        @media (max-width: 900px) {
            .toolbar {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 620px) {
            .toolbar {
                grid-template-columns: 1fr;
            }

            .miniActions {
                flex-direction: column;
            }

            .taskTop {
                flex-direction: column;
            }

            h3 {
                font-size: 23px;
            }
        }
    `,
};
