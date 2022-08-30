import styled from "styled-components";

const Card_Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* width: 120px; */
    width: 100%;
    height: 177px;
    background-color: #1E213A;

    @media (max-width: 1200px) {
        width: 120px;
    }
`;

const Title = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #E7E7EB;

    span{
        display: ${(props) => props.type ? "none" : "block"}
    }

    @media (max-width: 1300px) {
        font-size: 14px;
    }

    @media (max-width: 1200px) {
        font-size: 16px;
    }
`;

const ImageWrapper = styled.img`
    height: 72px;
    object-fit: cover;
    object-position: center;
    margin-top: -1.5rem;
`;

const Temps = styled.div`
    display: flex;
    gap: 1rem;
    
    span {
        font-size: 18px;
        font-weight: 500;
        color: #E7E7EB;

        &:nth-child(2n) {
            color: #A09FB1;
        }
    }

    @media (max-width: 1350px) {
        flex-direction: column;
        gap: .5rem;
    }

    @media (max-width: 1200px) {
        flex-direction: row;
        gap: 1rem;
    }
`;

export { Card_Wrapper, ImageWrapper, Title, Temps };