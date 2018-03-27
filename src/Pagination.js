import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props){
        super(props);
        this.handlePagination = this.handlePagination.bind(this);

        this.state = {
          total: 100,
          limit: 5,
          page: 1,
          view: 5
        }
    }
    handlePagination(event){
       event.preventDefault();
       let page = +event.currentTarget.dataset.page;
       this.props.pager(page);

       this.setState({
         page
       });
    }
    render() {

        let pages = Array.from({ length: Math.ceil(this.state.total / this.state.limit) }, (v, k) => k+1);
        let prev = 1 === this.state.page ? this.state.page : this.state.page - 1;
        let next = pages.length === this.state.page ? this.state.page : this.state.page + 1;

        console.log(prev, this.state.page, next);
   
        return (
            <ul className="uk-pagination uk-flex-center">
                <li><a href="/" data-page={prev} onClick={this.handlePagination}><span><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11"></polyline></svg></span></a></li>
                {pages.map(page => {
                  if(Math.abs(this.state.page - page) > this.state.view / 2) {
                    return <li key={page} className='uk-hidden'><a href="/" data-page={page} onClick={this.handlePagination}>{page}</a></li>
                  } else {
                    return <li key={page} className={this.state.page === page ? 'uk-active' : ''}><a href="/" data-page={page} onClick={this.handlePagination}>{page}</a></li>
                  }
                })}
                <li><a href="/" data-page={next} onClick={this.handlePagination}><span><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11"></polyline></svg></span></a></li>
            </ul>


        );
    }
}

export default Pagination;
