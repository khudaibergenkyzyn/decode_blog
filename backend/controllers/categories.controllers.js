const {Category} = require('../models');
const getCategories = () => new Promise( async(resolve , reject) => {
    const categories = await Category.findAll()
    console.log(categories);
    resolve(categories)
})

module.exports = {
    getCategories
}