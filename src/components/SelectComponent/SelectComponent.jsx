import * as S from './styled';
import { useSelector } from 'react-redux';
import { letterCapitalize } from '../../utilities/letterCapitalize';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SelectComponent = ({ input, handleChange }) => {
    const locations = useSelector(state => state.weather.locations);
    console.log("loc", locations);

    const selectLocations = [...new Set(locations)].slice(0, 5).map((loc, index) => (
        <S.Option
            key={index}
            value={loc}
        >
            {letterCapitalize(loc)}
        </S.Option>
    ))

    return (
        <S.Select value={input} onChange={handleChange}>
            <S.Option value="">your searches</S.Option>
            {selectLocations}
        </S.Select>
    )
}

export default SelectComponent