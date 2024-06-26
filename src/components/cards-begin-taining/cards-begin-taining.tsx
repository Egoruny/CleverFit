import { Button, Card, Col, Row } from 'antd';
import { Path } from '@utils/constans/url';
import { useNavigate } from 'react-router-dom';
import { getTraningListStart } from '@redux/slise/traningList-slise';
import { getTreningsStart } from '@redux/slise/my-trenings-slice';

import style from './cards-begin-taining.module.css';

import { HeartFilled, CalendarTwoTone, IdcardOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@redux/configure-store';

const cardsBeginTraining = [
    {
        cardTitle: 'Расписать тренировки',
        cardClassName: style.car_begin,
        cardBodyStyle: {
            padding: '12px 24px 12px 24px',
            display: 'flex',
            justifyContent: 'center',
        },
        btnClassName: style.card_button,
        btcIcon: <HeartFilled />,
        btnSize: 'middle',
        btnText: 'Тренировки',
    },
    {
        cardTitle: 'Назначить календарь',
        cardClassName: style.car_begin,
        cardBodyStyle: {
            padding: '12px 24px 12px 24px',
            display: 'flex',
            justifyContent: 'center',
        },
        btnClassName: style.card_button,
        btcIcon: <CalendarTwoTone twoToneColor={['#2F54EB', '#2F54EB']} />,
        btnSize: 'middle',
        btnText: 'Календарь',
    },
    {
        cardTitle: 'Заполнить профиль',
        cardClassName: style.car_begin,
        cardBodyStyle: {
            padding: '12px 24px 12px 24px',
            display: 'flex',
            justifyContent: 'center',
        },
        btnClassName: style.card_button,
        btcIcon: <IdcardOutlined />,
        btnSize: 'middle',
        btnText: 'Профиль',
    },
];

const Cards: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onHandleClickCalendar = () => dispatch(getTraningListStart());
    const onHandleClickProfile = () => navigate(Path.Profile);
    const onHandleClickMyTrenings = () => dispatch(getTreningsStart());

    return (
        <div className={style.card_wrapper}>
            <Row gutter={[8, 8]}>
                <Col span={8} xs={24} md={8}>
                    <Card
                        title='Расписать тренировки'
                        bordered={false}
                        className={style.car_begin}
                        bodyStyle={{
                            padding: '12px 24px 12px 24px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            className={style.card_button}
                            icon={<HeartFilled />}
                            onClick={onHandleClickMyTrenings}
                            data-test-id='menu-button-training'
                            size='middle'
                        >
                            <span>Тренировки</span>
                        </Button>
                    </Card>
                </Col>

                <Col span={8} xs={24} md={8}>
                    <Card
                        title='Назначить календарь'
                        bordered={false}
                        className={style.car_begin}
                        bodyStyle={{
                            padding: '12px 24px 12px 24px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            data-test-id='menu-button-calendar'
                            className={style.card_button}
                            icon={<CalendarTwoTone twoToneColor={['#2F54EB', '#2F54EB']} />}
                            size='middle'
                            onClick={onHandleClickCalendar}
                        >
                            <span>Календарь</span>
                        </Button>
                    </Card>
                </Col>

                <Col span={8} xs={24} md={8}>
                    <Card
                        title='Заполнить профиль'
                        bordered={false}
                        className={style.car_begin}
                        bodyStyle={{
                            padding: '12px 24px 12px 24px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            data-test-id='menu-button-profile'
                            onClick={onHandleClickProfile}
                            className={style.card_button}
                            icon={<IdcardOutlined />}
                            size='middle'
                        >
                            <span>Профиль</span>
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Cards;
