import { Layout, PageHeader, Button, Breadcrumb, Tabs ,Badge} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTariffsStart } from '@redux/slise/tariff-slice';

import { traningCatalogsSelect } from '@redux/slise/select';
import { userTraningListSelect, selectedDateSelect,showMypartnerSelect,joinTeningRequestsSelect } from '@redux/slise/select';
import { useAppSelector, useAppDispatch } from '@redux/configure-store';
import { traningCatalogsErrorSelect } from '@redux/slise/select';
import CalendarModal from '@pages/calendar-page/calendar-modal/calendar-error-modal/calendar-error-modal';
import MyTreningContetnt from '@components/my-trening-content/my-trening-content';
import JoinTrening from '@components/join-trening/join-trening';
import MyPartners from '@components/my-partners/my-partners';




import style from './my-trenings-page.module.css';

const { Content } = Layout;

const MyTrningsPage = () => {
    const trenings = useAppSelector(userTraningListSelect);
    const dispath = useAppDispatch();
    const catalog = useAppSelector(traningCatalogsSelect);
    const catalogError = useAppSelector(traningCatalogsErrorSelect);
    const isShowMyPartner = useAppSelector(showMypartnerSelect)
    const myInvites = useAppSelector(joinTeningRequestsSelect)

    const onClick = () => dispath(getTariffsStart())

    const tabsItems: TabsProps['items'] = [
        {
            label: 'Мои тренировки',
            key: 'my-workouts',
            children: <MyTreningContetnt catalog={catalog} treningList={trenings} />,
        },
        {
            label: <span>Совместные тренировки <Badge count={myInvites.length<4 ? myInvites?.length : 0}/></span>,
            key: 'group-workouts',
            children: isShowMyPartner?<MyPartners activeModal={true}/>:<JoinTrening/>,
        },
        {
            label: 'Марафоны',
            key: 'marathons',
            children: 'Marathons',
        },
    ];


    return (
        <>
        <PageHeader   style={{ padding: '4px 24px 16px 24px', background: '#f0f5ff' }}>
        <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={'/main'}>Главная</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Тренировки</Breadcrumb.Item>
            </Breadcrumb>
            <div className={style.set_btn_container}>
                <Button
                    className={style.set_button}
                    icon={<SettingOutlined />}
                    size='middle'
                    type='text'
                    onClick={onClick}
                >
                    <span className={style.button_text}>Настройки</span>
                </Button>
            </div>
        </PageHeader>
        <Content className={style.wrapper}>
            
            {catalogError && <CalendarModal />}
            <Tabs items={tabsItems}  className={style.tabs_header}/>
        </Content>
        </>
    );
};

export default MyTrningsPage;
