import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import exitIcon from '../../assets/icons/Exit.svg'
import style from './style.module.css'
import { replace } from 'redux-first-history'

const CastomTrigger: React.FC = () => {
const navigate = useNavigate()
const onClick = () => {
    localStorage.removeItem('jwt')
    navigate('/')
}

return (
<>
<div className={style.container}>
<img className={style.swither_icons} src={exitIcon} alt="icon"/>
<Button  onClick={onClick} type='text'>Выход</Button>
</div>
</>
)}

export default CastomTrigger