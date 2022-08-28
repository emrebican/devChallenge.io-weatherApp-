import * as S from './styled';
import { useNavigate } from 'react-router-dom';

const SearchButton = () => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/search')
    }

    return (
        <S.Wrapper onClick={handleNavigate}>
            Search for Places
        </S.Wrapper>
    )
}

export default SearchButton