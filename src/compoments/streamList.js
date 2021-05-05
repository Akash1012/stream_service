import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../actions/index'

const StreamList = (props) => {
    useEffect(() => {
        props.fetchStreams()
    }, [])


    const renderAdmin = (stream) => {
        if (stream.userId === props.currentUserId) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative">Button</button>
                </div>
            )
        }
    }

    const renderList = () => {
        return props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    {renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    const renderCreate = () => {
        if (props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link className="ui button primary" to="/streams/new">Create Stream</Link>
                </div>
            )
        }
    }

    return (
        <div className="">
            <h2>Streams</h2>
            <div className="ui celled list">{renderList()}</div>
            {renderCreate()}
        </div>
    )
}


const mapStateToDispatch = (dispatch) => {
    return {
        fetchStreams: () => dispatch(fetchStreams())
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams.FETCHSTREAMS),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(StreamList)