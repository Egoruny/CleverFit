import { Switch, Typography, Tooltip, Form } from 'antd';
import style from './swich-field.module.css';
import { InfoCircleOutlined } from '@ant-design/icons';
import { desctopVersionSelect } from '@redux/slise/select';
import { useAppSelector } from '@redux/configure-store';
const { Paragraph } = Typography;

type SwithFieldsProps = {
    text: string;
    tooltip?: string;
    name: string | undefined;
    availableInPro: boolean;
    isProVersion: boolean;
    dataTestId:string
    dataTestIdTooltip:string
};

const SwithFields = ({ text, tooltip, name, availableInPro, isProVersion,dataTestId,dataTestIdTooltip }: SwithFieldsProps) => {
    const disable = availableInPro && !isProVersion;
    const desctopVersion = useAppSelector(desctopVersionSelect);

    return (
        <>
            <div className={style.swich_filed}>
                <div className={style.title}>
                    <Paragraph
                        style={{ marginBottom: 0, maxWidth: !desctopVersion ? '170px' : '100%' }}
                        disabled={disable}
                    >
                        {text}
                    </Paragraph>
                    <Tooltip placement='bottom' title={tooltip} >
                        <InfoCircleOutlined data-test-id={dataTestIdTooltip} />
                    </Tooltip>
                </div>
                <Form.Item
                    name={name}
                    key={text}
                    valuePropName='checked'
                    style={{ marginBottom: 0 }}
                >
                    <Switch className={style.switch} disabled={disable} data-test-id={dataTestId} />
                </Form.Item>
            </div>
        </>
    );
};

export default SwithFields;
