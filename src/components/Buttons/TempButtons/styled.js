import styled from "styled-components";

const Buttons_Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 1rem;
`;

const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: ${(props) => props.active ? "#E7E7EB" : "#585676"};
    color: ${(props) => (props.active ? "black" : "white")};
    font-family: 'Raleway';
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 4px 0 #000;
    transition: ease all .5s;
`;

export { Buttons_Wrapper, Button };