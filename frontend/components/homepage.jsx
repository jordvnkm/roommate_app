const React = require("react");

const Navbar = require("./navbar");
const LoginModal = require("./login_modal");

const Homepage = React.createClass({
  getInitialState: function(){
    return {modalOpen: false};
  },

  openLoginModal: function(){
    let loginModal = document.getElementById("loginModal");

    window.onclick = function(event) {
      if (event.target == loginModal) {
          this.setState({modalOpen: false});
      }
    }.bind(this);
    this.setState({modalOpen: true});
  },

  render: function(){
    return (
      <div className="homepage">
        <Navbar />
        <LoginModal closeModal={this.closeModal} open={this.state.modalOpen}/>
        <div id="homepageContent">
          <span onClick={this.openLoginModal} className="button">Get Started</span>

        </div>

      </div>
    );
  }
});

module.exports = Homepage;
