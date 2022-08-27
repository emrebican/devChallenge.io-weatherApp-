import * as S from './styled';

const ProgressBar = ({ progress }) => {
    return (
        <S.Wrapper>
            <S.Progress>
                <S.Line>0</S.Line>
                <S.Line>50</S.Line>
                <S.Line>100</S.Line>
            </S.Progress>
            <S.ProgressBar progress={`${progress}%`} />
        </S.Wrapper>
    )
}

export default ProgressBar
