import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

class Photo extends Component {
  render() {
    const photo = this.props.photo;
    return (
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-media-top">
            <img className="uk-width-1-1" src={photo.thumbnailUrl} alt=""/>
        </div>
        <div className="uk-card-body">
            <h3 className="uk-card-title">{photo.title}</h3>
            <p>{photo.body}</p>
        </div>
    </div>
    );
  }
}

export default Photo;
