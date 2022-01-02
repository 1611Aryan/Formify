import styled from "@emotion/styled"
import { IoPersonCircleSharp } from "react-icons/io5"

const Nav = () => {
  return (
    <StyledNav>
      <h1>Formify</h1>
      <button>
        <IoPersonCircleSharp />
      </button>
    </StyledNav>
  )
}

const StyledNav = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10vh;

  h1 {
    font-size: 3rem;
    color: #fff;
  }
  button {
    color: #fff;
    background: transparent;
    font-size: 2.5rem;
  }
`
export default Nav
