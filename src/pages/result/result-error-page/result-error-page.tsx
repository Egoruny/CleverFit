import { Button, Result,Layout,Typography  } from 'antd'
import { useLocation} from 'react-router-dom';

import { push } from 'redux-first-history';
import { useAppDispatch} from '../../../redux/configure-store';


import style from '../result-error-login-page/reuslt-error-login.module.css'

const { Title } = Typography;

const ResultErrorPage = () => {

  const location = useLocation()
const dispatch = useAppDispatch()





const ClickFunctionBtn =() => dispatch(push('/auth/registration',location))
    


return ( 
<Layout className={style.error_login_wrpper}>
    <Result
 className={style.result}
status="error"
title={ <Title level={3}>Данные не сохранились</Title>}
subTitle="Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз."
extra={[
  <Button 
  data-test-id='registration-retry-button'
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

export default ResultErrorPage