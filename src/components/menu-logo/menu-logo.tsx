import style from './menu-logo.module.css';
import colapseLogo from '../../assets/img/Logo_colapse.svg';
import defultLogo from '../../assets/img/defultLogo.png';

interface ChildProps {
    collapse?: boolean;
    className?: boolean;
}

const MenuLogo: React.FC<ChildProps> = ({ collapse, className }) => (
    <div className={className ? style.logo_auth : style.Logo}>
        {collapse ? <img src={colapseLogo} /> : <img src={defultLogo} />}
    </div>
);

export default MenuLogo;
