import * as S from './styled';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoordinates, getWeather, setSearchQuery, addLocation, setVisible } from '../../features/weatherSlice';

import SelectComponent from '../../components/SelectComponent/SelectComponent';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineSearch } from 'react-icons/md';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.weather.searchQuery);
    const searchbarVisible = useSelector(state => state.weather.searchbarVisible);
    const coordinates = useSelector(state => state.weather.coordinates);
    const [input, setInput] = useState("");

    console.log(coordinates);

    let lat = coordinates?.lat;
    let lon = coordinates?.lon;

    useEffect(() => {
        // Need to be fixed**********************************************************************
        dispatch(getCoordinates(searchQuery ? searchQuery : "Istanbul")).then(() => {
            dispatch(getWeather(lat, lon));
        })
    }, [searchQuery])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() && input.match(/^[a-zA-Z]/)) {
            dispatch(setSearchQuery(input));
            dispatch(addLocation(input));
        }
        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <S.SearchBar_Wrapper searchbarVisible={searchbarVisible ? true : false}>
            <S.Cancel>
                <FaTimes onClick={() => dispatch(setVisible(false))} />
            </S.Cancel>
            <S.Form onSubmit={handleSubmit}>
                <S.Input_Wrapper>
                    <MdOutlineSearch />
                    <input
                        type="text"
                        placeholder='search location'
                        required
                        value={input}
                        onChange={handleChange}
                    />
                </S.Input_Wrapper>
                <S.Button>Search</S.Button>
            </S.Form>
            <SelectComponent
                input={input}
                handleChange={handleChange}
            />
            <S.CityBtn
                onClick={() => dispatch(setSearchQuery("London"))}
            >
                London
            </S.CityBtn>
            <S.CityBtn
                onClick={() => dispatch(setSearchQuery("Istanbul"))}
            >
                Istanbul
            </S.CityBtn>
        </S.SearchBar_Wrapper>
    )
}

export default SearchBar
