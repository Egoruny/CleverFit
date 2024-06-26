import { Button, Grid, Modal, Result, Typography } from 'antd';
import { useAppSelector, useAppDispatch } from '@redux/configure-store';
import { setModalError } from '@redux/slise/trening-modals-slice';
import { errorModalSelect } from '@redux/slise/select';
import style from './error-modals.module.css';

const { useBreakpoint } = Grid;
const { Title } = Typography;

const ErrorModal = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(errorModalSelect);

    const screens = useBreakpoint();

    const handleClose = () => dispatch(setModalError(false));

    return (
        <Modal
            data-test-id='modal-no-review'
            bodyStyle={{ padding: screens.xs ? '28px 32px' : '0px' }}
            open={error}
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
                    <Button type='primary' onClick={handleClose} className={style.error_modal_btn}>
                        Назад
                    </Button>
                }
            />
        </Modal>
    );
};

export default ErrorModal;
