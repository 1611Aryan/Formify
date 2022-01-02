import styled from "@emotion/styled"
import { IoSettingsSharp } from "react-icons/io5"
import { MdDashboard } from "react-icons/md"
import { SiFormstack } from "react-icons/si"

const UserMenu: React.FC<{
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}> = ({ selected, setSelected }) => {
  return (
    <StyledMenu>
      <ul>
        <li
          className={selected === "dashboard" ? "active" : ""}
          onClick={() => setSelected("dashboard")}
        >
          <MdDashboard />
          <span>Dashboard</span>
        </li>
        <li
          className={selected === "forms" ? "active" : ""}
          onClick={() => setSelected("forms")}
        >
          <SiFormstack />
          <span>My Forms</span>
        </li>
        <li
          className={selected === "settings" ? "active" : ""}
          onClick={() => setSelected("settings")}
        >
          <IoSettingsSharp />
          <span>Settings</span>
        </li>
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.section`
  width: calc(100% * var(--size));
  height: 100%;
  display: grid;
  place-items: center;

  ul {
    width: 100%;
    padding-right: 1rem;
    > * + * {
      margin-top: 1.5rem;
    }
    li {
      width: 100%;
      position: relative;
      color: #fff;
      padding: 0.5rem 0.25rem 0.5rem 0;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      font-size: 1.25rem;

      cursor: pointer;

      transition: all 200ms;
      transform-origin: left;
      &::before {
        transition: all 200ms;
      }
      span {
        z-index: 2;
        margin-left: 1rem;
      }
      svg {
        z-index: 2;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
    .active {
      &:hover {
        transform: none;
      }

      &::before {
        content: "";
        position: absolute;

        top: 0;
        right: 0;
        width: calc(100vw * 1.5 * var(--size));
        height: 120%;
        transform: translateY(-10%);
        background: #177698;
        border-radius: 0 20px 20px 0;
      }
    }
  }

  button {
    color: #fff;
    background: transparent;
    font-size: 2.5rem;
  }
`

export default UserMenu
