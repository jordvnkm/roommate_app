const React = require("react");
const ReactDom = require('react-dom');
const reactRouter = require("react-router");
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;
const IndexRoute = reactRouter.IndexRoute;


const App = require("./components/app");
const Homepage = require("./components/homepage")
const AccountPage = require("./components/account_page");
const UserActions = require("./actions/user_actions");

let routes = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}></IndexRoute>
    <Route path='/users/:userId' component={AccountPage}></Route>
  </Route>
</Router>


document.addEventListener("DOMContentLoaded", ()=>{
  if (window.currentUser){
    UserActions.receiveCurrentUser(window.currentUser);
  }
  ReactDom.render(routes, document.getElementById("content"))
});
