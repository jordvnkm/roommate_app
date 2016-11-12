const React = require("react");

const Navbar = React.createClass({
  render: function(){
    return (
      <div className="navbar">
        <div className="navbarContent">
          <div className="navButton">
            <span>Housemates</span>
          </div>


          <div className="navOptions">
            <div className="navButton">
              <span className="navText">My Houses</span>
            </div>

            <div className="navButton">
              <span>My Profile</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
