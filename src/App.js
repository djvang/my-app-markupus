import React, { Component } from 'react';
import Navbar from './Navbar';
import PostsOverview from './PostsOverview';
import PostSingle from './PostSingle';
import './App.css';

import { Route } from "react-router-dom";

class App extends Component {
  render() {
    
    return (
      <div className="App">

        <Navbar/>

        <main className="uk-main">
          <div className="uk-section">
            <div className="uk-container">


              {/* <Route exact path="/" render={() => {
                return (
                  <div>
                    <PostsList page={this.state.page}/>  
                    <Pagination page={this.state.page} pager={this.setPage}/>
                  </div>
                )
              }} /> */}

              <Route exact path="/" component={PostsOverview}/>
              <Route path="/:id" component={PostSingle} />

            </div>
        </div>
        </main>

       
      </div>
    );
  }
}

export default App;
