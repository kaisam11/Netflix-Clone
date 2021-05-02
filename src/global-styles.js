import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;

        @media (min-width: 1900px) {
            font-size: 12px;
        }
    }

    body {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000;
    }

    @media (max-width: 600px) {
        .header__Container-t8lkk2-2 {
            height: 7rem;
            background-color: rgba(0,0,0, .5);
    }

    .header__Container-t8lkk2-2:last-of-type {
            background: transparent;
            height: inherit;
    }

`