import styled from "styled-components";

const HighWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    /* width: 428px; */
    width: 48%;
    height: ${(props) => (props.type ? "204px" : "160px")};
    background-color: #1E213A;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #E7E7EB;
    margin-bottom: -0.8rem;
`;

const Content = styled.div`
    span{
        font-size: 36px;
        font-weight: 500;
        color: #E7E7EB;

        &:nth-child(2n-1) {
            font-size: 72px;
            font-weight: 700;
            margin-right: 6px;
        }
    }
`;

const Direction = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #E7E7EB;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
        width:29px;
        height: 29px;
        background-color: rgba(255, 255, 255, 0.3);
        color: #E7E7EB;
        transform: rotate(-180deg);
        border-radius: 50%;
    }
`;

export { HighWrapper, Title, Direction, Content };