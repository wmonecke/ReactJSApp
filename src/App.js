import React, { Component } from 'react';
import logo                 from './logo.svg';
import YTSearch             from 'youtube-api-search';
import VideoList            from './components/videolistComp';
import SearchBar            from './components/searchbarComponent';
import './App.css';
const API_KEY = 'AIzaSyDNfEjxJ9fMPIkF4Dmcp11wvh6fXZeobbw';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'yachst'}, (apiData) => {
      this.setState({ videos: apiData });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar></SearchBar>
        <VideoList videos={this.state.videos}></VideoList>
      </div>
    );
  }
}

export default App;
