import handleProject from './handleProject'
import handleNotes from './handleNote'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    handleProject,
    handleNotes
})

export default rootReducer