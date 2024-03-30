
import { Alert } from 'antd';
import style from './castom-alert.module.css'


type Props = {
    message: string;
};

const CastomAlert = ({ message }: Props) => (
    <div 
    className={style.alert_wrapper}
    >
        <Alert
            data-test-id='alert'
            message={message}
            type='success'
            className={style.alert}
            closable={true}
            showIcon={true}
        />
    </div>
);

export default CastomAlert;
