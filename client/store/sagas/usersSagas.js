import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'
import {BASE_URL} from '../../config/baseurl';

function* registerUsers({data}){
    try{
        const user = yield axios.post(`${BASE_URL}/api/signup` , data).then(res => res.data);
        yield put({type:types.RECIEVED_REGISTER_USERS , payload : user})
    }catch(e){
        yield put({type: types.FAILURE_REGISTER_USERS, errors: e})
    }
}

function* signinUser({data}){
    try{
        const user = yield axios.post(`${BASE_URL}/api/signin` , data).then(res => {
            if(res.data.exp){
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        });
        yield put({type:types.RECIEVED_SIGNIN_USERS , payload : user})
    }catch(e){
        yield put({type: types.FAILURE_SIGNIN_USERS, errors: e})
    }
}
function* getUser({data}){
    try{
        const user = yield axios.get(`${BASE_URL}/api/user/${data}` , data).then(res => res.data);
        yield put({type:types.RECIEVED_GET_USER , payload : user})
    }catch(e){
        yield put({type: types.FAILURE_GET_USER, errors: e})
    }
}
export function* userSagas(){
    yield all([
        yield takeLatest(types.REGISTER_USERS , registerUsers),
        yield takeLatest(types.SIGNIN_USERS , signinUser),
        yield takeLatest(types.GET_USER , getUser),
    ])
}