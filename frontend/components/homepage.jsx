const React = require("react");

const Navbar = require("./navbar");

const Homepage = React.createClass({
  render: function(){
    return (
      <div className="homepage">
        <Navbar />
      </div>
    );
  }
});

module.exports = Homepage;
