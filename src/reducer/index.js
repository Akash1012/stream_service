import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import streamReducer from './streamReducer'

import authReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
})

export default rootReducer