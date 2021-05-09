import React, { useRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js'

import { fetchStream } from '../actions/index';

const StreamShow = (props) => {

    const inputRef = useRef(null)

    React.useEffect(() => {
        props.fetchStream(props.match.params.id);
        var flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${props.match.params.id}.flv`
        });
        flvPlayer.attachMediaElement(inputRef.current);
        flvPlayer.load();
        // flvPlayer.play(); // stop automatic auto play

        return (() => {
            flvPlayer.destroy()
        })
    }, [])


    return (
        <div>
            <video ref={inputRef} style={{ width: '100%' }} controls={true} />
            {props.stream ? <div>
                <h1>{props.stream.title}</h1>
                <h5>{props.stream.description}</h5>
            </div> : <h2>Loading ... </h2>}
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