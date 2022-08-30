function ProfileHeader({user}){
	let checkUser = {}
	const ISSERVER = typeof window === "undefined";
	if(!ISSERVER) {
		checkUser = localStorage.getItem("user")
		checkUser = JSON.parse(checkUser)
	}
	let headerText
	if(checkUser.id == user){
		headerText = <div className="page-header"><h2>Мои блоги</h2><a className="button" href="/newblog">Новый блог</a></div>
	}else{
		headerText = <div className="page-header"><h2>Блоги пользователя</h2></div>
	}
	return(
		<div>
			{headerText}
		</div>
	)
    
} 

export default ProfileHeader;
  