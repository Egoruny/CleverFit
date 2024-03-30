import { Menu } from 'antd';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { Path } from '../../utils/constans/url';
import { useAppDispatch } from '@redux/configure-store';
import { HeartFilled, TrophyFilled, CalendarTwoTone, IdcardOutlined } from '@ant-design/icons';

import { getTraningListStart } from '@redux/slise/traningList-slise';

const iconsColor: React.CSSProperties = {
    color: '#061178',
    paddingLeft: '0px',
};

const itemsMenu = [
    {
        key: '1',
        icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} />,
        label: ' Календарь',
    },
    {
        key: '2',
        icon:<HeartFilled style={iconsColor} />,
        label: 'Тренировки',
    },
    {
        key: '3',
        icon: <TrophyFilled style={iconsColor} />,
        label: 'Достижения',
    },
    {
        key: '4',
        icon:  <Link to={Path.Profile}><IdcardOutlined style={iconsColor} /></Link>,
        label: 'Профиль',
    },
];

const NavigationMenu: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = (e) => {
        if (e.key === '1') dispatch(getTraningListStart());
    };

    return (
        <Menu
            className={style.adaptiv_menu}
            onClick={handleClick}
            defaultSelectedKeys={['1']}
            items={itemsMenu}
        />
    );
};

export default NavigationMenu;
