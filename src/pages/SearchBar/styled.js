import styled from "styled-components";

const SearchBar_Wrapper = styled.div`
    position: relative;
    text-align: center;
    flex-basis: 27%;
    min-height: 100vh;
    background-color: #1E213A;
`;

const Cancel = styled.div`
    position: absolute;
    top: 1.6rem;
    right: 3rem;
    font-size: 25px;
    cursor: pointer;
    color: #E7E7EB;
`;

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 75%;
    margin: 82px auto;
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
`;

const Select = styled.select`
    width: 380px;
    height: 64px;
    outline: none;
    border: 1px solid #616475;
    background-color: transparent;
    color: #616475;
`;

export { SearchBar_Wrapper, Cancel, Form, Input_Wrapper, Button, Select };