import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchBarChange (event) {
  this.setState({
    searchTerm: event.target.value
  })
  }

  handleSubmit () {
   //send term to app.jsx
   this.props.getSearchTerm(this.state.searchTerm);
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="Search..." id="search" onChange={this.handleSearchBarChange} size="50"></input>
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }
}

export default Search;