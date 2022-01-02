import styled from "@emotion/styled"
import { useState } from "react"

import UserMenu from "../../Components/User/Menu"
import Dashboard from "../../Components/User/Dashboard"
import Nav from "../../Components/User/NavBar"

const User = () => {
  const [selected, setSelected] = useState("dashboard")

  return (
    <StyledUser>
      <Nav />
      <StyledMain>
        <UserMenu selected={selected} setSelected={setSelected} />
        <Dashboard />
      </StyledMain>
    </StyledUser>
  )
}

const StyledUser = styled.div`
  width: 100%;
  height: 100vh;

  background: linear-gradient(to bottom, var(--primaryColor), #114882);

  --size: 0.15;
  padding: 0 var(--padding);
`
const StyledMain = styled.main`
  display: flex;
  align-items: center;
  height: 90vh;
  padding: 1rem 0;
`

export default User
