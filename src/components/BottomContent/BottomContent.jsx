import * as S from './styled';
import { useSelector } from "react-redux";

import HighLightedCard from "../HighlightedCard/HighLightedCard";

const BottomContent = () => {

    const weather = useSelector(state => state.weather.weatherData);
    const wind_speed = weather.current?.wind_speed;
    const wind_deg = weather.current?.wind_deg;
    const humidity = weather.current?.humidity;
    const visibility = weather.current?.visibility / 1000?.toFixed();
    const pressure = weather.current?.pressure;

    console.log(weather);

    return (
        <S.BottomWrapper>
            <HighLightedCard
                type="wind"
                title="Wind Status"
                unit="mph"
                content={wind_speed}
                wind_deg={wind_deg}
            />
            <HighLightedCard
                type="humidity"
                title="Humidity"
                unit="%"
                content={humidity}
            />
            <HighLightedCard
                title="Visibility"
                unit="miles"
                content={visibility}
            />
            <HighLightedCard
                title="Air Pressure"
                unit="mb"
                content={pressure}
            />
        </S.BottomWrapper>
    )
}

export default BottomContent
