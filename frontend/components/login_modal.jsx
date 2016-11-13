const React = require("react");

const LoginModal = React.createClass({
  getInitialState: function(){
    return {login: true};
  },

  // loginOrSignup: function(){
  //   if (login){
  //
  //   }
  // },

  closeModal: function(){
    let loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none";
  },

  render: function(){
    return (
      <div id="loginModal" className="modal">
        <div className="modalContent">
          <span onClick={this.closeModal} className="modalClose">close</span>
          <p> hi there</p>
        </div>
      </div>
    );
  }
});

module.exports = LoginModal;
