import { Button, Result,Layout,Typography  } from 'antd'
import {useLocation } from 'react-router-dom'
import { replace } from 'redux-first-history';
import { useAppDispatch } from '../../../redux/configure-store';

import style from '../result-error-login-page/reuslt-error-login.module.css'
const { Title } = Typography;


const ResultSuccsesChangePassword = () => {

const dispatch = useAppDispatch()
const location = useLocation()
const from = location.state?.from?.pathname
console.log(from)


const ClickFunctionBtn =() => {
    dispatch(replace('/auth'))
}

return <Layout className={style.error_login_wrpper}>
<Result
 className={style.result}
status="success"
title={ <Title level={3}>Пароль успешно изменен</Title>}
subTitle="Теперь можно войти в аккаунт, используя свой логин и новый пароль"
extra={[
<Button 
data-test-id='change-entry-button'
type="primary" 
block  
size='large' 
className={style.form_register_login_button}
onClick={ClickFunctionBtn}
>
Вход
</Button>
]}
/>
</Layout>
}


export default ResultSuccsesChangePassword