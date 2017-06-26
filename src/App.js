import React, { Component } from 'react';
import _                    from 'lodash'
import logo                 from './logo.svg';
import YTSearch             from 'youtube-api-search';
import VideoList            from './components/videolistComp';
import SearchBar            from './components/searchbarComponent';
import VideoDetail          from './components/videodetailsComp';
import './App.css';
const API_KEY = 'AIzaSyDNfEjxJ9fMPIkF4Dmcp11wvh6fXZeobbw';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.ytSearch('animals in the wild');
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.ytSearch(term)
    }, 300);

    return (
      <div className="App">
        <SearchBar
          onInput={ videoSearch }></SearchBar>

        <VideoDetail video={this.state.selectedVideo}></VideoDetail>

        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          ></VideoList>
      </div>
    );
  }

  ytSearch(term) {
    YTSearch({key: API_KEY, term: term}, (apiData) => {
      this.setState({
        videos: apiData,
        selectedVideo: apiData[0],
        term: null
       });
    });
  }
}

export default App;
