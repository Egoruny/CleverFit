import { Button } from 'antd'
import exitIcon from '../../assets/icons/Exit.svg'
import style from './style.module.css'

const CastomTrigger = () => (
    <>
    <div className={style.container}>
    <img className={style.swither_icons} src={exitIcon} alt="icon"/>
<Button type='text'>Выход</Button>
</div>
    </>
)

export default CastomTrigger