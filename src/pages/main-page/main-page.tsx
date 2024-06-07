import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { jwtSelect } from '@redux/slise/select';
import { useAppSelector,useAppDispatch } from '@redux/configure-store';
import { getProfileStart } from '@redux/slise/profile-slice';

import Loader from '@components/loader/loader';
import 'antd/dist/antd.css';

import style from './main-page.module.css';

import Sidebar from '@components/sidebar/sidebar';

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const jwt = localStorage.getItem('jwt');

    const sessionStorageJwt = useAppSelector(jwtSelect);

    // useEffect(() => {
    //     if (jwt === null && !sessionStorageJwt) {
    //         navigate('/auth');
    //     }
    // }, [jwt, navigate, sessionStorageJwt]);


useEffect(() => {
    dispatch(getProfileStart())
},[])


    return (
        <>
            <Layout className={style.container}>
                <Loader />
                <Sidebar />
                <Layout className={style.wrapper}>
                    <Outlet />
                </Layout>
            </Layout>
        </>
    );
};
export default MainPage;
