import {all} from 'redux-saga/effects';
import {userSagas} from './usersSagas'
import {categSagas} from './categoriesSagas'
import {blogsSagas} from './blogsSagas'
export default function* rootSaga(){

    yield all([
        userSagas(),
        categSagas(),
        blogsSagas()
    ])
}