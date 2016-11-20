const React = require("react");

const LoginForm = React.createClass({
  getInitialState: function(){
    return {email: "", password: ""};
  },

  componentWillReceiveProps: function(newProps){
    if (newProps.open == false){
      this.setState({email: "", password: ""});
    }
  },

  emailChange: function(event){
    this.setState({email: event.target.value});
  },

  passwordChange: function(event){
    this.setState({password: event.target.value});
  },

  onSubmit: function(event){
    event.preventDefault();
    console.log("login submit");
  },

  render: function(){
    return (
      <div id="loginForm">
        <form onSubmit={this.onSubmit} className="modalForm">
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

module.exports = LoginForm;
