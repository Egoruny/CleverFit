import { Layout } from 'antd';
import CardsDiscriptions from '@components/cards-discriptions/cards-discriptions';
import Cards from '@components/cards-begin-taining/cards-begin-taining';
import FooterContent from '@components/footer-content/footer-content';
import HeaderContent from '@components/header-content/header-content';
import Header from '@components/header/header';

const { Content } = Layout;

const MainContent = () => {
    return (
        <>
            <Header />
            <Content>
                <CardsDiscriptions />
                <Cards />
            </Content>
            <FooterContent />
        </>
    );
};

export default MainContent;
