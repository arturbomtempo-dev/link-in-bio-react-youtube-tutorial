import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary-color: #2cb67d;
        --bg-color: #1e1e1e;
        --secondary-bg-color: #2a2a2a;
        --border-color: #3c3c3c;
        --white-color: #ededed;
    }

    body {
        font-family: 'Inter', sans-serif;
        height: 100vh;
        background-color: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
