import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props){
        super(props);
        this.hendelPagination = this.hendelPagination.bind(this);
    }
    hendelPagination(event){
       event.preventDefault();
       let page = event.target.textContent;
       this.props.pager(page);
    }
    render() {
        return (
            <ul className="uk-pagination uk-flex-center">
                <li><a href="/"><span><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11"></polyline></svg></span></a></li>
                <li><a href="/" onClick={this.hendelPagination}>1</a></li>
                <li><a href="/" onClick={this.hendelPagination}>2</a></li>
                <li><a href="/" onClick={this.hendelPagination}>3</a></li>
                <li><a href="/"><span><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11"></polyline></svg></span></a></li>
            </ul>


        );
    }
}

export default Pagination;
