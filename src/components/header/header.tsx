import { PageHeader, Button, Typography } from 'antd';
import { getTariffsStart } from '@redux/slise/tariff-slice';
import { UseMobileVersion } from '@hooks/use-mobile-version';
import { useAppDispatch } from '@redux/configure-store';
import { SettingOutlined } from '@ant-design/icons';
import { routes } from '../../variables';

import style from './header.module.css';

const { Title } = Typography;

const Header = () => {
    const dispatch = useAppDispatch();
    const isMobileVersion = UseMobileVersion();
    const onClickSettings = () => dispatch(getTariffsStart());

    return (
        <>
            <PageHeader style={{ background: '#f0f5ff' }} breadcrumb={{ routes }}>
                <div className={style.page_header}>
                    <Title
                        style={{
                            marginBottom: 0,
                            maxWidth: '1050px',
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <span>Приветствуем тебя в CleverFit</span>—<span>приложении,</span>которое
                        поможет тебе добиться своей мечты!
                    </Title>
                    <Button
                        onClick={onClickSettings}
                        data-test-id='header-settings'
                        icon={<SettingOutlined />}
                        className={style.set_button}
                        shape={isMobileVersion ? 'circle' : 'default'}
                        size='middle'
                        type='text'
                    >
                        <span className={style.button_text}>Настройки</span>
                    </Button>
                </div>
            </PageHeader>
        </>
    );
};

export default Header;
