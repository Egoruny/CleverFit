import { Button, Result,Layout,Typography  } from 'antd'
import {useNavigate} from 'react-router-dom'




import style from '../result-error-login-page/reuslt-error-login.module.css'

const { Title } = Typography;

const ErrorUserExsist = () => {



const navigate = useNavigate()

const ClickFunctionBtn =() => navigate('/auth/registration')

return ( 
    <Layout className={style.error_login_wrpper}>
        <Result
    className={style.result}
    status="error"
    title={ <Title level={3}>Данные не сохранились</Title>}
    subTitle="Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail."
    extra={[
      <Button
      data-test-id='registration-back-button' 
      type="primary" 
      block  
      size='large' 
      className={style.form_register_login_button}
      onClick={ClickFunctionBtn}
      >
      Назад к регистрации
      </Button>
    ]}
    />
    </Layout>
    )
}

export default ErrorUserExsist