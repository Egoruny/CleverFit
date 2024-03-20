import { authSagaWother } from './sagas/auth-saga';
import { feedbacksSagaWother } from './sagas/feedbacks-saga';
import { traningListSagaWother } from './sagas/traning-list-saga';
import { all } from 'redux-saga/effects';

export function* runSaga(): Generator {
    yield all([authSagaWother(), feedbacksSagaWother(),traningListSagaWother()]);
}
