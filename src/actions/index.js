import { SIGNIN, SIGNOUT, CRETAESTREAM, FETCHSTREAM, FETCHSTREAMS, EDITSTREAM, DELETESTREAM } from './types'
import axiosApi from './api'

export const signIn = (userId) => {
    return {
        type: SIGNIN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGNOUT
    }
}

export const createStream = (formValues) => {
    return async (dispatch) => {
        const response = await axiosApi.post('/streams', formValues)
        dispatch({ type: CRETAESTREAM, payload: response.data })
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await axiosApi.get('/streams')
        dispatch({ type: FETCHSTREAMS, payload: response.data })
    }
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await axiosApi.get(`{/streams/${id}}`)
        dispatch({ type: FETCHSTREAM, payload: response.data })
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await axiosApi.put(`{/streams/${id}}`, formValues)
        dispatch({ type: EDITSTREAM, payload: response.data })
    }
}

export const deleteStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await axiosApi.put(`{/streams/${id}}`, formValues)
        dispatch({ type: DELETESTREAM, payload: id })
    }
}


