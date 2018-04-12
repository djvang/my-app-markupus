import React, { Component } from 'react';
import PhotosList from './PhotosList';
import LoadMore from './LoadMore';

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
                <PhotosList page={this.state.page}/>  
                <LoadMore page={this.state.page} pager={this.setPage}/>
            </div>
    
        )
    }
}

export default PostsOverview;