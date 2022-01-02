import styled from "@emotion/styled"

const Or: React.FC<{ message: string }> = ({ message }) => {
  return (
    <StyledOr>
      <div className="line"></div>
      <span>{message}</span>
      <div className="line"></div>
    </StyledOr>
  )
}

const StyledOr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * + * {
    margin-left: 5px;
  }
  --color: #414141;
  .line {
    flex: 1;
    height: 1px;
    background: var(--color);
  }
  span {
    font-size: 1rem;
    color: var(--color);
  }
`

export default Or
