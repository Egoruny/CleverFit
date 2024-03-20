import { Navigate, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Path } from '../utils/constans/url';
import Load from '../components/loader/loader';

import MainPage from '../pages/main-page/main-page';
import Auth from '@pages/auth-page/auth/auth';
import ResultErrorPage from '@pages/result/result-error-page/result-error-page';
import LayOut from '@components/layout/layout';
import ResultPage from '@pages/result/result-page/resulr-page';
import ResultErrorLoginPage from '@pages/result/result-error-login-page/result-error-login-page';
import ResultSucssePage from '@pages/result/result-sucsees-page/result-sucsees-page';
import ErrorUserExsist from '@pages/result/result-error -user-exist-page/error-user-exist';
import ResultErrorCheckEmailExist from '@pages/result/result-error-check-email-exist/result-error-check-email-exist';
import ResultErrorCheckEmail from '@pages/result/result-error-check-email/result-error-check-email';
import ConfirmEmail from '@pages/auth-page/confirm-email/confirm-email';
import ChangePasword from '@pages/auth-page/change-password/change-password';
import ResultErrorChangePassword from '@pages/result/result-error-change-password/result-error-change-password';
import ResultSuccsesChangePassword from '@pages/result/result-succses-change-password-page/result-succses-change-password';
import MainContent from '@components/main-content/main-content';
import Feedbacks from '@pages/feedbacks-page/feedbacks';
import CalendarPage from '@pages/calendar-page/calendar-page';
export const App = () => {
    const [serchParams] = useSearchParams();
    const accessToken = serchParams.get('accessToken');

    useEffect(() => {
        if (accessToken) {
            localStorage.setItem('jwt', accessToken);
        }
    }, [accessToken]);

    return (
        <>
            <Load />
            <Routes>
                <Route path={Path.Root} element={<LayOut />}>
                    <Route index={true} element={<Navigate to={Path.Login} />} />
                    <Route path={Path.Login} element={<Auth tab='login' />} />
                    <Route path={Path.Register} element={<Auth tab='register' />} />
                    <Route element={<MainPage />}>
                        <Route path={Path.Main} element={<MainContent />} />
                        <Route path={Path.Calendar} element={<CalendarPage />} />
                    </Route>
                    <Route element={<MainPage />}>
                        <Route path={Path.Feetbacks} element={<Feedbacks />} />
                    </Route>
                </Route>
                <Route path={Path.Result} element={<ResultPage />}>
                    <Route path={Path.ErrorLogin} element={<ResultErrorLoginPage />} />
                    <Route path={Path.RegistrationSucsses} element={<ResultSucssePage />} />
                    <Route path={Path.ResulError} element={<ResultErrorPage />} />
                    <Route path={Path.ErrorUserExsist} element={<ErrorUserExsist />} />
                    <Route
                        path={Path.CheckEmailNoExsist}
                        element={<ResultErrorCheckEmailExist />}
                    />
                    <Route path={Path.CheckEmail} element={<ResultErrorCheckEmail />} />
                    <Route
                        path={Path.ErrorChangePassword}
                        element={<ResultErrorChangePassword />}
                    />
                    <Route
                        path={Path.SuccsesChangePasword}
                        element={<ResultSuccsesChangePassword />}
                    />
                </Route>

                <Route path={Path.ConfirmEmail} element={<ConfirmEmail />} />
                <Route path={Path.ChangePasword} element={<ChangePasword />} />
            </Routes>
        </>
    );
};
