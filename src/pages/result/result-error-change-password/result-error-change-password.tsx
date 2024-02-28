import { Button, Result,Layout,Typography  } from 'antd'
import {useLocation } from 'react-router-dom'
import { replace } from 'redux-first-history';
import { useAppDispatch } from '../../../redux/configure-store';

import style from '../result-error-login-page/reuslt-error-login.module.css'
const { Title } = Typography;


const ResultErrorChangePassword = () => {
const dispatch = useAppDispatch()
const location = useLocation()



const ClickFunctionBtn =() => {
    dispatch(replace('/auth/change-password',location))
}

return <Layout className={style.error_login_wrpper}>
<Result
 className={style.result}
status="error"
title={ <Title level={3}>Данные не сохранились</Title>}
subTitle="Что-то пошло не так. Попробуйте ещё раз"
extra={[
<Button
data-test-id='change-retry-button'
 type="primary" 
block  
size='large' 
className={style.form_register_login_button}
onClick={ClickFunctionBtn}
>
Повторить
</Button>
]}
/>
</Layout>
}


export default ResultErrorChangePassword