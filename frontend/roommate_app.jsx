const React = require("react");
const ReactDom = require('react-dom');
const reactRouter = require("react-router");
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;
const IndexRoute = reactRouter.IndexRoute;


const App = require("./components/app");
const Homepage = require("./components/homepage")


let routes = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}></IndexRoute>
  </Route>
</Router>


document.addEventListener("DOMContentLoaded", ()=>{
  ReactDom.render(routes, document.getElementById("content"))
});
