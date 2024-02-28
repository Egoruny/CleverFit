import {  Result,Layout,Typography  } from 'antd'
import { postConfirmEmailStart } from '@redux/auth-slise/auth-slise';
import VerificationInput from "react-verification-input";
import { useState} from 'react';
import { useAppDispatch,useAppSelector } from '../../../redux/configure-store';
import Load from '../../../components/loader/loader'

import style from './confirm-email.module.css'

const { Title } = Typography;


const flexTitle = {
    defult:<Title level={3}><p className={style.text_titel}>Введите код</p> для восстановления аккауанта</Title>,
    error:<Title level={3}><p className={style.error_text_titel}>Неверный код. Введите код для восстановления аккауанта</p></Title>
}



const ConfirmEmail = () => {
const [value, setValue] = useState<string>('');
const error = useAppSelector(state => state.app.error)
const email = useAppSelector(state => state.app.user.login)
const dispatch = useAppDispatch()


const onComplete = (code:any) => {
    dispatch(postConfirmEmailStart({code,email}))
setValue('')
}




return ( 
<div className={style.auth_wrapper}>
<Load/>
        <div className={style.auth_wrapper_blur}>
        <Layout className={style.error_login_wrpper}>
    <Result
    status={error?'error':'info'}
    className={style.result}
title={error?flexTitle.error:flexTitle.defult}
subTitle={<><p><span>Мы отправили вам на e-mail <strong>{`${email}`}</strong></span></p> <span> шестизначный код. Введите его в поле ниже.</span></>}
extra={[
<VerificationInput
inputProps={{ 'data-test-id': 'verification-input' }}
value={value}
placeholder=''
classNames={{
    container:style.container_input,
    character:error?style.chartersError:style.charters,
    characterInactive: style.inactive,
    characterSelected:style.selected,
    characterFilled:style.characterFilled
    }}
    onChange={(value)=>setValue(value)}
onComplete={onComplete}
/>
 
]}
><span className={style.extra_text}>Не пришло письмо? Проверьте папку Спам.</span> </Result>
</Layout> 
        </div>
    </div>
)
}

export default ConfirmEmail