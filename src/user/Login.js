import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserActions } from './UserActions';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';

class Login extends Component {

    constructor(props) {
        super(props);
        this.action = new UserActions(this.props.dispatch);
        this.onFailed = this.onFailed.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess(response) {
        response.json().then(body => console.log(JSON.stringify(body)));
        this.action.login()
    }
    
    onFailed(error) {
        console.log(error);
        this.action.login()
    }

    render() {
        const customHeader = {};
        customHeader['Test'] = 'test-header';
        return(
            <div>
                <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                      onFailure={this.onFailed}
                      onSuccess={this.onSuccess}
                      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                      showIcon={true}
                      customHeaders={customHeader} forceLogin={true}/>
            </div>
        );
    }

}

function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
