import * as S from './styled';
import { useDate } from '../../hooks/useDate';

const Card = ({ daily }) => {
    console.log(daily);
    return (
        <S.Card_Wrapper>
            {/* {useFormatDate(daily?.dt)} */}
            {useDate(daily?.dt)}
        </S.Card_Wrapper>
    )
}

export default Card