import { Button, Result,Layout,Typography  } from 'antd'
import { useLocation} from 'react-router-dom';
import { push } from 'redux-first-history';
import { useAppDispatch } from '../../../redux/configure-store';


import style from '../result-error-check-email-exist/result-error-check-email-exist.module.css'

const { Title } = Typography;

const ResultErrorCheckEmail = () => {
const dispatch = useAppDispatch()
const location = useLocation()



const ClickFunctionBtn =() => {
    dispatch(push('/auth',location))
}

return ( 
<Layout className={style.error_login_wrpper}>
<Result
className={style.check_email_exist}
status= '500'
title={ <Title level={3}>Что то пошло не так</Title>}
subTitle="Произошла ошибка, попробуйте отправить форму ещё раз."
extra={[
  <Button 
  data-test-id='check-back-button'
  type="primary" 
  size='large'   
   className={style.form_register_login_button}
   onClick={ClickFunctionBtn}
   >
  Назад
  </Button>
]}
/>
</Layout>
)
}

export default ResultErrorCheckEmail