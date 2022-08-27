import * as S from './styled';
import ProgressBar from '../Progress/ProgressBar';
import { getWindDirection } from '../../utilities/getWindDirection';
import { TiLocationArrow } from 'react-icons/ti';

const HighLightedCard = ({ type, title, unit, content, wind_deg }) => {

    return (
        <S.HighWrapper type={type}>
            <S.Title>{title}</S.Title>
            <S.Content>
                <span>{content?.toFixed()}</span>
                <span>{unit}</span>
            </S.Content>
            {type === "wind"
                ?
                <S.Direction>
                    <TiLocationArrow />
                    {getWindDirection(wind_deg)}
                </S.Direction>
                :
                <S.Direction>
                    <ProgressBar progress={content} />
                </S.Direction>
            }
        </S.HighWrapper>
    )
}

export default HighLightedCard
