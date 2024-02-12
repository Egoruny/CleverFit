import style from './style.module.css'
import {
    SettingOutlined 
} from '@ant-design/icons';
import { PageHeader,Button,Typography } from 'antd'
const { Title } = Typography;


const routes = [
    {
      path: 'index',
      breadcrumbName: 'Главная',
      fontFamily:"'Inter','sans-serif'",
    },
  ];




const Wrapper:React.FC = ()=> (
    <>
<PageHeader
    style={{fontFamily:"'Inter','sans-serif'"}}
    className="site-page-header"
    title={ <Title  style={{marginBottom:0}}> Приветствуем тебя в CleverFit — приложении,<br />которое поможет тебе добиться своей мечты!</Title>}
    breadcrumb={{ routes }}
    extra={<Button icon={<SettingOutlined />}  size='middle' type='text'>Настройки</Button>}
  />
 
 
  </>
)
// style={{fontFamily:"'Inter','sans-serif'"}}
export default Wrapper