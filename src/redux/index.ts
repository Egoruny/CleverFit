import {authSagaWother} from './sagas/auth-saga'
import { all } from 'redux-saga/effects'

export function* runSaga ():Generator  {
  yield all([authSagaWother()])
}