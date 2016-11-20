const React = require("react");

const Navbar = require("./navbar");
const LoginModal = require("./login_modal");
const UserStore = require("../stores/user_store");
const hashHistory = require("react-router").hashHistory;

const Homepage = React.createClass({
  getInitialState: function(){
    return {modalOpen: false, currentUser: UserStore.currentUser()};
  },

  componentDidMount: function(){
    if (this.state.currentUser){
      hashHistory.push(`/users/${this.state.currentUser.id}`);
    }
    this.userListener = UserStore.addListener(this.userChange);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
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

  closeModal: function(){
    this.setState({modalOpen: false});
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
