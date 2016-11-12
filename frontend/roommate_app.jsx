const React = require("react");
const ReactDom = require('react-dom');
const reactRouter = require("react-router");
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;
const IndexRoute = reactRouter.IndexRoute;


const App = require("./components/app");



let routes = <Router history={hashHistory}>
  <Route path="/" component={App}>

  </Route>
</Router>


document.addEventListener("DOMContentLoaded", ()=>{
  ReactDom.render(routes, document.getElementById("content"))
});
