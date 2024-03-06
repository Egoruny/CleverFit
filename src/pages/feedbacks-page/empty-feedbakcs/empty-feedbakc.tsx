import { Button, Card, Typography } from 'antd';
import style from './empty-feedback.module.css';
const { Title, Text } = Typography;

const EmpptyFeedbakcs = ({ setOpenModal }) => {
    const showPostModal = () => setOpenModal(true);

    return (
        <>
            <div className={style.container}>
                <Card
                    className={style.empty_card}
                    headStyle={{ padding: '0' }}
                    bodyStyle={{ maxWidth: '490px', padding: '0' }}
                    title={
                        <Title level={3}>
                            <span className={style.tytle}>Оставьте свой отзыв первым</span>
                        </Title>
                    }
                >
                    <Text type='secondary' className={style.text}>
                        Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                        Поделитесь своим мнением и опытом с другими пользователями, и помогите им
                        сделать правильный выбор.
                    </Text>
                </Card>
                <Button
                    onClick={showPostModal}
                    type='primary'
                    className={style.btn_empty_feedbakc}
                    data-test-id='write-review'
                >
                    Написать отзыв
                </Button>
            </div>
        </>
    );
};

export default EmpptyFeedbakcs;
