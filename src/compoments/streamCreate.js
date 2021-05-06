import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './streamForm'
import { createStream } from '../actions/index'

const StreamCreate = (props) => {


    const onSubmit = (formValues) => {
        props.createStream(formValues)
    }

    return (
        <div>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={onSubmit} />
        </div>
    )
}


const mapStateToDispatch = (dispatch) => {
    return {
        createStream: (formValues) => dispatch(createStream(formValues))
    }
}

export default connect(null, mapStateToDispatch)(StreamCreate)