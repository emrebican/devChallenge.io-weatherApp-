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
`;

const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #E7E7EB;

    span{
        display: ${(props) => props.type ? "none" : "block"}
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
`;

export { Card_Wrapper, ImageWrapper, Title, Temps };