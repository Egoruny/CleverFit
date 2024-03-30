import { Typography } from 'antd';

import style from './tariff-opportunity.module.css';

const { Text } = Typography;

const TariffOpportunity = ({ iconFree, iconPro,text }) => (
    <div className={style.wrapper}>
        <div className={style.text}>
            <Text>{text}</Text>
        </div>
        <div className={style.icon_wrapper}>
            <div className={style.free_tarif_icon}>{iconFree}</div>
            <div className={style.pro_tarif_icon}>{iconPro}</div>
        </div>
    </div>
);

export default TariffOpportunity;
