import React from 'react';
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions/index'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "580145639656-gvqe3dbeq3258d5u12ae7fh43edaqet3.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            }
            )
        })
    }

    onAuthChange = (isSigned) => {
        if (isSigned) {
            this.props.signIn()
        } else {
            this.props.signOut()
        }
        // this.setState({ IsSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }


    renderAuthButton = () => {
        if (this.props.is === null) {
            return null;
        } else if (this.props.is) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: () => dispatch(signIn()),
        signOut: () => dispatch(signOut())
    }
}


const mapStateToProps = (state) => {
    return {
        is: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);