import React, { Component } from 'react';
import Navbar from './Navbar';
import PostsList from './PostsList';
import Pagination from './Pagination';
import './App.css';

class App extends Component {
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
      <div className="App">

        <Navbar/>

        <main className="uk-main">
          <div className="uk-section">
            <div className="uk-container">

              <PostsList page={this.state.page}/>  
              <Pagination page={this.state.page} pager={this.setPage}/>

            </div>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
