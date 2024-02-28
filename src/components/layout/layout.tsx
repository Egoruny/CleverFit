import {useNavigate} from 'react-router-dom';
import  {useEffect} from 'react';
import { Outlet } from 'react-router-dom'
import { isLoggedAction } from '@redux/auth-slise/auth-slise';
import {Path} from '../../utils/constans/url'
import { useAppDispatch,useAppSelector } from '../../redux/configure-store';
import { isLoggedInSelect } from '@redux/auth-slise/select';
import { replace } from 'redux-first-history';
import Loader from '@components/loader/loader';










const LayOut =() => {
//     const navigate = useNavigate()
// const dispatch = useAppDispatch()
//     const jwt = true

//     if (isLogged) {
//         dispatch(replace(Path.Main))  
//     }

    return <> 
    <Loader/>
    <Outlet/>
    </>
}


export default LayOut


