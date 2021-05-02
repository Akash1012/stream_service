import { combineReducers } from 'redux'
import { reducer } from 'redux-form'

import authReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    form: reducer
})

export default rootReducer