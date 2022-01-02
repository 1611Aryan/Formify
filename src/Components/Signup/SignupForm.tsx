import styled from "@emotion/styled"
import axios from "axios"
import { useState } from "react"
import { signupEndpoint } from "../../Endpoints"

const SignupForm = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios[signupEndpoint.method](signupEndpoint.url, input, {
        withCredentials: true,
      })
      setError("")
      setSuccess("🛈 Account Created. Login to continue")
    } catch (err: any) {
      setSuccess("")
      if (err.response && err.response.message) setError(err.response.message)
      else setError("🛈 Please Try Again Later")
      setTimeout(() => setError(""), 5000)
    }
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <div className="message">
        <span className="error">{error}</span>
        <span className="success">{success}</span>
      </div>
      <div className="container">
        <label htmlFor="username">USERNAME</label>
        <br />
        <input
          name="username"
          value={input.username}
          onChange={changeHandler}
          required
          autoFocus
          type="text"
        />
      </div>
      <div className="container">
        <label htmlFor="email">EMAIL</label>
        <br />
        <input
          name="email"
          value={input.email}
          onChange={changeHandler}
          required
          type="email"
        />
      </div>
      <div className="container">
        <label htmlFor="password">PASSWORD</label>
        <br />
        <input
          name="password"
          value={input.password}
          onChange={changeHandler}
          required
          type="password"
        />
      </div>
      <button>SIGNUP</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * + * {
    margin-top: 1rem;
  }

  font-size: 0.9rem;

  .message {
    font-size: 0.8rem;

    line-height: 1;
    height: 0.8rem;
    .error {
      color: red;
    }
    .success {
      color: green;
    }
  }

  .container {
    width: 100%;
    > * + * {
      margin-top: 1rem;
    }
  }

  label {
    font-size: 1.1em;
  }

  input {
    width: 100%;
    border-bottom: 2px solid #5bf4d0;
    background: #afe8fa22;
    font-size: 1.1em;
    font-family: inherit;
    padding: 0.6em;

    transition: all 200ms;

    &:focus {
      background: #afe8fa;
    }
  }

  button {
    background: var(--primaryColor);
    padding: 0.6em 1.5em;
    font-size: 1.1em;
    color: #fff;
    border-radius: 3px;

    transition: all 200ms;

    &:hover {
      background: #1093eb;
    }
  }
`

export default SignupForm
