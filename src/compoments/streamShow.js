import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../actions/index'

const StreamShow = (props) => {

    React.useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, [])


    return (
        <div>
            Stream Show
            {props.stream ? <div>
                <h1>{props.stream.title}</h1>
                <h5>{props.stream.description}</h5>
            </div> : null}
        </div>
    )
}



const mapStateToDispatch = (dispatch) => {
    return {
        fetchStream: (id) => dispatch(fetchStream(id)),
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams.FETCHSTREAM[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(StreamShow)