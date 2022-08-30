import styled from "styled-components";

const Sidebar = styled.div`
  flex-basis: 27%;
  /* height: 100%; */
  min-height: 100vh;
  position: relative;
  background-color: #1E213A;
  min-width: 350px;
  display: ${(props) => props.searchbarVisible ? "none" : "block"}
`;

const ImageWrapper = styled.div`
  height: 36vh;
  background: linear-gradient(
    rgba(30, 33, 58, 0.95) 100%,
    rgba(30, 33, 58, 0.95) 100%
  ),
  url("assets/Cloud-background.png");
  background-position: 50% 80%;
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
    font-size: 144px;
    font-weight: 500;
    color: #E7E7EB;

    span {
      font-size: 48px;
      font-weight: 400;
      color: #A09FB1;
    }
  }

  p {
    font-size: 36px;
    font-weight: 600;
    color: #A09FB1;
    margin-top: 1.4rem;
  }

  span, article {
    font-size: 18px;
    color: #88869D;
    letter-spacing: 0.8px;
  }

  span{
    margin-top: 2rem;
    font-weight: 500;
  }

  article {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: -1rem;
    font-weight: 600;

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