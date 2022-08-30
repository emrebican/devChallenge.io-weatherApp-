import styled from "styled-components";

export const TopWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 40px;
    position: relative;
    transition: all ease .4s;
    

    @media (max-width: 1680px) {
        gap: 30px;
    }
    @media (max-width: 1350px) {
        gap: 20px;
    }
    @media (max-width: 1200px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        padding: 0 auto;
        margin-top: 52px;
        gap: 26px;
    }
`;