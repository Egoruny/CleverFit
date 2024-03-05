import { useAppDispatch, useAppSelector } from '../../../../redux/configure-store';
import { Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, GooglePlusOutlined } from '@ant-design/icons';
import { postRegistratonStart, setLogin, setPassword } from '@redux/auth-slise/auth-slise';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthDataType, ValidateStatus } from '../../../../utils/constans/type';
import { emailSelect, passwordSelect } from '@redux/auth-slise/select';
import { passwordRegExp, emailRegExp } from '@utils/constans/regExp';
import style from './registration.module.css';

const Registration = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const [emailStatus, setEmailStatus] = useState<ValidateStatus>('success');
    const [passStatus, setPassStatus] = useState<ValidateStatus>('success');
    const [ConfirmpassStatus, setConfirmPassStatus] = useState<ValidateStatus>('success');
    const [formStatus, setFormStatus] = useState(false);
    const email = useAppSelector(emailSelect);
    const password = useAppSelector(passwordSelect);
    const from = !!location.state?.pathname;
    const comparePassworValue = form.getFieldValue('password');
    const confirmComparePassworValue = form.getFieldValue('confirmPassword');

    const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        const emailStatus = emailRegExp.test(emailValue) ? '' : 'error';
        setEmailStatus(emailStatus);
    };

    const validatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const passwordValue = event.target.value;
        const passStatus = passwordRegExp.test(passwordValue) ? '' : 'error';
        setPassStatus(passStatus);
    };

    const validatePasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const passwordValueConfirm = event.target.value;
        const comparePassworStatus = comparePassworValue === passwordValueConfirm ? '' : 'error';
        setConfirmPassStatus(comparePassworStatus);
    };

    useEffect(() => {
        if (emailStatus === '' && passStatus === '' && ConfirmpassStatus === '') {
            setFormStatus(true);
        } else {
            setFormStatus(false);
        }
    }, [emailStatus, passStatus, ConfirmpassStatus, form]);

    useEffect(() => {
        if (from) dispatch(postRegistratonStart({ password, email }));
    }, [from, dispatch, email, location, password]);

    const onFinishRegistration = ({ password, email }: AuthDataType) => {
        if (confirmComparePassworValue === comparePassworValue) {
            dispatch(setLogin(form.getFieldValue('email')));
            dispatch(setPassword(form.getFieldValue('password')));
            dispatch(postRegistratonStart({ password, email, location }));
        } else {
            setConfirmPassStatus('error');
        }
    };

    return (
        <Form
            className={style.form_container}
            form={form}
            name='normal_login'
            onFinish={onFinishRegistration}
            initialValues={{ remember: true }}
            size='large'
        >
            <Form.Item
                validateTrigger='onChange'
                validateStatus={emailStatus}
                hasFeedback={false}
                className={style.form_register_input_email}
                name='email'
                rules={[{ required: true, message: '', pattern: emailRegExp }]}
            >
                <Input
                    data-test-id='registration-email'
                    addonBefore='e-mail:'
                    onChange={validateEmail}
                />
            </Form.Item>

            <Form.Item
                validateTrigger='onChange'
                rules={[{ required: true, message: '' }]}
                validateStatus={passStatus}
                hasFeedback={false}
                help={
                    <span className={style.form_register_extra}>
                        Пароль не менее 8 символов, с заглавной буквой и цифрой
                    </span>
                }
                className={style.form_register_input_password}
                name='password'
            >
                <Input.Password
                    data-test-id='registration-password'
                    onChange={validatePassword}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type='password'
                    placeholder='Пароль'
                />
            </Form.Item>

            <Form.Item
                validateTrigger='onChange'
                help={
                    ConfirmpassStatus === 'error' ? (
                        <span className={style.form_register_extra}>Пароли не совпадают</span>
                    ) : (
                        ''
                    )
                }
                validateStatus={ConfirmpassStatus}
                className={style.form_register_input_repeat_password}
                name='confirmPassword'
                rules={[{ required: false, message: '' }]}
            >
                <Input.Password
                    data-test-id='registration-confirm-password'
                    onChange={validatePasswordConfirm}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    type='password'
                    placeholder='Повторите пароль'
                />
            </Form.Item>

            <div className={style.form_register_btn_container}>
                <Form.Item noStyle>
                    <Button
                        data-test-id='registration-submit-button'
                        type='primary'
                        htmlType='submit'
                        block
                        className={style.form_register_login_button}
                    >
                        Войти
                    </Button>
                </Form.Item>
                <Form.Item noStyle>
                    <Button icon={<GooglePlusOutlined />} size='large' htmlType='submit' block>
                        Войти через Google
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};

export default Registration;
