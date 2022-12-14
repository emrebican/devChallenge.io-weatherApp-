import { useSelector } from "react-redux";
import { TopWrapper } from './styled';
import Card from '../Card/Card';
import TempButtons from "../Buttons/TempButtons/TempButtons";

const TopContent = () => {
    const daily_weather = useSelector(state => state.weather.weatherData.daily);

    return (
        <TopWrapper>
            <TempButtons />
            {daily_weather &&
                [...Array(5)].map((w, index) => (
                    <Card
                        key={index}
                        index={index}
                        daily={daily_weather[index + 1]}
                    />
                ))
            }
        </TopWrapper>
    )
}

export default TopContent
