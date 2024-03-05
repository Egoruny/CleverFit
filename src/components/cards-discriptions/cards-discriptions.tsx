import { Card, Typography } from 'antd';
import style from './cards-discriptions.module.css';

const { Title } = Typography;

const CardsDiscriptions: React.FC = () => (
    <>
        <Card className={style.card_opportunities}>
            <p>С CleverFit ты сможешь:</p>
            <p>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</p>
            <p>
                — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с
                нормами и рекордами;
            </p>
            <p>
                — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о
                тренировках;
            </p>
            <p>
                — выполнять расписанные тренировки для разных частей тела, следуя подробным
                инструкциям и советам профессиональных тренеров.
            </p>
        </Card>
        <Card className={style.card_app_description}>
            <Title className={style.card_app_description_title} level={4}>
                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                откладывай на завтра — начни тренироваться уже сегодня!
            </Title>
        </Card>
    </>
);

export default CardsDiscriptions;
