import { Layout , Card , Button , Typography } from 'antd';
import { AndroidFilled , AppleFilled } from '@ant-design/icons';


import style from './footer-content.module.css'



const { Meta } = Card;
const { Footer } = Layout;
const { Link } = Typography;



const FooterContent: React.FC =() => (
    <Footer className={style.footer_container}> 
    <Button type='link' className={style.btn_feedback}>Смотреть отзывы</Button>
    <Card bodyStyle={{padding:0}} className={style.footer_card}>
        <Meta
        className={style.meta}
        title ={<Link style={{ color: '#2F54EB' }}  href="https://ant.design" target="_blank">Скачать на телефон</Link>}
        description="Доступно в PRO-тарифе"
        />
    <div className={style.btn_platform_container}>
        <Button
        className={style.btn_platform}
    type='text'
    icon={< AndroidFilled/>}
    size='middle'
        >Android OS</Button>
        <Button
        className={style.btn_platform}
        type='text'
    icon={< AppleFilled/>}
    size='small'
        >Android OS</Button>
        </div>
    </Card>
    
    </Footer>
)


export default FooterContent