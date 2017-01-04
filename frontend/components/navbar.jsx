const React = require("react");

const UserStore = require("../stores/user_store");
const UserActions = require("../actions/user_actions");
const hashHistory = require("react-router").hashHistory;

const Navbar = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser()};
  },
  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.userChange);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  userChange: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },

  logOut: function(){
    UserActions.logout();
  },

  navOptions: function(){
    if (this.state.currentUser == null){
      return (
        <div className="navOptions">
          <div className="navButton">
            <span onClick={this.props.logIn} className="navText">Log In</span>
          </div>

          <div className="navButton">
            <span onClick={this.props.signUp}>Sign Up</span>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="navOptions">
          <div className="navButton">
            <span className="navText">My Houses</span>
          </div>

          <div className="navButton">
            <span>My Profile</span>
          </div>

          <div className="navButton">
            <span onClick={this.logOut} className="navText">Log Out</span>
          </div>
        </div>
      )
    }
  },

  render: function(){
    return (
      <div className="navbar">
        <div className="navbarContent">
          <div className="navButton">
            <img id="navLogo"/>
          </div>


          {this.navOptions()}
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
