import { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Typography } from 'antd';

import { useAppDispatch, useAppSelector } from '@redux/configure-store';
import { postfeedbacksError, postFeedbakcSuccess } from '../../../../redux/slise/select';
import CastomRate from '@components/custom-rate/castom-rate';
import style from './post-feedbakc-modal.module.css';
import ResultModal from '../result-modals/result-modal';

const { TextArea } = Input;
const { Title } = Typography;
const PostFeedbakcModal = ({ openModal, setOpenModal,hadleSubmit }) => {
    const error = useAppSelector(postfeedbacksError);
    const success = useAppSelector(postFeedbakcSuccess);
    const dispatch = useAppDispatch();
    const [openResultModal, setOpenResultModal] = useState(false);
    const [result, setResult] = useState('');
    const [form] = Form.useForm();

    const canselModal = () => setOpenModal(false);



    useEffect(() => {
        if (success) {
            setResult('success');
            setOpenResultModal(true);
            setOpenModal(false);
        } else if (error) {
            setResult('error');
            setOpenResultModal(true);
            setOpenModal(false);
        }
    }, [success, setOpenModal, error]);

    return (
        <>
            <Modal
                bodyStyle={{ padding: '24px 24px 5px 24px' }}
                title={<Title level={4}>Ваш отзыв</Title>}
                open={openModal}
                maskStyle={{ background: 'rgba(121, 156, 212, 0.1)', backdropFilter: 'blur(6px)' }}
                onCancel={canselModal}
                centered
                footer={null}
            >
                <Form form={form} onFinish={hadleSubmit}>
                    <Form.Item required name='rating'>
                        <CastomRate />
                    </Form.Item>
                    <Form.Item name='message'>
                        <TextArea placeholder='Autosize height based on content lines' />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            size='middle'
                            className={style.btn_submit}
                            type='primary'
                            htmlType='submit'
                            data-test-id='new-review-submit-button'
                        >
                            Опубликовать
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <ResultModal
                open={openResultModal}
                setOpen={setOpenResultModal}
                status={result}
                setOpenFormModal={setOpenModal}
            />
        </>
    );
};

export default PostFeedbakcModal;
