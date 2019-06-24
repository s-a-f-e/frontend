import React from 'react';
import axios from 'axios';


class Login extends React.Component {
    state = {
      username: "",
      password: ""
    };
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Signin</button>
          </div>
        </form>
        )
    }
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }
  
  handleSubmit = (e) => {
      e.preventDefault();

      const endpoint = "https://rideforsafelife.org/login";

      axios
          .post(endpoint, this.state)
          .then(res => {
              localStorage.setItem();
          })
          .catch(err => {
              console.log("ERROR", err);
          })
  }
}

export default Login;