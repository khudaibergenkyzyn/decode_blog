import { useState , useEffect} from 'react';
import Blogs from './blogs'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getBlogs} from '../../store/actions/blogsAction'
function MainContent({getBlogsAction , allBlogs}) {
    useEffect(() => {
        getBlogsAction()
    } , [])
    useEffect(() => {
        console.log(allBlogs);
    } , [allBlogs])
    return (
        <div className="page-content">
            <h2 className="page-title">Блоги по программированию</h2>
            <p className="page-desc">Популярные и лучшие публикации по программированию для начинающих и профессиональных программистов и IT-специалистов.</p>
            <div className="blogs">
                {allBlogs? allBlogs.map(blog => <Blogs key={`blog-${blog.id}`} blog={blog} page="index" />) : ''}
            </div>
        </div>
    );
}
 
const mapDispatchToProps = dispatch => ({
    getBlogsAction: bindActionCreators(getBlogs , dispatch),
})
const mapStateToProps = state => ({
    allBlogs: state.blogsReducers.allBlogs,
})
export default connect(mapStateToProps , mapDispatchToProps)(MainContent);
  
  