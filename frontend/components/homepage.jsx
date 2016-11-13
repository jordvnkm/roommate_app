const React = require("react");

const Navbar = require("./navbar");
const LoginModal = require("./login_modal");

const Homepage = React.createClass({

  openLoginModal: function(){
    let loginModal = document.getElementById("loginModal");
    loginModal.style.display = "block";
    window.onclick = function(event) {
      if (event.target == loginModal) {
          loginModal.style.display = "none";
      }
    }
  },
  render: function(){
    return (
      <div className="homepage">
        <Navbar />
        <LoginModal/>
        <div id="homepageContent">
          <span onClick={this.openLoginModal} className="button">Get Started</span>

        </div>

      </div>
    );
  }
});

module.exports = Homepage;
