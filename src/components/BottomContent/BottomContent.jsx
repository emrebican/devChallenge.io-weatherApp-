import * as S from './styled';
import { useSelector } from "react-redux";

import HighLightedCard from "../HighlightedCard/HighLightedCard";

const BottomContent = () => {

    const weather = useSelector(state => state.weather.weatherData);
    const wind_speed = weather.current?.wind_speed;
    const wind_deg = weather.current?.wind_deg;
    const humidity = weather.current?.humidity;

    console.log(weather);

    return (
        <S.BottomWrapper>
            <HighLightedCard
                type="wind"
                title="Wind status"
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
        </S.BottomWrapper>
    )
}

export default BottomContent
