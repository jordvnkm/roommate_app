const React = require("react");

const LoginForm = require("./login_form");
const SignupForm = require("./signup_form");

const LoginModal = React.createClass({
  getInitialState: function(){
    return {login: true};
  },

  loginOrSignup: function(){
    if (this.state.login){
      return <LoginForm open={this.props.open}/>;
    }
    else {
      return <SignupForm open={this.props.open}/>;
    }
  },


  componentWillReceiveProps: function(newProps){
    if (newProps.open == false){
      this.closeModal();
    }
    else {
      this.openModal();
    }
  },

  closeModal: function(){
    let loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none";
  },

  modalHeader: function(){
    if (this.state.login){
      return (
        <ul id="headerTabs">
          <li className="focusHeaderTab">Log In</li>
          <li onClick={this.toggleMode} className="formHeaderTab">Sign Up</li>
        </ul>
      );
    }
    else {
      return (
        <ul id="headerTabs">
          <li onClick={this.toggleMode} className="formHeaderTab">Log In</li>
          <li className="focusHeaderTab" >Sign Up</li>
        </ul>
      );
    }

  },

  openModal: function(){
    let loginModal = document.getElementById("loginModal");
    loginModal.style.display = "block";
  },

  toggleMode: function(){
    this.setState({login: !this.state.login});
  },

  render: function(){
    return (
      <div id="loginModal" className="modal">
        <div className="modalContent">
          <div className="modalHeader">
            <div>
              {this.modalHeader()}
              <span onClick={this.props.closeModal} className="modalClose">×</span>
            </div>
          </div>

          <div className="modalBody">
            {this.loginOrSignup()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginModal;
