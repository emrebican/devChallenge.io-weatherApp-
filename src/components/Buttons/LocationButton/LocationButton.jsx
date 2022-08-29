import { BiCurrentLocation } from 'react-icons/bi';
import * as S from './styled';

const LocationButton = () => {

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("lati: ", position.coords.latitude);
            console.log("long: ", position.coords.longitude);
        })
    }

    return (
        <S.Wrapper>
            <BiCurrentLocation onClick={() => getPosition()} />
        </S.Wrapper>
    )
}

export default LocationButton