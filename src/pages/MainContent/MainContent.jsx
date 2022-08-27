import * as S from './styled'
import TopContent from '../../components/TopContent/TopContent';
import BottomContent from '../../components/BottomContent/BottomContent';
import Footer from '../../components/Footer/Footer';

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
            <Footer />
        </S.Main >
    )
}

export default MainContent