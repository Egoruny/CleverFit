import { instance } from '../../axios/axsios';
import { AxiosPaths } from '../../axios/axiosPaths';

import { Path } from '../../utils/constans/url';
import { push } from 'redux-first-history';
import {
    jwtSelect,
    selectedTraningSelect,
    joinUsersContentSelect,
    treningIdSelect,
    userIdSelect,
} from '@redux/slise/select';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
    postInviteStart,
    postInviteSuccess,
    postInviteError,
    postCreateJoinTraningStart,
    setTreningId,
} from '@redux/slise/invite-slice';
import {
    getJoinTeningRequestsError,
    getJoinTeningRequestsSucsecc,
    getJoinTeningRequestsStart,
} from '@redux/slise/join-tening-requests-slice';

import { getJoinUsersStart,setjoingUsers } from '@redux/slise/join-trening-slice';

import {
    putSendRequestStart,
    putSendRequestSuccess,
    putSendRequestError,
    setShowMypartner
} from '@redux/slise/send-request-slice';

import { deleteCansleTraningStart,deleteCansleTraningSuccess,deleteCansleTraningError } from '@redux/slise/cansle-trening-slise';



import { getTreningPartnerStart } from '@redux/slise/join-trening-slice';

function* getTreningPalsWorker() {
    const jwt = yield select(jwtSelect);
    const headers = {
        Authorization: `Bearer ${jwt}`,
    };

    try {
        const { data } = yield call(instance.get, AxiosPaths.INVITE, { headers });
        yield put(getJoinTeningRequestsSucsecc(data));
    } catch (error) {
        getJoinTeningRequestsError();
    }
}

function* postInviteWorker() {
    const jwt = yield select(jwtSelect);
    const body = yield select(selectedTraningSelect);
    const headers = {
        Authorization: `Bearer ${jwt}`,
    };

    console.log(body)

    try {
        const { data } = yield call(instance.post, AxiosPaths.TRANING, body, { headers });
        yield put(setTreningId(data._id));
        const userId: string = yield select(userIdSelect);
        const treningID: string = yield select(treningIdSelect);
 yield call(
            instance.post,
            AxiosPaths.INVITE,
            { to: userId, trainingId: treningID },
            { headers },
        );


        yield put(postInviteSuccess());
        yield put(getJoinUsersStart());

    } catch (error) {
        yield put(postInviteError(true));
    }
}

function* putSendReqestWorker({ payload: { id, status } }) {
    const jwt: string = yield select(jwtSelect);
    const headers = {
        Authorization: `Bearer ${jwt}`,
    };
    try {
        const {data }=yield call(instance.put, AxiosPaths.INVITE, { id, status }, { headers });
        yield put(putSendRequestSuccess());

        if(status === 'accepted'){
            yield put(setShowMypartner(true));
 
            yield put(getTreningPartnerStart());
        }
        yield put(getJoinTeningRequestsStart());
    } catch (error) {
        yield put(putSendRequestError());
        yield put(setShowMypartner(false));
    }
}

function* deleteJoinTraningWorker({payload:{id}}) {
    const jwt: string = yield select(jwtSelect);
    const headers = {
        Authorization: `Bearer ${jwt}`,
    };
    try {
        const {data} = yield call(instance.delete, `${AxiosPaths.INVITE}/${id}`,  { headers });
        yield put(deleteCansleTraningSuccess())
        yield put(setShowMypartner(false));
        // yield put(getTreningPartnerStart());
        // yield put(getJoinTeningRequestsStart());
    } catch (error) {
yield put(deleteCansleTraningError())
    }
}

export function* invateWather() {
    yield takeLatest(postInviteStart.type, postInviteWorker);
    yield takeLatest(getJoinTeningRequestsStart.type, getTreningPalsWorker);
    yield takeLatest(putSendRequestStart.type, putSendReqestWorker);
    yield takeLatest(deleteCansleTraningStart.type, deleteJoinTraningWorker);
}
