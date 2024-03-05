import { PageHeader, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';


const FeedbacksHeader = () => (
    <PageHeader style={{ padding: '4px 24px 16px 24px', background: '#f0f5ff' }}>
        <Breadcrumb>
            <Breadcrumb.Item><Link to={'/main'}>Главная</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
                Отзывы пользователей
            </Breadcrumb.Item>
        </Breadcrumb>
    </PageHeader>
);

export default FeedbacksHeader;
