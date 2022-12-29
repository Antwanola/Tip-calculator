import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
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
