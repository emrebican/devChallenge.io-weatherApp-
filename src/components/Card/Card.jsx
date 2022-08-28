import * as S from './styled';
import { useDate } from '../../hooks/useDate';
import { useSelector } from 'react-redux';
import { weatherImage } from '../../utilities/weatherImage';
import { kelvinToC, kelvinToF } from '../../utilities/tempConvert';

const Card = ({ daily, index }) => {
    const tempUnit = useSelector(state => state.weather.tempUnits);

    return (
        <S.Card_Wrapper>
            <S.Title type={index === 0 ? true : false}>
                {index === 0
                    && "Tomorrow"
                }
                <span>
                    {useDate(daily?.dt)}
                </span>
            </S.Title>
            <S.ImageWrapper
                src={`/assets/${weatherImage(daily?.weather[0].icon)}`}
                alt={daily?.weather.icon}
            />
            <S.Temps>
                <span>
                    {tempUnit === "°C"
                        ? kelvinToC(daily?.feels_like.day) + tempUnit
                        : kelvinToF(daily?.feels_like.day) + tempUnit
                    }
                </span>
                <span>
                    {tempUnit === "°C"
                        ? kelvinToC(daily?.feels_like.day) + tempUnit
                        : kelvinToF(daily?.feels_like.day) + tempUnit
                    }
                </span>
            </S.Temps>
        </S.Card_Wrapper >
    )
}

export default Card