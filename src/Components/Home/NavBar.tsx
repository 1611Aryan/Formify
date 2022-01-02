import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <StyledNavbar>
      <h1>Formify</h1>
      <nav>
        <ul>
          <li>ABOUT US</li>
          <li>GET IN TOUCH</li>
        </ul>

        <Link to="/signup">
          <button>SIGN UP</button>
        </Link>
      </nav>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.header`
  width: 100%;
  height: var(--navHeight);
  padding: 0 var(--padding);

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 2;

  border-bottom: 4px solid var(--accentColor);

  background: var(--background);

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        --color: var(--muted);
        color: var(--color);
        cursor: pointer;
        background-image: linear-gradient(var(--color), var(--color));
        background-repeat: no-repeat;
        background-size: 0% 2px;
        background-position: left bottom;

        font-size: 0.9em;
        font-weight: 600;

        transition: background-size ease 200ms;

        &:hover {
          background-size: 100% 2px;
        }
      }

      > * + * {
        margin-left: 2em;
      }
    }

    button {
      margin-left: 2em;
      background: var(--secondaryColor);
      padding: 0.7em 1.5em;
      font-size: 0.9em;

      line-height: 1;

      color: #fff;
      border-radius: 5px;

      transition: all 200ms;

      &:hover {
        background: var(--accentColor);
      }
    }
  }
`

export default NavBar
