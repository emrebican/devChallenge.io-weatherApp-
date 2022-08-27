import HighLightedCard from "../HighlightedCard/HighLightedCard";
import { useSelector } from "react-redux";

const BottomContent = () => {

    const weather = useSelector(state => state.weather.weatherData);
    const wind_speed = weather.current?.wind_speed;
    const wind_deg = weather.current?.wind_deg;

    console.log(weather);

    return (
        <div>
            <HighLightedCard
                type="wind"
                title="Wind status"
                unit="mph"
                wind_speed={wind_speed}
                wind_deg={wind_deg}
            />
        </div>
    )
}

export default BottomContent
