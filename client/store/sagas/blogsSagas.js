import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'
import {BASE_URL} from '../../config/baseurl';
const config = {
    headers: { 'content-type': 'multipart/form-data' }
};

function* createBlog({data}){
    try{
        const blog = yield axios.post(`${BASE_URL}/api/blogs` , data  ,{ headers: {'content-type': 'multipart/form-data'}}).then(res => res.data);
        yield put({type:types.RECIEVED_CREATE_BLOG , payload : blog})
    }catch(e){
        yield put({type: types.FAILURE_CREATE_BLOG, errors: e})
    }
}
function* getUserBlogs({data}){
    try{
        const blog = yield axios.get(`${BASE_URL}/api/blogs/${data}` , data).then(res => res.data);
        yield put({type:types.RECIEVED_GET_USER_BLOGS , payload : blog})
    }catch(e){
        yield put({type: types.FAILURE_GET_USER_BLOGS, errors: e})
    }
}
function* getBlogById({data}){
    try{
        const blog = yield axios.get(`${BASE_URL}/api/getBlog/${data}` , data).then(res => res.data);
        yield put({type:types.RECIEVED_GET_BLOG_BY_ID , payload : blog})
    }catch(e){
        yield put({type: types.FAILURE_GET_BLOG_BY_ID, errors: e})
    }
}
function* updateBlog({data}){
    console.log(data  , '----sagas');
    try{
        const blog = yield axios.put(`${BASE_URL}/api/blogs` , data  ,{ headers: {'content-type': 'multipart/form-data'}}).then(res => res.data);
        yield put({type:types.RECIEVED_UPDATE_BLOG , payload : blog})
    }catch(e){
        yield put({type: types.FAILURE_UPDATE_BLOG, errors: e})
    }
}
function* deleteBlog({data}){
    console.log(data  , '----sagas');
    try{
        const blog = yield axios.delete(`${BASE_URL}/api/blogs/${data}` , data ).then(res => res.data);
        yield put({type:types.RECIEVED_DELETE_BLOG , payload : blog})
    }catch(e){
        yield put({type: types.FAILURE_DELETE_BLOG, errors: e})
    }
}
function* getBlogs(){
    try{
        const blog = yield axios.get(`${BASE_URL}/api/blogs` , '').then(res => res.data);
        yield put({type:types.RECIEVED_GET_BLOGS , payload : blog})
    }catch(e){
        yield put({type: types.FAILURE_GET_BLOGS, errors: e})
    }
}
export function* blogsSagas(){
    yield all([
        yield takeLatest(types.CREATE_BLOG , createBlog),
        yield takeLatest(types.GET_USER_BLOGS , getUserBlogs),
        yield takeLatest(types.GET_BLOG_BY_ID , getBlogById),
        yield takeLatest(types.UPDATE_BLOG , updateBlog),
        yield takeLatest(types.DELETE_BLOG , deleteBlog),
        yield takeLatest(types.GET_BLOGS , getBlogs),
    ])
}