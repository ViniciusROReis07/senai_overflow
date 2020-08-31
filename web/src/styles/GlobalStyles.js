import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #111;
        --secundary: rgb(25, 25, 25);
        --white: #d9d9d9;
        --gray: #7a7a7a;
        --red: #aa0000;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-color: var(--primary);
        overflow-x: none;
    }

    input {
        color: var(--white);
        background-color: var(--secundary);
        font-size: 16px;
        border: 1px solid var(--white);
        padding: 10px;
        font-weight: bold;
        height: 30px;

        transition: background-color 0.2s;
    }
    textarea{
        color: var(--white);
        background-color: var(--secundary);
        font-size: 16px;
        border: 1px solid var(--white);
        padding: 10px;
        font-weight: bold;
        height: 30px;

        transition: background-color 0.2s;
        resize:none;
    }

    label {
        color: var(--white);
        letter-spacing: 2px;

        font-size: 20px;
    }

    input, button, textarea {
        :hover {
            background-color: var(--red);
            cursor:pointer;
        }
    }

    button {
        padding: 10px;

        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 18px;
        letter-spacing: 1px;

        color: var(--white);
        background-color: var(--primary);
        border: 1px solid var(--white);

        transition: background-color 0.2s;

        :active {
            color: var(--gray);
            border: 1px solid var(--white);
        }
    }
`;
