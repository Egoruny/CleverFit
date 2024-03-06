import { Button, Modal, Result, Typography } from 'antd';
import style from './result-modal.module.css';
import { useAppDispatch } from '@redux/configure-store';
import { postFeedbacksSaccses, postFeedbacksError } from '@redux/auth-slise/post-feedbakc-slise';
const { Title } = Typography;

const ResultModal = ({ open, setOpen, status, setOpenFormModal }) => {
    const dispatch = useAppDispatch();
    const canselModal = () => {
        setOpen(false);
        dispatch(postFeedbacksSaccses());
    };

    const handleAddFeedback = () => {
        setOpen(false);
        setOpenFormModal(true);
        dispatch(postFeedbacksError(false));
    };

    const handleCancel = () => {
        setOpen(false);
        dispatch(postFeedbacksError(false));
    };

    return (
        <Modal
            onCancel={handleAddFeedback}
            className={style.modal_result}
            bodyStyle={{ display: 'flex', justifyContent: 'center' }}
            open={open}
            closable={false}
            centered
            maskStyle={{ background: 'rgba(121, 156, 212, 0.5)', backdropFilter: 'blur(6px)' }}
            footer={null}
        >
            {status === 'success' ? (
                <Result
                    className={style.modal_result}
                    status='success'
                    title={<Title level={3}>Отзыв успешно опубликован</Title>}
                    extra={
                        <Button
                            type='primary'
                            onClick={canselModal}
                            block
                            size='large'
                            className={style.resulr_modal_btn}
                        >
                            Отлично
                        </Button>
                    }
                />
            ) : (
                <Result
                    status='error'
                    title={<Title level={3}>Данные не сохранились</Title>}
                    subTitle='Что-то пошло не так. Попробуйте ещё раз.'
                    className={style.modal_result}
                    extra={[
                        <div className={style.result_error_btn}>
                            <Button
                                className={style.resulr_modal_btn}
                                style={{ width: '50%' }}
                                size='large'
                                type='primary'
                                onClick={handleAddFeedback}
                                data-test-id='write-review-not-saved-modal'
                            >
                                Написать отзыв
                            </Button>
                            <Button style={{ width: '50%' }} size='large' onClick={handleCancel}>
                                Закрыть
                            </Button>
                        </div>
                    ]}
                />
            )}
        </Modal>
    );
};

export default ResultModal;
