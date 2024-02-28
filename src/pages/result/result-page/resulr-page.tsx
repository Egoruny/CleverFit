import { Outlet,useLocation ,Navigate} from 'react-router-dom'
import style from './result-page.module.css'
import Load from '../../../components/loader/loader'


const ResultPage = () => {
const location = useLocation()

const from = !!location.state?.pathname

if(!from) {
return <Navigate to='/'/>
}


    return (
    <div className={style.result_wrapper}>
        <Load/>
        <div className={style.result_wrapper_blur}>
            <Outlet/>
        </div>
    </div>)
}

export default ResultPage