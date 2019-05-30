import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBox extends Component {
  render() {
    return (
      <div>
        <h1>Microblog</h1>
        <p>Get in the Rithm of blogging!</p>

        <nav>
          <div className="navBarStyle">
            <NavLink exact to="/">
              Blog
            </NavLink>
            <NavLink exact to="/new">
              Add a New Post
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBox;
