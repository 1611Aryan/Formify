/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import HomeForm from "../../Components/Home/HomeForm"
import HomeOauth from "../../Components/Home/HomeOauth"
import NavBar from "../../Components/Home/NavBar"
import Or from "../../Components/Or"
import img from "./../../Media/Home/home.jpg"

const Home = () => {
  return (
    <StyledHome>
      <NavBar />
      <main>
        <StyledText>
          <div>
            <h1>Formify</h1>
            <h3>
              <strong>Create</strong> and <strong>Manage</strong> all your forms
              in one place
            </h3>
          </div>

          <svg viewBox="-1223.535 548.462 96 120">
            <g>
              <path d="M-1131.171,587.375c-1.775,2.86-3.714,5.51-5.79,7.947c-10.388-11.543-23.979-17.98-38.574-17.979   c-14.595,0-28.185,6.438-38.573,17.979c-2.076-2.438-4.015-5.087-5.79-7.947l-1.274,0.791c1.856,2.99,3.887,5.756,6.064,8.296   c-2.177,2.539-4.208,5.305-6.064,8.295l1.274,0.791c1.775-2.86,3.714-5.51,5.79-7.946c10.388,11.541,23.978,17.979,38.573,17.979   s28.186-6.438,38.573-17.979c2.076,2.437,4.015,5.086,5.79,7.946l1.274-0.791c-1.856-2.99-3.887-5.756-6.064-8.295   c2.177-2.54,4.208-5.306,6.064-8.296L-1131.171,587.375z M-1175.534,614.08c-14.214,0-27.46-6.31-37.581-17.618   c10.121-11.31,23.367-17.619,37.58-17.619c14.214-0.001,27.459,6.31,37.581,17.619   C-1148.074,607.771-1161.32,614.08-1175.534,614.08z" />
            </g>
          </svg>
        </StyledText>
        <StyledSide>
          <img className="background" src={img} alt="" />
          <div className="overlay"></div>
          <div className="content">
            <HomeForm />
            <Or message="Or, Login with" />
            <HomeOauth />
          </div>
        </StyledSide>
      </main>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  --size: 0.56;
  --navHeight: 9vh;
  --accentColor: #f85191;
  --background: #fff9fb;
  // --accentColor: #f07e32;
  main {
    width: 100%;
    height: calc(100vh - var(--navHeight, 8vh));
    display: flex;
    background: var(--background);
  }
`

const StyledText = styled.section`
  width: calc(100% * var(--size));
  height: 100%;
  position: relative;

  display: flex;
  align-items: center;

  padding-left: var(--padding);
  div {
    width: 80%;
  }
  h1 {
    font-family: var(--fontCursive);
    font-size: 6rem;
    color: var(--primaryColor);
  }
  h3 {
    font-size: 2rem;
    font-weight: 300;
    strong {
      color: var(--muted);
    }
  }

  svg {
    position: absolute;
    top: 100%;
    left: 0;
    transform: translate(-50%, -40%) rotate(-45deg);
    width: 450px;
    fill: red;
    path {
      fill: var(--primaryColor);
    }
  }
`

const StyledSide = styled.section`
  width: calc(100% * (1 - var(--size)));

  display: grid;
  place-items: center;

  padding: 0 var(--padding);

  position: relative;

  .background {
    position: absolute;
    inset: 0;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.1);
  }

  .content {
    z-index: 2;
    width: 100%;
    background: #fff;
    background: var(--background);
    border-radius: 5px;
    padding: 2em 1.5em;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    --margin: 2rem;

    > * + * {
      margin-top: var(--margin);
    }
  }
`

export default Home
