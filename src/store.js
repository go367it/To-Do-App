import rootReducer from './reducers/index' // importing reducers
import {createStore} from 'redux'

// creating the central store using createStore function
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store