import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary:#1b1b1b;
        --secundary: #212121;
        --white:#e6e6e6;
        --gray:#7A7A7A;
        --red: #7d0f0f;
    }
    *{
        margin:0;
        padding:0;
        outline:0;
    }

    body{
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-color: var(--secundary);
    }

    input{
        color: var(--white);
        background-color:var(--secundary);
        font-size:16px;
        border: 1px solid var(--white);
        padding:10px;
        font-weight:bold;
        height:30px;
    }
    label{
        color: var(--white);
        letter-spacing:2px;
        font-size:20px;
    }

    input,button{
        :hover{
            background-color:var(--red);
            transition: background-color 0.2s;
        }
    }
    button{
        padding:10px;
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size:20px;
        letter-spacing:1px;
        color:var(--white);
        background-color: var(--primary);
        border:1px solid var(--white);
        :active{
            color:var(--gray);
            border: 1px solid var(--gray);
        }
    }
`