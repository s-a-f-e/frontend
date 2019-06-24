import React from 'react';


class Login extends React.Component {
    state = {};
    render() {
        return (
            <div> login </div>
        )
    }
    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage("expires_at"));
        return new Date().getTime() < expiresAt;
      }
}

export default Login;