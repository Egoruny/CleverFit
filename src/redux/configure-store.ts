import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import AuthReducer from './auth-slise/auth-slise';
import feedbacksSlise from './auth-slise/feedbacks-slise';
import postFeedbacSlice from './auth-slise/post-feedbakc-slise';
import { runSaga } from './index';

const sagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1,
});

export const store = configureStore({
    reducer: combineReducers({
        app: AuthReducer,
        feedBack: feedbacksSlise,
        postFeedbakc: postFeedbacSlice,
        router: routerReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware).concat(routerMiddleware),
});
sagaMiddleware.run(runSaga);

export const history = createReduxHistory(store);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
