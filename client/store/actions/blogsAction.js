import * as types from './types';

export function createBlog(data){
    return {type: types.CREATE_BLOG , data}
}

export function getUserBlogs(data){
    return {type: types.GET_USER_BLOGS , data}
}

export function getBlogById(data){
    return {type: types.GET_BLOG_BY_ID, data}
}

export function updateBlog(data){
    return {type: types.UPDATE_BLOG, data}
}

export function deleteBlog(data){
    return {type: types.DELETE_BLOG, data}
}

export function getBlogs(){
    return {type: types.GET_BLOGS}
}