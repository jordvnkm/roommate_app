const React = require("react");

const UserActions = require("../actions/user_actions");

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

  submit: function(event){
    event.preventDefault();
    event.stopPropagation();
    UserActions.login({
      email: this.state.email,
      password: this.state.password
    });
    this.props.closeModal();
  },

  render: function(){
    return (
      <div id="loginForm">
        <form onSubmit={this.submit} className="modalForm">
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
