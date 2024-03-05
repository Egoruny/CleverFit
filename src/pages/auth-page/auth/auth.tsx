import { Tabs } from 'antd';
import style from './auth.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../utils/constans/url';
import MenuLogo from '@components/menu-logo/menu-logo';
import SingIn from '../sing-in/sing-in';
import Registration from './registration/registration';


type AuthTab = (typeof AuthTab)[keyof typeof AuthTab];

const AuthTab = {
    Login: 'login',
    Register: 'register',
};

const Auth = ({ tab = 'login' }: { tab?: AuthTab }) => {
    const navigate = useNavigate();


    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        if (jwt) {
            return navigate(Path.Main);
        }
    }, [jwt, navigate]);


    const onChange = (activeKey: string) => {
        if (activeKey === AuthTab.Login) {
            navigate(Path.Login);
        } else if (activeKey === AuthTab.Register) {
            navigate(Path.Register);
        }
    };

    return (
        <>
            <div className={style.modal_wrapper}>
                <div className={style.modal_wrapper_blur}>
                    <div className={style.modal_wrapper_blur_container}>
                        <MenuLogo className />
                        <div className={style.modal_wrapper_blur_container_content}>
                            <Tabs
                                activeKey={tab}
                                onChange={onChange}
                                tabBarStyle={{ position: 'relative', padding: 0 }}
                                hideAdd
                                size='large'
                                centered={true}
                                items={[
                                    {
                                        label: `Вход`,
                                        key: AuthTab.Login,
                                        children: <SingIn />,
                                    },
                                    {
                                        label: `Регистрация`,
                                        key: AuthTab.Register,
                                        children: <Registration />,
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Auth;
