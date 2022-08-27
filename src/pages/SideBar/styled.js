import styled from "styled-components";

const Sidebar = styled.div`
  flex-basis: 27%;
  height: 100vh;
  background-color: #1E213A;
  position: relative;
  min-width: 350px;
`;

const ImageWrapper = styled.div`
  height: 38vh;
  background: linear-gradient(
    rgba(30, 33, 58, 0.95) 100%,
    rgba(30, 33, 58, 0.95) 100%
  ),
  url("assets/Cloud-background.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 140%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  h2 {
    font-size: 8rem;
    font-weight: 400;
    color: #E7E7EB;

    span {
      font-size: 3.2rem;
      color: #A09FB1;
    }
  }

  p {
    font-size: 2rem;
    color: #A09FB1;
    margin-top: 2rem;
  }

  span, article {
    font-size: 1.2rem;
    color: #88869D;
    letter-spacing: 0.8px;
  }

  span{
    margin-top: 2rem;
  }

  article {
    margin-top: -2rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg {
      font-size: 1.4rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 3.5rem;
`;


export { Sidebar, ImageWrapper, Buttons, BottomWrapper };