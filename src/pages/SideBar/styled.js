import styled from "styled-components";

const Sidebar = styled.div`
    flex-basis: 27%;
    height: 100vh;
    background-color: #1E213A;
    position: relative;
    min-width: 350px;
`;

const Wrapper = styled.div`
    height: 50vh;
    background: linear-gradient(
      rgba(30, 33, 58, 0.95) 100%,
      rgba(30, 33, 58, 0.95) 100%
    ),
    url("assets/Cloud-background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 160%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 3.5rem;
`;


export { Sidebar, Wrapper, Buttons };