import { Drawer, Typography, Button } from 'antd';
import { CloseOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import { useAppSelector} from '@redux/configure-store';
import {desctopVersionSelect } from '@redux/slise/select';


import style from './drawer.module.css';

const { Title, Text } = Typography;

const CastomDrawer = ({
    closable,
    title,
    open,
    onClose,
    date,
    isEdit,
    desctopVersion,
    children,
    isSettings,
    footerContent,
}) => {
    const desctopVersionT = useAppSelector(desctopVersionSelect);
    return (
        <Drawer
            // data-test-id='tariff-sider'
            data-test-id='modal-drawer-right'
            width={desctopVersionT ? 408 : '100%'}
            title={<Title level={4}>{title}</Title>}
            destroyOnClose={true}
            closable={closable}
            placement='right'
            open={open}
            onClose={onClose}
            mask={false}
            maskClosable
            closeIcon={
                !isEdit ? (
                    <PlusOutlined
                        style={{ color: '#000000'}}
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
