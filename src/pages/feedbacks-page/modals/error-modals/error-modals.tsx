import { useNavigate } from 'react-router-dom';
import { Button, Grid, Modal, Result } from 'antd';
import { Path } from '@utils/constans/url';

const { useBreakpoint } = Grid;

const ErrorModal = () => {
    const navigate = useNavigate();
    const screens = useBreakpoint();

    const handleClose = () =>  navigate(Path.Main);
    

    return (
        <Modal
            open
            centered
            width={screens.xs ? 328 : 540}
            closable={false}
            footer={null}
            maskStyle={{ background: 'rgba(121, 156, 212, 0.5)', backdropFilter: 'blur(6px)' }}
        >
            <Result
                status='500'
                title='Что-то пошло не так.'
                subTitle='Произошла ошибка, попробуйте ещё раз.'
                extra={
                    <Button type='primary' onClick={handleClose}>
                        Назад
                    </Button>
                }
            />
        </Modal>
    );
};

export default ErrorModal;
