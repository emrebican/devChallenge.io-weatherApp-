import * as S from './styled';
import { getWindDirection } from '../../utilities/getWindDirection';

const HighLightedCard = ({ type, title, unit, wind_speed, wind_deg }) => {
    return (
        <S.HighWrapper>
            <h2>{title}</h2>
            <span>{wind_speed?.toFixed()}{unit}</span>
            <p>{getWindDirection(wind_deg)}</p>
        </S.HighWrapper>
    )
}

export default HighLightedCard
