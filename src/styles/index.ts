import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary-color: ${theme.primaryColor};
        --bg-color: ${theme.bgColor};
        --secondary-bg-color: ${theme.secondaryBgColor};
        --border-color: ${theme.borderColor};
        --white-color: ${theme.whiteColor};
    }

    body {
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
        background-color: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ::selection {
        background-color: var(--primary-color);
        color: var(--white-color);
    }
`;
