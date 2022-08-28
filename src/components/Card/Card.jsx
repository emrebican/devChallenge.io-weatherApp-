import * as S from './styled';
import { useDate } from '../../hooks/useDate';
import { weatherImage } from '../../utilities/weatherImage';
import { kelvinToC } from '../../utilities/tempConvert';

const Card = ({ daily }) => {
    console.log(daily);
    return (
        <S.Card_Wrapper>
            <S.Title>
                {useDate(daily?.dt)}
            </S.Title>
            <S.ImageWrapper
                src={`/assets/${weatherImage(daily?.weather.icon)}`}
                alt={daily?.weather.icon}
            />
            <S.Temps>
                <span>
                    {kelvinToC(daily?.feels_like.day)} °C
                </span>
                <span>
                    {kelvinToC(daily?.feels_like.night)} °C
                </span>
            </S.Temps>
        </S.Card_Wrapper >
    )
}

export default Card