import * as S from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { tempUnitChange } from '../../../features/weatherSlice';

const TempButtons = () => {
    const dispatch = useDispatch();
    const type = useSelector(state => state.weather.tempUnits);

    return (
        <S.Buttons_Wrapper>
            <S.Button
                active={type === "°C" ? true : false}
                onClick={() => dispatch(tempUnitChange("°C"))}
            >
                °C
            </S.Button>
            <S.Button
                active={type === "°F" ? true : false}
                onClick={() => dispatch(tempUnitChange("°F"))}
            >
                °F
            </S.Button>
        </S.Buttons_Wrapper>
    )
}

export default TempButtons
