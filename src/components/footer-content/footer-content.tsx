import { Layout, Card, Button, Typography } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { useAppDispatch } from '@redux/configure-store';
import { getFeedbacksStart } from '@redux/slise/feedbacks-slise';

import style from './footer-content.module.css';

const { Meta } = Card;
const { Footer } = Layout;
const { Link } = Typography;

const FooterContent: React.FC = () => {
    const dispatch = useAppDispatch();
    const getFeedbacks = () => dispatch(getFeedbacksStart());
    return (
        <>
            <Footer className={style.footer_container}>
                <Button
                    type='link'
                    className={style.btn_feedback}
                    onClick={getFeedbacks}
                    data-test-id='see-reviews'
                >
                    Смотреть отзывы
                </Button>
                <Card bodyStyle={{ padding: 0 }} className={style.footer_card}>
                    <Meta
                        className={style.meta}
                        title={
                            <Link
                                style={{ color: '#2F54EB' }}
                                href='https://ant.design'
                                target='_blank'
                            >
                                Скачать на телефон
                            </Link>
                        }
                        description='Доступно в PRO-тарифе'
                    />
                    <div className={style.btn_platform_container}>
                        <Button
                            className={style.btn_platform}
                            type='text'
                            icon={<AndroidFilled />}
                            size='middle'
                        >
                            Android OS
                        </Button>
                        <Button
                            className={style.btn_platform}
                            type='text'
                            icon={<AppleFilled />}
                            size='small'
                        >
                        Apple IOS
                        </Button>
                    </div>
                </Card>
            </Footer>
        </>
    );
};

export default FooterContent;
