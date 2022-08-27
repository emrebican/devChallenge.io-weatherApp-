import styled from "styled-components";

const Main = styled.div`
    flex-basis: 73%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #100E1D;
`;

const Top = styled.div`
    width: 72%;
    margin: 0 auto;
    background-color: red;
    flex: 1.2;
`;

const Bottom = styled.div`
    width: 72%;
    margin: 0 auto;
    background-color: blue;
    flex: 2;

    h2 {
        font-size: 24px;
        font-weight: 700;
        color: #E7E7EB;
    }
`;

export { Main, Top, Bottom };