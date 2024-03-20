import { useNavigate } from 'react-router-dom';
import { Button, Grid, Modal, Result, Typography } from 'antd';
import { Path } from '@utils/constans/url';
import style from './error-modals.module.css';

const { useBreakpoint } = Grid;
const { Title } = Typography;

const ErrorModal = () => {
    const navigate = useNavigate();
    const screens = useBreakpoint();

    const handleClose = () => navigate(Path.Main);

    return (
        <Modal
            data-test-id='modal-no-review'
            bodyStyle={{ padding: screens.xs ? '28px 32px' : '0px' }}
            open
            centered
            width={screens.xs ? 340 : 540}
            closable={false}
            footer={null}
            maskStyle={{ background: 'rgba(121, 156, 212, 0.5)', backdropFilter: 'blur(6px)' }}
        >
            <Result
                className={style.error_result_modal}
                status='500'
                title={<Title level={3}>Что-то пошло не так.</Title>}
                subTitle='Произошла ошибка, попробуйте ещё раз.'
                extra={
                    <Button  type='primary' onClick={handleClose} className={style.error_modal_btn}>
                        Назад
                    </Button>
                }
            />
        </Modal>
    );
};

export default ErrorModal;
