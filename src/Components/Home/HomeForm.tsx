import styled from "@emotion/styled"
import axios from "axios"
import React, { useState } from "react"
import { loginEndpoint } from "../../Endpoints"

const HomeForm = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios[loginEndpoint.method](loginEndpoint.url, input, {
        withCredentials: true,
      })
      console.log({ res })
    } catch (err: any) {
      console.log(err.response.status)
      if (err.response && err.response.status && err.response.status === 401)
        setError("🛈 Incorrect Username or Password")
      else if (
        err.response &&
        err.response.status &&
        err.response.status === 500
      )
        setError("🛈 Please Try Again Later")
      else setError("🛈 Please Try Again Later")

      setTimeout(() => setError(""), 5000)
    }
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <div className="error">{error}</div>
      <div className="container">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          value={input.username}
          onChange={changeHandler}
          name="username"
          autoFocus
          required
        />
      </div>
      <div className="container">
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          value={input.password}
          onChange={changeHandler}
          name="password"
          required
        />
      </div>
      <button>Login</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > * + * {
    margin-top: var(--margin);
  }

  .error {
    font-size: 0.8rem;
    color: red;
    line-height: 1;
  }

  .container {
    width: 100%;

    > * + * {
      margin-top: calc(var(--margin) / 2);
    }
  }

  label {
    font-size: 1.3rem;
  }

  input {
    width: 100%;
    font-size: 1.1rem;
    font-family: inherit;
    padding: 0.6em;
    border: 1px solid var(--accentColor);
    border-radius: 3px;

    transition: all 200ms;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 1px var(--secondaryColor);
    }
  }

  button {
    background: var(--secondaryColor);
    padding: 0.6em 2.5em;
    font-size: 1.1em;
    color: #fff;
    border-radius: 3px;

    transition: all 200ms;

    &:hover {
      background: var(--accentColor);
    }
  }
`

export default HomeForm
