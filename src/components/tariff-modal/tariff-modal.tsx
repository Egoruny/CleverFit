import { useState } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { removeJwt } from '@redux/slise/auth-slise';
import { postTarifSuccess } from '@redux/slise/tariff-slice';
import { Path } from '@utils/constans/url';
import { replace } from 'redux-first-history';
import { Modal, Typography, Result } from 'antd';

import style from './tariff-modal.module.css';

const { Title, Paragraph } = Typography;

const TariffModal = () => {
    const email = useAppSelector(state => state?.profile?.profile?.email)
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(true);

    const onClick = () => {
        setOpen(false);
        localStorage.removeItem('jwt');
        dispatch(removeJwt());
        dispatch(replace(Path.Login));
        dispatch(postTarifSuccess())
    };

    return (
        <Modal
            data-test-id='tariff-modal-success'
            open={open}
            closable={true}
            footer={false}
            onCancel={onClick}
            centered={true}
            maskStyle={{ background: 'rgba(121, 156, 212, 0.5)', backdropFilter: 'blur(6px)' }}
        >
            <Result
                style={{ padding: 0 }}
                icon={<CheckCircleFilled style={{ color: '#2F54EB' }} />}
                title={<Title level={3}>Чек для оплаты у вас на почте</Title>}
                subTitle={
                    <Paragraph type='secondary'>
                        Мы отправили инструкцию для оплаты вам на e-mail {email}.
                        После подтверждения оплаты войдите в приложение заново.
                    </Paragraph>
                }
            >
                <Paragraph type='secondary'>Не пришло письмо? Проверьте папку Спам.</Paragraph>
            </Result>
        </Modal>
    );
};

export default TariffModal;
