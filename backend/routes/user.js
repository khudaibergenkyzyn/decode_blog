const express = require('express');
const router = express.Router();
const {getUserById} = require('../controllers/auth.controller')
router.get('/api/user/:id' , async (req , res) => {
    const user = await getUserById(req.params.id)
    if(user){
        const data = {
            id: user.id,
            fullName: user.fullName,
            nickname: user.nickname, 
            email: user.email
        }
        res.status(200).send(data)
    }else{
        res.status(401).end('Пользователь не найден');
    }
})
module.exports = router