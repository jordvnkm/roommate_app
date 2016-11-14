const React = require("react");

// const LoginForm = require("./components/login_form");
const SignupForm = require("./signup_form");

const LoginModal = React.createClass({
  getInitialState: function(){
    return {login: true};
  },

  // loginOrSignup: function(){
  //   if (login){
  //
  //   }
  // },

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
      return <span>Login</span>;
    }
    else {
      return <span>Signup</span>;
    }
  },

  openModal: function(){
    let loginModal = document.getElementById("loginModal");
    loginModal.style.display = "block";
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
            <SignupForm open={this.props.open}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginModal;
