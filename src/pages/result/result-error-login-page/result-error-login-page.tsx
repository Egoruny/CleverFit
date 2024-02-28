import { Button, Result,Layout,Typography  } from 'antd'
import { replace } from 'redux-first-history';
import { useAppDispatch} from '../../../redux/configure-store';


import style from './reuslt-error-login.module.css'

const { Title } = Typography;

const ResultErrorLoginPage = () => {

const dispatch = useAppDispatch()


const ClickFunctionBtn =() => dispatch(replace('/auth'))
 


return ( 
<Layout className={style.error_login_wrpper}>
    <Result
    className={style.result}
status="warning"
title={ <Title level={3}>Вход не выполнен</Title>}
subTitle="Что-то пошло не так. Попробуйте еще раз"
extra={[
  <Button 
  data-test-id='login-retry-button'
  type="primary" 
   block 
   size='large' 
   className={style.form_register_login_button}
   onClick={ClickFunctionBtn}
   >
   Повторить
  </Button>,
]}
/>
</Layout>
)
}

export default ResultErrorLoginPage