import * as S from './styled';
import { useDispatch } from 'react-redux/es/exports';
import { setSlider } from '../../../features/weatherSlice';

const SearchButton = () => {
    const dispatch = useDispatch();

    return (
        <S.Wrapper onClick={() => dispatch(setSlider(true))}>
            Search for Places
        </S.Wrapper>
    )
}

export default SearchButton