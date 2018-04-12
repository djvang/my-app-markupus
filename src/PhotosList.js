import React, { Component } from 'react';
import Photo from './Photo';
// import posts from './data/posts'

class PhotosList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      page: props.page,
      limit: 8,
      order: 'asc'
    }
  }
  
  getPhotos({limit, page, order}, cb) {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}&_sort=id&_order=${order}`)
    .then(response => response.json())
    .then(photos => {
      cb(photos);
    })
  }

  componentWillReceiveProps(nexProps) {
    
    this.getPhotos({
      limit: this.state.limit, 
      page: nexProps.page
    }, photos => {
      
      let newPhotos = [...this.state.photos, ...photos];

      this.setState({
        photos: newPhotos,
        page: nexProps.page
      });
    });
  }

  componentDidMount() {
    this.getPhotos({
      limit: this.state.limit, 
      page: this.state.page
    }, photos => {
      this.setState({
        photos
      })
    })
  }

  handleLimit(event) {
    const limit = event.target.value;
    this.getPhotos({ 
      limit: limit, 
      page: this.state.page
    }, photos => {
      this.setState({
        photos,
        limit
      })
    })
  }

  handleOrder(event) {
    const order = event.target.value;
    this.getPhotos({ 
      limit: this.state.limit, 
      page: this.state.page, 
      order: order
    }, photos => {
      this.setState({
        photos,
        order
      })
    })
  }

  render() {
    
    return (
      <div>
        <select onChange={this.handleLimit.bind(this)} className="uk-select uk-width-1-5 uk-margin-bottom uk-margin-right">
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <select onChange={this.handleOrder.bind(this)} className="uk-select uk-width-1-5 uk-margin-bottom">
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <div className="uk-grid uk-child-width-1-3@s uk-child-width-1-4@m">
            {this.state.photos.map(photo => {
              return <div key={photo.id}><Photo photo={photo}/></div>
            })}
        </div>
      </div>
    );
  }
}

export default PhotosList;
