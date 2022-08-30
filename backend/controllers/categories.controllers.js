const {Category} = require('../models');
const getCategories = () => new Promise( async(resolve , reject) => {
    const categories = await Category.findAll()
    resolve(categories)
})

module.exports = {
    getCategories
}