const {Blog} = require('../models');
const Sequelize = require('sequelize');
const createBlog = (data , file) => new Promise(async resolve => {
    if(!file){
        const newBlog = await Blog.create({
            title: data.title,
            description: data.description, 
            category_id: data.categoryId, 
            author_id: data.authorId
        })
        resolve(newBlog) 
    }else{
        const newBlog = await Blog.create({
            title: data.title,
            description: data.description, 
            category_id: data.categoryId, 
            author_id: data.authorId,
            image: "/images/blogs/" + file.filename
        })
        resolve(newBlog) 
    }
})

const getUserBlogs = (user) => {
    return new Promise(async resolve => {
        const blogs = await Blog.findAll({
            include: ['author' , 'category'],
            where: { 
                author_id:user.id
            },
            order: [
                ['id', 'DESC'],
            ],
        });
        resolve(blogs)
    })
    
}
const getBlogById = (id) => {
    return new Promise(async resolve => {
        const blog = await Blog.findOne({
            include: ['author' , 'category'],
            where: { 
                id:id.id
            }   
        });
        resolve(blog)
    })
}
const updateBlog = async ({id , title , description , category_id} , file) => {
    let blog 
    if(!file){
        return new Promise(async resolve => {
            blog = await Blog.update({title , description , category_id} ,{where:{id}});
            resolve(blog)
        })   
    }else{
        return new Promise(async resolve => {
            blog = await Blog.update({title , description , category_id , image: "/images/blogs/" + file.filename} ,{where:{id}});
            resolve(blog)
        })   
    }
}
const deleteBlog = async id => {
    return new Promise(async resolve => {
        await Blog.destroy({where : {id}});
        resolve('true')
    })
}
   
const getBlogs = () => {
    return new Promise(async resolve => {
        const blogs = await Blog.findAll({
            include: ['author' , 'category'],
            order: [
                ['id', 'DESC'],
            ],
        });
        resolve(blogs)
    })
    
}
module.exports = {
    createBlog,
    getUserBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    getBlogs
}