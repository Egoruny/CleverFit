import { Rate } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const CastomRate = ({ ...props }) => {
    return (
        <Rate
            character={({ value = 0, index = 0 }) => {
                const CastomStar = index + 1 <= value ? StarFilled : StarOutlined;
                return <CastomStar style={{ width: 20, color: '#FAAD14' }} />;
            }}
            {...props}
        />
    );
};

export default CastomRate;
