import styled from "@emotion/styled"
import React, { useLayoutEffect, useRef, useState } from "react"
import CreateForm from "./CreateForm"

const Dashboard = () => {
  const scrollbarRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState({
    scrollbar: 0,
    thumb: {
      height: 0,
      top: 0,
    },
  })

  useLayoutEffect(() => {
    if (scrollbarRef.current) {
      const total = scrollbarRef.current.scrollHeight
      const view = scrollbarRef.current.offsetHeight
      setHeight(height => ({
        scrollbar: total,
        thumb: { ...height.thumb, height: (view / total) * view },
      }))
    }
  }, [scrollbarRef])

  const scrollHandler = (e: React.UIEvent) => {
    if (scrollbarRef.current) {
      setHeight(height => ({
        ...height,
        thumb: { ...height.thumb, top: 2 * scrollbarRef.current!.scrollTop },
      }))
    }
  }

  return (
    <StyledDashboard
      ref={scrollbarRef}
      theme={{ height }}
      onScroll={scrollHandler}
    >
      {/* <ProfileSetup /> */}
      <div className="scrollbar">
        <span className="thumb"></span>
      </div>
      <h2>Hello Aryan</h2>
      <CreateForm />
      <section className="recent">
        <h4>Recents</h4>
        <div className="forms">
          <div className="form"></div>
          <div className="form"></div>
          <div className="form"></div>
          <div className="form"></div>
        </div>
      </section>
    </StyledDashboard>
  )
}

const StyledDashboard = styled.section<{
  theme: {
    height: {
      scrollbar: number
      thumb: { height: number; top: number }
    }
  }
}>`
  --scrollbarWidth: 5px;
  width: calc(100% * (1 - var(--size)));
  height: 100%;
  position: relative;
  padding: 1.5rem var(--scrollbarWidth) 1.5rem 2rem;
  overflow: hidden auto;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  .scrollbar {
    position: absolute;
    top: 0;
    right: 0;
    width: var(--scrollbarWidth);
    height: ${props => props.theme.height.scrollbar + "px"};
    background: transparent;
    overflow: hidden;
    z-index: 2;
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${props => props.theme.height.thumb.height + "px"};
      transform: translate3d(
        0,
        ${props => props.theme.height.thumb.top + "px"},
        0
      );
      background: var(--secondaryColor);
      border-radius: 5px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 1.75rem;
  }

  .recent {
    width: 100%;

    h4 {
      font-size: 1.2rem;
      color: #fffa;
      font-weight: 400;
    }
    .forms {
      padding: 0 0.5rem 0.5rem 0;
      margin-top: 1.5rem;
      overflow-x: auto;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      --boxsize: 250px;

      ::-webkit-scrollbar {
        height: 5px;
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--secondaryColor);
        border-radius: 10px;
      }

      > * + * {
        margin-left: 2rem;
      }

      .form {
        min-width: var(--boxsize);
        min-height: var(--boxsize);
        border-radius: 15px;
        background: #d5efea;
        cursor: pointer;
        display: grid;
        place-items: center;
        color: #4b4b4b;
        font-size: 5rem;
      }
    }
  }
`

export default Dashboard
