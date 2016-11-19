const React = require("react");


const SignupForm = React.createClass({
  getInitialState: function(){
    return {username: "", email: "", password: ""};
  },

  componentWillReceiveProps: function(newProps){
    if (newProps.open == false){
      this.setState({username: "", email: "", password: ""});
    }
  },

  usernameChange: function(event){
    this.setState({username: event.target.value});
  },

  emailChange: function(event){
    this.setState({email: event.target.value});
  },

  passwordChange: function(event){
    this.setState({password: event.target.value});
  },
  render: function(){
    return (
      <div id="signupForm">
        <form onSubmit={this.onSubmit} className="modalForm">
          <label htmlFor="userName">Username</label>
          <input onChange={this.usernameChange} value={this.state.username} type="text" id="userName"/>

          <label htmlFor="email">Email</label>
          <input onChange={this.emailChange} value={this.state.email} type="text" id="email"/>

          <label htmlFor="password">Password</label>
          <input onChange={this.passwordChange} value={this.state.password} type="password" id="password"/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
