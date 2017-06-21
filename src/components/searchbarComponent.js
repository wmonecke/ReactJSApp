import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }


  render() {
    return (
      <span>
        <input onChange={ event => this.setState({ inputValue: event.target.value })} />
      </span>
    )
  }
}

export default SearchBar;
