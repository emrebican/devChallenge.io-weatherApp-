import styled from "styled-components";

const Select = styled.select`
    /* width: 380px; */
    width: 75%;
    height: 64px;
    margin: 2rem 0;
    margin-top: -1rem;
    padding: 20px;
    outline: none;
    border: 1px solid #616475;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Raleway';
    background-color: transparent;
    color: #616475;
    cursor: pointer;

    @media (max-width: 1200px) {
        width: 90%;
    }
`;

const Option = styled.option`
    background-color: #616475;
    color: #E7E7EB;
`;

export { Select, Option };