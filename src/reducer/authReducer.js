import { SIGNIN, SIGNOUT } from '../actions/types'

const INITIALSTATE = {
    isSignedIn: null,
    userId: null
}


const authReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload
            }

        case SIGNOUT:
            return {
                ...state,
                isSignedIn: false,
                userId: null

            }
        default:
            return state
    }
}

export default authReducer