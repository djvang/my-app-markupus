import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="uk-navbar-container uk-margin">
          <div className="uk-navbar-left">

              <a className="uk-navbar-item uk-logo" href="/">Logo</a>

              <ul className="uk-navbar-nav">
                  <li className="uk-active"><a href="/">Posts</a></li>
                  <li><a href="users.html">Users</a></li>
                  <li><a href="photos.html">Photos</a></li>
                  <li><a href="albums.html">Albums</a></li>
                  <li><a href="todos.html">Todos</a></li>
                  <li><a href="comments.html">Comments</a></li>
              </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;
