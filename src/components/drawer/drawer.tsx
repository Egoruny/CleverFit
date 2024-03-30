import { Drawer, Typography, Button } from 'antd';
import { CloseOutlined, PlusOutlined, EditOutlined} from '@ant-design/icons';


import style from './drawer.module.css';

const { Title, Text } = Typography;

const CastomDrawer = ({
    open,
    onClose,
    date,
    isEdit,
    desctopVersion,
    children,
    isSettings,
    footerContent,
}) => {

    return (
        <Drawer
            data-test-id='tariff-sider'
            // data-test-id='modal-drawer-right'
            width={desctopVersion ? 408 : '100%'}
            title={
                !isEdit ? (
                    <Title level={4}>
                        {isSettings ? 'Сравнить тарифы' : 'Добавление упражнений'}
                    </Title>
                ) : (
                    <Title level={4}>Редактирование</Title>
                )
            }
            destroyOnClose={true}
            closable={true}
            placement='right'
            open={open}
            onClose={onClose}
            mask={false}
            closeIcon={
                !isEdit ? (
                    <PlusOutlined
                        style={{ color: '#000000', display: isSettings ? 'none' : '' }}
                    />
                ) : (
                    <EditOutlined />
                )
            }
            extra={
                <Button
                    data-test-id='modal-drawer-right-button-close'
                    type='text'
                    size='middle'
                    icon={<CloseOutlined style={{ color: 'gray' }} onClick={onClose} />}
                />
            }
            footer={<div className={style.footer_content}>{footerContent}</div>}
        >
        
            {children}
        </Drawer>
    );
};

export default CastomDrawer;
