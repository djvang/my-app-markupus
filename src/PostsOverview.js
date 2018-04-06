import React, { Component } from 'react';
import PostsList from './PostsList';
import Pagination from './Pagination';

class PostsOverview extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
        }

        this.setPage = this.setPage.bind(this);
    }
    
    setPage(page) {
        this.setState({
            page
        });
    }

    render() {
        return (
            <div>
                <PostsList page={this.state.page}/>  
                <Pagination page={this.state.page} pager={this.setPage}/>
            </div>
    
        )
    }
}

export default PostsOverview;