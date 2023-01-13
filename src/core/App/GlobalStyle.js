import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-size: 18px;
    letter-spacing: 0.05em;
    overflow-y: scroll;
    background: ${({ theme }) => theme.colors.site.background};
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.site.text};
    transition: background 0.3s;
    word-break: break-word;
    padding-bottom: 108px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      padding-bottom: 32px;
    }
  }
`;
