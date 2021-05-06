import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { fetchStream, editStream } from '../actions/index'
import StreamForm from './streamForm'

const StreamEdit = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, [])


    const onSubmit = (formValues) => {
        props.editdata(props.match.params.id, formValues);
    }

    const edit = () => {
        if (!props.stream) {
            return <div>Loading ....</div>
        } else {
            const value = _.pick(props.stream, 'title', 'description')

            return (<div>
                {props.stream.title}
                <StreamForm onSubmit={onSubmit} initialValues={value} />
            </div>)
        }
    }

    return (
        <div>
            <h3>Edit Stream</h3>
            {edit()}
        </div>
    )
}

const mapStateToDispatch = (dispatch) => {
    return {
        fetchStream: (id) => dispatch(fetchStream(id)),
        editdata: (id, formValues) => dispatch(editStream(id, formValues))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams.FETCHSTREAM[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(StreamEdit)