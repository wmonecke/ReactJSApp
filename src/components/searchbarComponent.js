import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    //this.setState({term});
    this.props.onInput(term);
  }
}

export default SearchBar;
