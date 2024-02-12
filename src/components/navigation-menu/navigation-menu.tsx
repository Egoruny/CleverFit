import { Menu } from 'antd';
import style from './style.module.css'
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
// style:{paddingLeft:0,marginLeft:0,textAlign:'left'}
const itemsMenu = [
    {
    className:style.icon,
    key: '1',
    icon: <CalendarTwoTone  twoToneColor="#061178" />,
    label: 'Календарь',
    },
    {

    key: '2',
    icon: <HeartFilled style={iconsColor}/>,
    label: 'Тренировки',
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

const NavigationMenu  = () => (
    <Menu
    className={style.adaptiv_menu}
    defaultSelectedKeys={['1']}
    items={itemsMenu} 
    />
)


export default NavigationMenu