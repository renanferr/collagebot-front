import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
export default class PrivateLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user = this.props.user;
        const userActions = this.props.userActions;
        return (
            <div>
                <h2>Hello {user.name}</h2>
                <Component route={route}/>
                <button onClick={() => {userActions.logout()}}>Logout</button>
            </div>
        );
    }
}