import * as S from './styled';
import { useDispatch } from 'react-redux/es/exports';
import { setVisible } from '../../../features/weatherSlice';

const SearchButton = () => {
    const dispatch = useDispatch();

    return (
        <S.Wrapper onClick={() => dispatch(setVisible(true))}>
            Search for Places
        </S.Wrapper>
    )
}

export default SearchButton