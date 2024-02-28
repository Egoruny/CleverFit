import axios from "axios"
import { call,put, takeLatest } from "redux-saga/effects"
import {postLoginStart,
    postLoginSaccses,
    postLoginError,
    postRegistratonStart,
    postRegistratonSaccses,
    postRegistratonError,
    postFogorPsswordStart,
    postFogorPsswordSaccses,
    postFogorPsswordError,
    postConfirmEmailStart,
    postConfirmEmailSaccses,
    postConfirmEmailError,
    postChengePasswordStart,
    postChengePasswordSaccses,
    postChengePasswordError
} from '../auth-slise/auth-slise'
import { push } from "redux-first-history"


function* loginWorker ({payload : {password,email,isRemember,location}}) {

try {
const {data} = yield call(axios.post,`https://marathon-api.clevertec.ru/auth/login`,{email,password})



yield put(push('/main',location))

sessionStorage.setItem('jwt',data.accessToken)

if (isRemember) {
    localStorage.setItem('jwt',data.accessToken)
}


yield put(postLoginSaccses())

}catch (err){

yield put(postLoginError())
yield put(push('/result/error-login',location))

 }
}


function* registrationWorker({payload : {password,email,location}}) {
try {

const {data} = yield call(axios.post,`https://marathon-api.clevertec.ru/auth/registration`,{email,password})

console.log(data)

yield put(postRegistratonSaccses())

yield put(push('/result/success',location))

}catch (err){

yield put(postRegistratonError(err.response.status))

console.log(err)
if(err.response.status === 409) {
    yield put(push('/result/error-user-exist',location))
} else {
    yield put(push('/result/error',location))
}
}
}

function* fogotPassworWorker({payload : {email,location}}) {
    console.log(email)
    try {
        const {data} = yield call(axios.post,`https://marathon-api.clevertec.ru/auth/check-email`,{email})
        
        console.log(data)
        
        yield put(postFogorPsswordSaccses())
        
        yield put(push('/auth/confirm-email',location))
        
        }catch (err){
            console.log(location)
        yield put(postFogorPsswordError(err.response.status))

        console.log(err.response.status)

        console.log(err.response.data.message)

        if(err.response.status === 404 && err.response.data.message === 'Email не найден'){
            yield put(push('/result/error-check-email-no-exist',location))
        } else if(err.response.data.message !== 'Email не найден'){
            yield put(push('/result/error-check-email',location))
        }
}
}

function* confirmEmailWorker ({payload: {code,email}}) {
   try {
    const {data} = yield call(axios.post,`https://marathon-api.clevertec.ru/auth/confirm-email`,{email,code},{ withCredentials: true})
console.log(data)
    yield put(postConfirmEmailSaccses())
        
    yield put(push('/auth/change-password'))

   } catch (error) {

yield put(postConfirmEmailError(true))

}
}

function* changePasswordWorker({payload: {password,confirmPassword,location}}) {
try {
    const {data} = yield call(axios.post,`https://marathon-api.clevertec.ru/auth/change-password`,{password,confirmPassword},{ withCredentials: true})
console.log(data)
    yield put(postChengePasswordSaccses())

    yield put(push('/result/success-change-password',location))

} catch (error) {
    console.log(error)
yield put(postChengePasswordError(true))

yield put(push('/result/error-change-password',location))
}
}

export function* authSagaWother() {
    yield takeLatest(postLoginStart.type,loginWorker)
    yield takeLatest(postRegistratonStart.type,registrationWorker)
    yield takeLatest(postFogorPsswordStart.type,fogotPassworWorker)
    yield takeLatest(postConfirmEmailStart.type,confirmEmailWorker)
    yield takeLatest(postChengePasswordStart.type,changePasswordWorker)
}