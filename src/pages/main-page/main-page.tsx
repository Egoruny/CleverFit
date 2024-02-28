import { Layout } from 'antd';
import Loader from '@components/loader/loader';
import 'antd/dist/antd.css';

import style from './main-page.module.css';




import Sidebar from '@components/sidebar/sidebar';
import Header from '@components/header/header';
import CardsDiscriptions from '@components/cards-discriptions/cards-discriptions';
import Cards from '@components/cards-begin-taining/cards-begin-taining';
import FooterContent from '@components/footer-content/footer-content';


const { Content } = Layout;



 const MainPage: React.FC = () => {

    return (
<>
<Layout className={style.container}>
    <Loader/>
        <Sidebar/>
        <Layout className={style.wrapper}>
            <Header/>
<Content>
<CardsDiscriptions/>
<Cards/>
</Content>
        <FooterContent/>
        </Layout>
    </Layout>
</>
    );
};
export default MainPage