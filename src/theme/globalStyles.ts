import { createGlobalStyle } from 'styled-components';
import { theme } from '.';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: ${theme.fonts.body};
        background-color: ${theme.colors.background};
        overflow: hidden;
    }
`;

export default GlobalStyle;
