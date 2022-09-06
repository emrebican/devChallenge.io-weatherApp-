import * as S from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { letterCapitalize } from '../../utilities/letterCapitalize';
import { setSearchQuery } from '../../features/weatherSlice';

const SelectComponent = ({ input }) => {
    const dispatch = useDispatch();
    const locations = useSelector(state => state.weather.locations);

    const handleSelect = (e) => {
        dispatch(setSearchQuery(e.target.value));
    }

    const selectLocations = [...new Set(locations)].slice(0, 5).map((loc, index) => (
        <S.Option
            key={index}
            value={loc}
        >
            {letterCapitalize(loc)}
        </S.Option>
    ))

    return (
        <S.Select value={input} onChange={handleSelect}>
            <S.Option value="">your searches</S.Option>
            {selectLocations}
        </S.Select>
    )
}

export default SelectComponent