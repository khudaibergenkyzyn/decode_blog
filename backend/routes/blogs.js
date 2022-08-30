const express = require('express');
const router = express.Router();
const {createBlogsValidtor} = require('../validations/createBlogsValidtor')
const {createBlog , getUserBlogs , getBlogById , updateBlog , deleteBlog , getBlogs} = require('../controllers/blog.controller')
const {upload} = require('../seeders/multer')
const {isEmpty} = require('../utils/is-empty');
router.post('/api/blogs'  , upload.single('selectedFile') , async (req , res) => {
    const errors = createBlogsValidtor(req.body)
    if(isEmpty(errors)){
        try{
            const blog = await createBlog(req.body , req.file)
            res.status(200).send(blog)
        }catch(e){
            res.status(500).send(e)
        }
    }else{
        res.status(400).send(errors)
    }
})
router.put('/api/blogs' , upload.single('selectedFile') , async(req , res) => {
    try{
        const blog = await updateBlog(req.body , req.file)
        res.status(200).send(blog)
    }catch(error){
        res.status(400).send(error)
    }
})
router.get('/api/blogs/:id' , async (req , res) => {
    try{
        const blogs = await getUserBlogs(req.params , req.file)
        res.status(200).send(blogs)
    }catch(error){
        res.status(500).send(error)
    }
})
router.get('/api/getBlog/:id' , async (req , res) => {
    try{
        const blog = await getBlogById(req.params)
        res.status(200).send(blog)
    }catch(error){
        res.status(500).send(error)
    }
})
router.delete('/api/blogs/:id' , async(req , res) => {
    try{
        await deleteBlog(req.params.id)
        res.status(200).end()
    }catch(error){
        res.status(400).send(error)
    }
})
router.get('/api/blogs' , async (req , res) => {
    console.log('Work');
    try{
        const blog = await getBlogs()
        res.status(200).send(blog)
    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = router