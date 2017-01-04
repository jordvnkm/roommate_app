const React = require("react");

const Navbar = require("./navbar");
const LoginModal = require("./login_modal");
const UserStore = require("../stores/user_store");
const hashHistory = require("react-router").hashHistory;

const Homepage = React.createClass({
  getInitialState: function(){
    return {login: true , modalOpen: false, currentUser: UserStore.currentUser()};
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.userChange);
    if (this.state.currentUser){
      hashHistory.push(`/users/${this.state.currentUser.id}`);
    }
  },

  userChange: function(){
    let user = UserStore.currentUser();
    if (user !== null){
      hashHistory.push(`/users/${user.id}`);
    }
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

  logIn: function(){
    let loginModal = document.getElementById("loginModal");

    window.onclick = function(event) {
      if (event.target == loginModal) {
          this.setState({modalOpen: false});
      }
    }.bind(this);
    this.setState({modalOpen: true, login: true})
  },

  signUp: function(){
    let loginModal = document.getElementById("loginModal");

    window.onclick = function(event) {
      if (event.target == loginModal) {
          this.setState({modalOpen: false});
      }
    }.bind(this);
    this.setState({modalOpen: true, login: false})
  },

  toggleMode: function(){
    this.setState({login: !this.state.login});
  },

  render: function(){
    return (
      <div className="homepage">
        <Navbar logIn={this.logIn} signUp={this.signUp}/>
        <LoginModal login={this.state.login} toggleMode={this.toggleMode} closeModal={this.closeModal} open={this.state.modalOpen}/>
        <div id="homepageContent">
          <span onClick={this.openLoginModal} className="button">Get Started</span>

        </div>

      </div>
    );
  }
});

module.exports = Homepage;
