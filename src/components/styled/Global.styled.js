import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
    }

    html {
        padding: 0;
        margin: 0;
        font-family: 'Rubik', sans-serif;
    }

    body {
        background: #effeff;
       
    }

`