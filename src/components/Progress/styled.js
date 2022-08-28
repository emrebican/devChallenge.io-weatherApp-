import styled from "styled-components";

const Wrapper = styled.div`
`;

const Progress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`;

const Line = styled.div`
    color: #A09FB1;
    line-height: 20px;
    font-size: 12px;
    font-weight: 600;
`;

const ProgressBar = styled.div`
    position: relative;
    height: 10px;
    background-color: #E7E7EB;
    border-radius: 10px;

    &::after {
        content: "";
        display: block;
        width: ${(props) => props.progress};
        height: 100%;
        border-radius: 6px;
        transition: width ease 1s;
        background: #FFEC65;
    }

    &::before {
        position: absolute;
        content: "%";
        right: 0;
        top: 10px;
        color: #A09FB1;
        font-size: 12px;
        font-weight: 700;

    }
`;

export { Wrapper, Progress, Line, ProgressBar };