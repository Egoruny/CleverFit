import animationData from '@constants/styles/loader.json';
import { useAppSelector } from '@redux/configure-store';
import Load from '../../assets/loader/loader.json';
import LottieLoader from 'react-lottie-loader';

export const Loader: React.FC = () => {
    const isLoad = useAppSelector((state) => state.app.isLogged);
    const loaderStyle = {
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 10,
        maxWidth: '1440px',
        position: 'absolute',
        background: 'rgba(121, 156, 212, 0.2)',
        backdropFilter: ' blur(8px)',
    };
    if (isLoad) {
        return (
            <div data-test-id='loader'>
                <LottieLoader data-test-id='loader' animationData={Load} style={loaderStyle} />
            </div>
        );
    }
};

export default Loader;
