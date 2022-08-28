import * as S from "./styled";
import { useSelector } from "react-redux";
import { MdLocationPin } from 'react-icons/md';

import { weatherImage } from "../../utilities/weatherImage";
import { kelvinToC, kelvinToF } from "../../utilities/tempConvert";
import { useDate } from "../../hooks/useDate";
import { locationFormat } from "../../utilities/locationFormat";
import { letterCapitalize } from "../../utilities/letterCapitalize";

import SearchButton from "../../components/Buttons/SearchButton/SearchButton";
import LocationButton from "../../components/Buttons/LocationButton/LocationButton";

const SideBar = () => {
    const weather = useSelector(state => state.weather.weatherData);
    const type = useSelector(state => state.weather.tempUnits);
    const weather_icon = weather.current?.weather[0].icon;
    const weather_description = weather.current?.weather[0].description;
    const temp = weather.current?.temp;
    const location = weather?.timezone;
    console.log(type);
    return (
        <S.Sidebar>
            <S.Buttons>
                <SearchButton />
                <LocationButton />
            </S.Buttons>
            <S.ImageWrapper>
                <img
                    src={`/assets/${weatherImage(weather_icon)}`}
                    alt={weather_description}
                />
            </S.ImageWrapper>
            <S.BottomWrapper>
                <h2>
                    {type === "°C"
                        ? kelvinToC(temp)
                        : kelvinToF(temp)
                    }
                    <span>{type}</span>
                </h2>
                <p>
                    {letterCapitalize(weather_description)}
                </p>
                <span>
                    Today &#8226; {useDate()}
                </span>
                <article><MdLocationPin />{locationFormat(location)}</article>
            </S.BottomWrapper>
        </S.Sidebar>
    )
}

export default SideBar