import * as S from './styled';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../../features/weatherSlice';
import { BiCurrentLocation } from 'react-icons/bi';

const LocationButton = () => {
    const dispatch = useDispatch();
    
    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            dispatch(getWeather({lat, lon}))
        })
    }

    return (
        <S.Wrapper>
            <BiCurrentLocation onClick={() => getPosition()} />
        </S.Wrapper>
    )
}

export default LocationButton