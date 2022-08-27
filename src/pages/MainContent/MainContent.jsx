import * as S from './styled'
import TopContent from '../../components/TopContent/TopContent';
import BottomContent from '../../components/BottomContent/BottomContent';

const MainContent = () => {
    return (
        <S.Main>
            <S.Top>
                <TopContent />
            </S.Top>
            <S.Bottom>
                <h2>Today's Highlights</h2>
                <BottomContent />
            </S.Bottom>
        </S.Main>
    )
}

export default MainContent