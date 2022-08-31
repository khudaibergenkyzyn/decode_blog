import { useState , useEffect} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {categReducers} from '../../store/reducers/categories.reducers'
import {getCategories} from '../../store/actions/categoriesAction'
function Catgories({getCategoriesAction , categories}) {
    useEffect(() => {
		getCategoriesAction()
	} , [])
    let returnCategories = categories.map((categ) => <a className='list-item' key={"categ-"+categ.id} href="">{categ.name}</a>)

    useEffect(()=>{
    }, [categories])
    return(
        <div className="page-info">
            <div className="page-header">
                <h2>Категории</h2>
            </div>
           {returnCategories}
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    getCategoriesAction: bindActionCreators(getCategories , dispatch)
})
const mapStateToProps = state => ({
    categories: state.categReducers.categories
})

export default connect(mapStateToProps , mapDispatchToProps)(Catgories);
