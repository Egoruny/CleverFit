import { Button, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import style from './header-content.module.css';

const { Title } = Typography;

const HeaderContent: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Title
                style={{
                    marginBottom: 0,
                    maxWidth: '1050px',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <span>Приветствуем тебя в CleverFit</span>—<span>приложении,</span>которое поможет
                тебе добиться своей мечты!
            </Title>
            <Button
                icon={<SettingOutlined />}
                className={style.set_button}
                size='middle'
                type='text'
            >
                <span className={style.button_text}>Настройки</span>
            </Button>
        </div>
    );
};


export default HeaderContent