import React, { useState } from 'react';
import { Layout , Card, Col, Row} from 'antd';
import 'antd/dist/antd.css';
import style from './main-page.module.css';
import { SettingOutlined } from '@ant-design/icons';
import { PageHeader, Button, Typography } from 'antd';
const { Title } = Typography;

import CastomTrigger from '@components/custom-trigger/custom-trigger';
import Switcher from '@components/switcher/switcher';
import NavigationMenu from '@components/navigation-menu/navigation-menu';
import MenuLogo from '@components/menu-logo/menu-logo';


import {
    HeartFilled,
    AndroidFilled ,
    AppleFilled,
    CalendarTwoTone,
    IdcardOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const {  Link } = Typography;

const routes = [
    {
        path: 'index',
        breadcrumbName: 'Главная',
        fontFamily: "'Inter','sans-serif'",
    },
];



const { Sider, Content, Footer } = Layout;



export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screenWidth = window.innerWidth;
    return (
        <>
        
            <Layout className={style.container}>
                <Sider
                width={screenWidth=== 360?106:208}
                    trigger={<CastomTrigger />}
                    collapsible
                    collapsed={collapsed}
                    theme={'light'}
                    className={collapsed ? style.close_bar : style.open_navbar}
                >
                    <Switcher collapse={collapsed} setCollapsed={setCollapsed} />
                    <MenuLogo collapse={collapsed} />
                    <NavigationMenu />
                </Sider>

                <Layout style={{ width: '100%', background: 'none' }}>
                    <PageHeader
                        style={{ fontFamily: "'Inter','sans-serif'", background: '#f0f5ff' }}
                        className='site-page-header'
                        breadcrumb={{ routes }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Title
                                style={{
                                    marginBottom: 0,
                                    maxWidth: '1050px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <span>Приветствуем тебя в CleverFit</span>—<span>приложении,</span>которое поможет тебе добиться своей мечты!
                            </Title>
                            <Button
                                icon={<SettingOutlined className={style.button_icon}/>}
                                className={style.set_button}
                                size='middle'
                                type='text'
                            >
                                <span className={style.button_text}>Настройки</span>
                            </Button>
                        </div>
                    </PageHeader>

                    <Content>



    <Card
    className={style.card_opportunities}
    >
        <p>С CleverFit ты сможешь:</p> 
        <p>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</p>
        <p>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;</p>
        <p>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</p>
        <p>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</p>
    </Card>
        <Card
        className={style.card_app_description}
        >
        <Title level={4}>CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</Title> 
        </Card>

<div className={style.card_wrapper}>
<Row gutter={[8,8]} className={style.row_container} >

    <Col span={8} xs={24} sm={14} md={8}>
    <Card title="Расписать тренировки" bordered={false} className={style.car_begin} bodyStyle={{padding:'12px 24px 12px 24px',display:'flex',justifyContent:'center'}}>
    <Button
    className={style.card_button}
icon={< HeartFilled className={style.button_icon}/>}
size='middle'
>
    <span className={style.button_text}>Тренировки</span>
</Button>
    </Card>
    </Col>


    <Col span={8} xs={24}  md={8}>
    <Card title="Назначить календарь" bordered={false} className={style.car_begin} bodyStyle={{padding:'12px 24px 12px 24px',display:'flex',justifyContent:'center'}}>
    <Button
    className={style.card_button}
icon={< CalendarTwoTone twoToneColor="#061178"/>}
size='middle'
>
    <span className={style.button_text}>Календарь</span>
</Button>
    </Card>
    </Col>

    <Col span={8} xs={24} md={8}>
    <Card title="Заполнить профиль  " bordered={false} className={style.car_begin} bodyStyle={{padding:'12px 24px 12px 24px',display:'flex',justifyContent:'center'}}>
    <Button
    className={style.card_button}
icon={< IdcardOutlined className={style.button_icon}/>}
size='middle'
>
    <span className={style.button_text}>Профиль</span>
</Button>
    </Card>
    </Col>
    </Row>

</div>
    </Content>
        <Footer className={style.footer_container}> 
                    <Button type='link' className={style.btn_feedback}>Смотреть отзывы</Button>
                    <Card bodyStyle={{padding:0}} className={style.footer_card}>
                        <Meta
                        className={style.meta}
                        title ={ <Link href="https://ant.design" target="_blank">Скачать на телефон</Link>}
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
                </Layout>
            </Layout>
        </>
    );
};
