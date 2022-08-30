import styled from "styled-components";

const SearchBar_Wrapper = styled.div`
    position: relative;
    text-align: center;
    flex-basis: 27%;
    min-height: 100vh;
    min-width: 350px;
    background-color: #1E213A;
    display: ${(props) => (props.searchbarVisible ? "block" : "none")};
    transition: all ease .5s;
`;

const Cancel = styled.div`
    position: absolute;
    top: 1.6rem;
    right: 3rem;
    font-size: 25px;
    cursor: pointer;
    color: #E7E7EB;

    @media (max-width: 1200px) {
        top: 18px;
        right: 18px; 
    }
`;

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 75%;
    margin: 82px auto;

    @media (max-width: 1200px) {
        width: 90%;
    }
`;

const Button = styled.button`
    width: 100px;
    height: 48px;
    border: none;
    background-color: #3C47E9;
    color: #E7E7EB;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Raleway';
    transition: ease all .4s;

    &:hover {
        background-color: #E7E7EB;
        color: #3C47E9;
    }

    &:active {
        transition: ease all .2s;
        transform: scale(0.9);
    }
`;

const Input_Wrapper = styled.div`
    width: 280px;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 15px;
    border: 1px solid #E7E7EB;
        
    svg{
        color: #616475;
        font-size: 30px;
    }

    input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: 500;
        color: #616475;
        font-family: 'Raleway';
    }

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const CityBtn = styled.button`
    border: none;
    display: block;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Raleway';
    letter-spacing: 1.5px;
    margin: 3rem 0 2rem 5rem;
    color: #E7E7EB;
    background-color: transparent;
    cursor: pointer;

    &:hover{
        color: #616475;
    }

    @media (max-width: 1200px) {
        margin: 3rem 2rem;
    }
`;


export { SearchBar_Wrapper, Cancel, Form, Input_Wrapper, Button, CityBtn };