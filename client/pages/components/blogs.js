import { useState , useEffect} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { useRouter } from 'next/router';
import {deleteBlog} from '../../store/actions/blogsAction'
function Blogs({blog ,user , blogDelete , page}){
    console.log(blog);
    let editPath = "/editblog/"+blog.id
    let dropdown = ''
    let checkUser = {}
	const ISSERVER = typeof window === "undefined";
	if(!ISSERVER) {
		checkUser = localStorage.getItem("user")
		checkUser = JSON.parse(checkUser)
	}
    if(!page && user == checkUser.id){
        dropdown = <span className="link">
                        <img src="/images/dots.svg" alt=""/>
                        Еще
                        <ul className="dropdown">
                            <li> <a href={editPath}>Редактировать</a> </li>
                            <li><a className="danger" onClick={() => blogDelete(blog.id)}>Удалить</a></li>
                        </ul>
                    </span>
    }

    return(
		<div className="blog-item">
            <img className="blog-item--img" src={blog.image ? blog.image : ''} alt=""/>
            <div className="blog-header">
                <h3> <a href={'/details/' + blog.id}> {blog.title} </a>  </h3>
                {dropdown}
            </div>
            <p className="blog-desc">
                {blog.description}
            </p>
            <div className="blog-info">
                <span className="link">
                    <img src="/images/date.svg" alt=""/>
                    12.04.2022
                </span>
                <span className="link">
                    <img src="/images/visibility.svg" alt=""/>
                    21
                </span>
                <a className="link">
                    <img src="/images/message.svg" alt=""/>
                    4
                </a>
                <span className="link">
                    <img src="/images/forums.svg" alt=""/>
                    {blog.category_id} 
                </span>
                <a className="link" href={'/profile/' + blog.author_id}>
                    <img src="/images/person.svg" alt=""/>
                    {blog.author_id}
                </a>
            </div>
        </div>
    )
} 

// const mapDispatchToProps = dispatch => ({
//     deleteBlogAction: bindActionCreators(deleteBlog , dispatch),
// })
// const mapStateToProps = state => ({
//     result: state.blogsReducers.result,
// })

// export default connect(mapStateToProps , mapDispatchToProps)(Blogs);

export default Blogs