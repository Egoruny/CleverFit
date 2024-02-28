import { Button, Result,Layout,Typography  } from 'antd'
import {useLocation } from 'react-router-dom'
import { replace } from 'redux-first-history';
import { useAppDispatch } from '../../../redux/configure-store';

import style from '../result-error-login-page/reuslt-error-login.module.css'

const { Title } = Typography;


const ResultSucssePage = () => {



const dispatch = useAppDispatch()

const ClickFunctionBtn =() => {
    dispatch(replace('/auth'))
}

return <Layout className={style.error_login_wrpper}>
<Result
 className={style.result}
status="success"
title={ <Title level={3}>Регистрация успешна</Title>}
subTitle="Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль."
extra={[
<Button 
data-test-id='registration-enter-button'
type="primary" 
block  
size='large' 
className={style.form_register_login_button}
onClick={ClickFunctionBtn}
>
Войти
</Button>,
]}
/>
</Layout>
}


export default ResultSucssePage