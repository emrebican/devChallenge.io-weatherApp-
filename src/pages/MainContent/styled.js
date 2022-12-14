import styled from "styled-components";

const Main = styled.div`
    flex-basis: 73%;
    /* height: 100%; */
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #100E1D;
`;

const Top = styled.div`
    width: 66%;
    margin: 2rem auto;
    margin-bottom: 3.2rem;
    flex: 3;
`;

const Bottom = styled.div`
    width: 66%;
    margin: 0 auto;
    flex: 1;

    h2 {
        font-size: 24px;
        font-weight: 700;
        color: #E7E7EB;
        margin-bottom: 2rem;

        @media (max-width: 500px) {
            text-align: center;
        }
    }

    @media (max-width: 1200px) {
        width: 80%;
    }
`;

export { Main, Top, Bottom };