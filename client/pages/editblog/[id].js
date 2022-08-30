// import {useRouter } from "next/router";
import { useState , useEffect} from 'react';
import Header from '../partials/header'
import EditContent from '../components/editBlog/editContent'
import {useRouter } from "next/router"
// import Content from "../components/profile/content";
// import UserInfo from "../components/profile/userInfo";

function EditBlog() {
    const router = useRouter();
    const [id , setId] = useState(router.query.id)
	const ISSERVER = typeof window === "undefined";
	let authorId
    return(
        <div>
            <Header/>
            <section className="container page">
                <EditContent/>
            </section>
        </div>  
    )
}
export default EditBlog