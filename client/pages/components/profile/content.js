import { useState , useEffect} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUser} from '../../../store/actions/usersAction'
import {getUserBlogs , deleteBlog} from '../../../store/actions/blogsAction'
import {usersReducers} from '../../../store/reducers/users.reducers'
import ProfileHeader from "./profileHeader";
import Blogs from "../blogs";
function Content({getUserAction , users , userId , getUserBlogsAction , userBlogs , deleteBlogAction , result }){
    useEffect(() => {
        // if(userId >= 0){
            getUserAction(userId),
            getUserBlogsAction(userId)
        // }
    } , [])
    useEffect(() => {
        // user = props.users
        console.log(users)
    } , [users])
    useEffect(() => {
        console.log(userBlogs , '-----check')
    } , [userBlogs])
    const deleteBlog = (id) => {
        deleteBlogAction(id)
    }
    useEffect(() => {
        if(typeof result == 'string'){
            getUserBlogsAction(userId)
        }
        
    } , [result])
    return(
        <div className="page-content">
		    <ProfileHeader user={users.id}/>
            <div className="blogs">
                {userBlogs ? userBlogs.map(blog => <Blogs blogDelete={deleteBlog} key={"blogs-"+blog.id} user={users.id} blog={blog}/> ) : ''}
            </div>
	    </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    getUserAction: bindActionCreators(getUser , dispatch),
    getUserBlogsAction: bindActionCreators(getUserBlogs , dispatch),
    deleteBlogAction: bindActionCreators(deleteBlog , dispatch)
})
const mapStateToProps = state => ({
    users: state.usersReducers.users,
    userBlogs: state.blogsReducers.userBlogs,
    result: state.blogsReducers.result,
})
export default connect(mapStateToProps , mapDispatchToProps)(Content);
  