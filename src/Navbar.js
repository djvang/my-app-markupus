import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="uk-navbar-container uk-margin">
          <div className="uk-navbar-left">

              <Link className="uk-navbar-item uk-logo" to="/">Logo</Link>

              <ul className="uk-navbar-nav">
                  <li className="uk-active"><Link to="/">Posts</Link></li>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="/photos">Photos</Link></li>
                  <li><Link to="/albums">Albums</Link></li>
                  <li><Link to="/todos">Todos</Link></li>
                  <li><Link to="/comments">Comments</Link></li>
              </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;
