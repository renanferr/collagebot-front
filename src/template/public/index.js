import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class PublicLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user  = this.props.user;
        return (
            <div>
                <h1>Public Layout</h1>

                    { user.logged ? (
                        <Redirect to='/bot'/>
                    )
                    :(
                        <Redirect to='/login'/>
                    )
                    }

                <Component route={route}/>
            </div>
        );
    }
}