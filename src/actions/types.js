export const SIGNIN = "SIGNIN"
export const SIGNOUT = "SIGNOUT"
export const CRETAESTREAM = "CRETAESTREAM"
export const FETCHSTREAM = "FETCHSTREAM"
export const FETCHSTREAMS = "FETCHSTREAMS"
export const DELETESTREAM = "DELETESTREAM"
export const EDITSTREAM = "EDITSTREAM"



// Objec-based
//ES-5

// state = {}
// const newState = { ...state };
// newState[actionTypes.payload.id] = action.payload;
// return newState


//ES-6

// return { ...state, [action.payload.id]: action.payload }