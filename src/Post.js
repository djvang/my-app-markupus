import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-header">
              <h3 className="uk-card-title uk-margin-remove-bottom">{post.title}</h3>
          </div>
          <div className="uk-card-body">
              <p>{post.body}</p>
          </div>
          <div className="uk-card-footer">
              <Link to={`/${post.id}`} className="uk-button uk-button-text">Read more</Link>
          </div>
      </div>
    );
  }
}

export default Post;
