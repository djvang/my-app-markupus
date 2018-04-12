import React, { Component } from 'react';

class LoadMore extends Component {
    constructor(props){
        super(props);
        this.handleLoadMore = this.handleLoadMore.bind(this);

        this.state = {
          total: 5000,
          limit: 8,
          page: 1
        }
    }
    handleLoadMore(event){
       event.preventDefault();
       let page = +event.currentTarget.dataset.page;
       this.props.pager(page);

       this.setState({
         page
       });
    }
    render() {

        let next = this.state.total === this.state.page ? this.state.page : this.state.page + 1;
   
        return (
            <div className="uk-load-more uk-text-center" data-uk-margin>
                <button data-page={next} onClick={this.handleLoadMore} className="uk-button uk-button-primary">Load more</button>
            </div>
        );
    }
}

export default LoadMore;
