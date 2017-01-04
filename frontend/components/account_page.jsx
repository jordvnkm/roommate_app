const React = require("react");

const NavBar = require("./navbar");

const UserActions = require("../actions/user_actions");
const UserStore = require("../stores/user_store");
const hashHistory = require("react-router").hashHistory;

const AccountPage = React.createClass({
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
    if (UserStore.currentUser() == null){
      hashHistory.push("/");
    }
  },

  logout: function(event){
    event.preventDefault();
    UserActions.logout();
  },

  render: function(){
    return (
      <div id="accountPage">
        <NavBar />
        <span>hi from account page</span>
        <button onClick={this.logout}>logout</button>
      </div>
    );
  }
});

module.exports = AccountPage;
