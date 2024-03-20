import { Layout, Button, Typography } from 'antd';
import style from './feedbacks-footer.module.css';
const { Footer } = Layout;
const { Title } = Typography;

const FeedbacksFooter: React.FC = () => {
    return (
        <Footer className={style.footer_feedbaks}>
            <Button type='primary' className={style.feedbacks_btn}>
                Написать отзыв
            </Button>
            <Button type='text'>
                <Title level={5} style={{ color: '#2F54EB' }}>
                    Развернуть все отзывы
                </Title>
            </Button>
        </Footer>
    );
};

export default FeedbacksFooter;
