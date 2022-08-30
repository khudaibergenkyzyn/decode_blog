import {useRouter } from "next/router";
import { useState , useEffect} from 'react';
import Header from '../partials/header'
import Blogs from '../components/blogs';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { getBlogById } from '../../store/actions/blogsAction';
import {blogsReducers} from '../../store/reducers/blogs.reducers'
function BlogDetails( {blogInfo , getBlogByIdAction}) {
    const router = useRouter();
    const [id , setId] = useState(-1)
    
    useEffect(() => {
        if (router.asPath !== router.route) {
            setId(router.query.id)
        }
    } , [router.isReady])
    useEffect(() => {
        if(id >= 0){
            getBlogByIdAction(router.query.id)
            console.log(id, '-----query');

        }
    } , [id])
    // useEffect(() => {
    //     getBlogByIdAction(id)
    // } , [])
    // let blogs
    // useEffect(()=>{
    //     if(blogInfo.title){
    //         blogs = blogInfo
    //     }
    // }, [blogInfo])
    // useEffect(()=>{
    //     blogs = 
    //     console.log(blogs);
    // }, [blogs])
    return(
        <div>
            <Header/>
            <section className="container page">
                 <Blogs blog={blogInfo}/> 
            </section>
        </div>  
    )
}
const mapDispatchToProps = dispatch => ({
	getBlogByIdAction: bindActionCreators(getBlogById , dispatch),
})
const mapStateToProps = state => ({
	blogInfo: state.blogsReducers.blogInfo,
})

export default connect(mapStateToProps , mapDispatchToProps)(BlogDetails);