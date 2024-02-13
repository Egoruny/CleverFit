import style from './style.module.css'
import colapseLogo from '../../assets/img/Logo_colapse.svg'
import defultLogo from '../../assets/img/defultLogo.png'

interface ChildProps {
  collapse: boolean;
}


const  MenuLogo: React.FC<ChildProps>  = ({collapse}) => (
    <div className={style.Logo} >
    {collapse?<img src={colapseLogo}/>:<img src={defultLogo}/>}
  </div>
)





export default MenuLogo