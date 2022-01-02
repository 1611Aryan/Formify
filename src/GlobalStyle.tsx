import { Global, css } from "@emotion/react"

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --fontNormal: "Lato", sans-serif;
    --fontCursive: "Lobster", cursive;
    --padding: 4rem;
    --primaryColor: #1974d2;
    --secondaryColor: #d4457b;
    --muted: #5c5c5c;
    // --secondaryColor: #eb6810;
  }
  body {
    font-family: var(--fontNormal);
  }

  h1 {
    font-family: var(--fontCursive);
  }

  ul {
    list-style-type: none;
  }

  button {
    border: 0;
    font-family: inherit;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }

  input {
    border: none;
    font-family: inherit;
    &:focus {
      outline: none !important;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
`

const GlobalStyle = () => <Global styles={styles} />

export default GlobalStyle
