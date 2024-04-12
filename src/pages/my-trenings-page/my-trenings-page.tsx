import { Layout, PageHeader, Button, Typography, Tabs } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { traningCatalogsSelect } from '@redux/slise/select';
import { userTraningListSelect, selectedDateSelect,showMypartnerSelect } from '@redux/slise/select';
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

    const tabsItems: TabsProps['items'] = [
        {
            label: 'Мои тренировки',
            key: 'my-workouts',
            children: <MyTreningContetnt catalog={catalog} treningList={trenings} />,
        },
        {
            label: 'Совместные тренировки',
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
        <Content className={style.wrapper}>
            {catalogError && <CalendarModal />}
            <div><Link to={'/main'}>Главная</Link></div>
            <Tabs items={tabsItems}  className={style.tabs_header}/>
        </Content>
    );
};

export default MyTrningsPage;
