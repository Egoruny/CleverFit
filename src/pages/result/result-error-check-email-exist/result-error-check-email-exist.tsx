import { Button, Result, Layout, Typography } from 'antd';
import { push } from 'redux-first-history';
import { useAppDispatch } from '../../../redux/configure-store';

import style from './result-error-check-email-exist.module.css';

const { Title } = Typography;
const ResultErrorCheckEmailExist = () => {
    const dispatch = useAppDispatch();

    const ClickFunctionBtn = () => dispatch(push('/auth'));

    return (
        <Layout className={style.error_login_wrpper}>
            <Result
                className={style.check_email_exist}
                status='error'
                title={<Title level={3}>Такой e-mail не зарегистрирован</Title>}
                subTitle='Мы не нашли в базе вашего e-mail.Попробуйте войти с другим e-mail.'
                extra={[
                    <Button
                        data-test-id='check-retry-button'
                        type='primary'
                        size='large'
                        className={style.form_register_login_button}
                        onClick={ClickFunctionBtn}
                    >
                        Попробовать снова
                    </Button>,
                ]}
            />
        </Layout>
    );
};

export default ResultErrorCheckEmailExist;
