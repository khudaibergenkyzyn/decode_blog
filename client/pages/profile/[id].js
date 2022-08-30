import {useRouter } from "next/router";
import { useState , useEffect} from 'react';
import Header from '../partials/header'
import Content from "../components/profile/content";
import UserInfo from "../components/profile/userInfo";

function Profile() {
    const router = useRouter();
    const [id , setId] = useState(router.query.id)
    useEffect(() => {
        if (router.asPath !== router.route) {
            setId(router.query.id)
        }
    } , [router.isReady])
    let profileContent 
    if(id >= 0){
        profileContent = <div><section className="container page"><Content userId={id}/><UserInfo userId={id}/></section></div>
    }
    return(
        <div>
            <Header/>
            {profileContent}
        </div>
    )
}
export default Profile