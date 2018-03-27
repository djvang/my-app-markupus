import React, { Component } from 'react';
import Post from './Post';
// import posts from './data/posts'

class PostsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: props.page,
      limit: 5,
      order: 'asc'
    }
  }
  
  getPosts({limit, page, order}, cb) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}&_sort=id&_order=${order}`)
    .then(response => response.json())
    .then(posts => {
      cb(posts);
    })
  }

  componentWillReceiveProps(nexProps) {
    this.getPosts({
      limit: this.state.limit, 
      page: nexProps.page
    }, posts => {
      this.setState({
        posts,
        page: nexProps.page
      });
    });
  }

  componentDidMount() {
    this.getPosts({
      limit: this.state.limit, 
      page: this.state.page
    }, posts => {
      this.setState({
        posts
      })
    })
  }

  handleLimit(event) {
    const limit = event.target.value;
    this.getPosts({ 
      limit: limit, 
      page: this.state.page
    }, posts => {
      this.setState({
        posts,
        limit
      })
    })
  }

  handleOrder(event) {
    const order = event.target.value;
    this.getPosts({ 
      limit: this.state.limit, 
      page: this.state.page, 
      order: order
    }, posts => {
      this.setState({
        posts,
        order
      })
    })
  }

  render() {
    return (
      <div>
        <select onChange={this.handleLimit.bind(this)} className="uk-select uk-width-1-5 uk-margin-bottom uk-margin-right">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <select onChange={this.handleOrder.bind(this)} className="uk-select uk-width-1-5 uk-margin-bottom">
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {this.state.posts.map(post => {
              return <div key={post.id}><Post post={post}/></div>
            })}
        </div>
      </div>
    );
  }
}

export default PostsList;
