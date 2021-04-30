import React from 'react';

class GoogleAuth extends React.Component {

    state = {
        IsSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "580145639656-gvqe3dbeq3258d5u12ae7fh43edaqet3.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    IsSignedIn: this.auth.isSignedIn.get() // check user is signed in or not
                })
                this.auth.isSignedIn.listen(this.onAuthChange)
            }
            )
        })
    }

    onAuthChange = () => {
        this.setState({ IsSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }


    renderAuthButton = () => {
        if (this.state.IsSignedIn === null) {
            return null;
        } else if (this.state.IsSignedIn) {
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

export default GoogleAuth;