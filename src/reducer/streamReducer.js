import _ from 'lodash';
import { CRETAESTREAM, FETCHSTREAM, FETCHSTREAMS, EDITSTREAM, DELETESTREAM } from '../actions/types'

const INITIALSTATE = {
    FETCHSTREAM: {},
    FETCHSTREAMS: {},
    CRETAESTREAM: {},
    EDITSTREAM: {},
    DELETESTREAM: {},
}


const streamReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {

        case FETCHSTREAMS: // all list of data
            return {
                ...state,
                FETCHSTREAMS: {
                    ..._.mapKeys(action.payload, 'id')
                }
            }

        case FETCHSTREAM:
            return {
                ...state,
                FETCHSTREAM: {
                    [action.payload.id]: action.payload // Key and value pair
                }
            }
        case CRETAESTREAM:
            return {
                CRETAESTREAM: {
                    [action.payload.id]: action.payload // Key and value pair
                }
            }

        case EDITSTREAM:
            return {
                ...state,
                EDITSTREAM: {
                    [action.payload.id]: action.payload // Key and value pair
                }
            }
        case DELETESTREAM:
            return _.omit(state, action.payload)

        default: return state;
    }

}


export default streamReducer