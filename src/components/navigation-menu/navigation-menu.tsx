import { Menu,Typography } from 'antd';
import style from './style.module.css'
const {  Link } = Typography;
import {
    HeartFilled,
    TrophyFilled,
    CalendarTwoTone,
    IdcardOutlined,
} from '@ant-design/icons';

const iconsColor:React.CSSProperties = {
    color: '#061178',
    paddingLeft: '0px'
}

const itemsMenu = [
    {
    key: '1',
    icon: <Link><CalendarTwoTone twoToneColor={['#061178','#061178']} /></Link>,
    label: 'Календарь',
    },
    {

    key: '2',
    icon: <HeartFilled style={iconsColor}/>,
    label: <Link>Тренировки</Link>,
    },
    {
    key: '3',
    icon: <TrophyFilled  style={iconsColor}/>,
    label: 'Достижения',
    },
    {
    key: '4',
    icon: <IdcardOutlined  style={iconsColor}/>,
    label: 'Профиль',
    },
]

const NavigationMenu: React.FC  = () => (
    <Menu
    className={style.adaptiv_menu}
    defaultSelectedKeys={['1']}
    items={itemsMenu} 
    />
)


export default NavigationMenu