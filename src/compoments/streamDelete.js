import React from 'react';

import Modal from './Modal'
import history from '../actions/history'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from '../actions/index'

const StreamDelete = (props) => {

    React.useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, [])

    const actions = () => {
        const id = props.match.params.id;
        return (
            <React.Fragment>
                <button onClick={() => props.deleteStream(id, props.stream)} className="ui button negative">Delete</button>
                <Link to="/" className="ui primary button">Cancel</Link>
            </React.Fragment>
        )
    }

    const value = props.stream && props.stream

    return (
        <React.Fragment>
            <Modal
                title="Delete Stream"
                content="Are you want to delete this stream with title - ?"
                actions={actions()}
                stream={value}
                onDismiss={() => history.push('/')}
            />
        </React.Fragment>
    )
}


const mapStateToDispatch = (dispatch) => {
    return {
        fetchStream: (id) => dispatch(fetchStream(id)),
        deleteStream: (id, formValues) => dispatch(deleteStream(id, formValues))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams.FETCHSTREAM[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(StreamDelete)