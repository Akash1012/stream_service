const INITIALSTATE = {
    isSignedIn: null
}


const authReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return {
                ...state,
                isSignedIn: true

            }

        case 'SIGNOUT':
            return {
                ...state,
                isSignedIn: false

            }


        default:
            return state
    }
}

export default authReducer