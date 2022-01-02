import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <StyledNavbar>
      <h1>
        <Link to="/">Formify</Link>
      </h1>
      <nav>
        <Link to="/">
          <button>LOGIN</button>
        </Link>
      </nav>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.header`
  width: 100%;
  height: var(--navHeight);
  padding: 0 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 2;

  border-bottom: 4px solid #5bf4d0;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin-left: 2em;
      background: var(--primaryColor);
      padding: 0.7em 1.5em;
      font-size: 0.9em;

      line-height: 1;

      color: #fff;
      border-radius: 5px;

      transition: all 200ms;

      &:hover {
        background: #1093eb;
      }
    }
  }
`

export default NavBar
