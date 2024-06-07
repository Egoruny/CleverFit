import { useWindowSize } from '@uidotdev/usehooks';

export const UseMobileVersion = () => {
const screenWidth = useWindowSize()
const mobileVersion = 480;
return screenWidth.width? screenWidth.width < mobileVersion:false
}