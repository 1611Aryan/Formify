import styled from "@emotion/styled"

const ProfileSetup = () => {
  return (
    <StyledProfileSetup>
      <div className="setup">
        <h2>
          Finish
          <br /> Setting <br /> Up
        </h2>
        <form>
          <div className="row">
            <div className="inputContainer">
              <label htmlFor="firstName">First Name</label>
              <br />
              <br />
              <input type="text" name="firstName" autoFocus required />
            </div>
            <div className="inputContainer">
              <label htmlFor="lastName">Last Name</label>
              <br />
              <br />
              <input type="text" name="lastName" required />
            </div>
          </div>
          <div className="row">
            <div className="inputContainer">
              <label htmlFor="organization">Organization</label>
              <br />
              <br />
              <input type="text" name="organization" autoFocus required />
            </div>
          </div>
          <button>Finish</button>
        </form>
      </div>
    </StyledProfileSetup>
  )
}

const StyledProfileSetup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;

  display: grid;
  place-items: center;

  .setup {
    width: 60%;
    height: 60%;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 40% auto;
    grid-template-rows: 100%;
    padding: 2em;
    background: #d4ad45;

    h2 {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      font-size: 5rem;
      font-weight: 900;
    }
    form {
      background: #fff;
      border-radius: 0 12px 12px 0;

      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;
      color: #000;
      padding: 2em;

      .row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > * + * {
          margin-left: 1rem;
        }
      }

      .inputContainer {
        width: 100%;
      }

      label {
        font-size: 1.2rem;
      }
      input {
        background: rgba(212, 173, 69, 0.5);
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border-bottom: 3px solid #d4ad45;
      }

      button {
        background: var(--secondaryColor);
        color: #fff;
        padding: 0.6rem 1rem;
        font-size: 1.2rem;
        border-radius: 3px;
      }
    }
  }
`

export default ProfileSetup
