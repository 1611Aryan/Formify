import styled from "@emotion/styled"
import googleLogo from "./../../Media/Oauth-Icons/google.png"
import facebookLogo from "./../../Media/Oauth-Icons/facebook.png"
import twitterLogo from "./../../Media/Oauth-Icons/twitter.png"

const HomeOauth = () => {
  return (
    <StyledHomeOAuth>
      <div className="providers">
        <div className="google oauth">
          <picture>
            <source srcSet={googleLogo} type="image/png" />
            <img src={googleLogo} alt="" />
          </picture>
          <span>Google</span>
        </div>
        <div className="oauth facebook ">
          <picture>
            <source srcSet={facebookLogo} type="image/png" />
            <img src={facebookLogo} alt="" />
          </picture>
          <span>Facebook</span>
        </div>
        <div className="twitter oauth">
          <picture>
            <source srcSet={twitterLogo} type="image/png" />
            <img src={twitterLogo} alt="" />
          </picture>
          <span>Twitter</span>
        </div>
      </div>
    </StyledHomeOAuth>
  )
}

const StyledHomeOAuth = styled.div`
  width: 100%;

  .providers {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > * + * {
      margin-left: 1rem;
    }

    .oauth {
      flex: 1;
      border-radius: 5px;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0.6em 0;

      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

      transition: all 200ms;

      cursor: pointer;

      --size: 28px;

      picture {
        width: var(--size);
        height: var(--size);
        display: block;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      span {
        width: 8ch;
        font-size: 1.1rem;
      }

      &:hover {
        transform: scale(1.05);
      }
    }

    .google {
      --size: 26px;
      background: #fff;
    }

    .facebook {
      background: #1877f2;
      color: #fff;
    }

    .twitter {
      background: #26a6d1;
      color: #fff;
    }
  }
`
export default HomeOauth
