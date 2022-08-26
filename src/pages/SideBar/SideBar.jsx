import * as S from "./styled";
import { useSelector } from "react-redux";

import weatherImage from "../../utilities/weatherImage";
import { kelvinToC, kelvinToF } from "../../utilities/tempConvert";
import { todayDate } from "../../utilities/todayDate";
import { locationFormat } from "../../utilities/locationFormat";

import SearchButton from "../../components/SearchButton/SearchButton";
import LocationButton from "../../components/LocationButton/LocationButton";

const SideBar = () => {
    const weather = useSelector(state => state.weather.weatherData);
    const weather_icon = weather.current?.weather[0].icon;
    const weather_description = weather.current?.weather[0].description;
    const temp = weather.current?.temp;
    const location = weather?.timezone;

    return (
        <S.Sidebar>
            <S.Buttons>
                <SearchButton />
                <LocationButton />
            </S.Buttons>
            <S.Wrapper>
                <img src={`/assets/${weatherImage(weather_icon)}`} alt="" />
                <h2>
                    {kelvinToC(temp)}
                </h2>
                <p>{weather_description}</p>
                <p>{todayDate()}</p>
                <p>{locationFormat(location)}</p>
            </S.Wrapper>
        </S.Sidebar>
    )
}

export default SideBar