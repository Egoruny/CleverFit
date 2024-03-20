import { PageHeader, Breadcrumb, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import style from './calendar-header.module.css'

const CalendarHeader = () => {
    return (
        <PageHeader
            style={{ padding: '4px 24px 16px 24px', background: '#f0f5ff' }}
        >
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={'/main'}>Главная</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Календарь</Breadcrumb.Item>
            </Breadcrumb>
            <div className={style.set_btn_container}>
                <Button
                    icon={<SettingOutlined />}
                    size='middle'
                    type='text'
                >
                    Настройки
                </Button>
            </div>
        </PageHeader>
    );
};

export default CalendarHeader;
