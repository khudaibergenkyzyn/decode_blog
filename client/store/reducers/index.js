import {combineReducers} from 'redux';
import usersReducers from './users.reducers'
import categReducers from './categories.reducers';
import blogsReducers from './blogs.reducers'
export default combineReducers({
    usersReducers,
    categReducers,
    blogsReducers
})