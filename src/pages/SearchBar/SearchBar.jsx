import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineSearch } from 'react-icons/md';

const SearchBar = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <S.SearchBar_Wrapper>
            <S.Cancel>
                <FaTimes onClick={() => navigate('/')} />
            </S.Cancel>
            <S.Form onSubmit={handleSubmit}>
                <S.Input_Wrapper>
                    <MdOutlineSearch />
                    <input
                        type="text"
                        placeholder='search location'
                    />
                </S.Input_Wrapper>
                <S.Button>Search</S.Button>
            </S.Form>
            <S.Select>
                
            </S.Select>
        </S.SearchBar_Wrapper>
    )
}

export default SearchBar
