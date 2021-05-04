import React from 'react';
import $ from 'jquery';
import Search from './SearchBar.jsx';
import Pagination from './Pagination.jsx';
import EventsList from './EventsList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      searchTerm: null,
      numberOfPages: 0
    }
    this.getSearchTerm = this.getSearchTerm.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
  }

  getSearchTerm (term) {
    this.setState({
      searchTerm: term
    })
    $.ajax({
      mode: 'GET',
      url: `search/${term}`,
      success: (data) => {
        this.setState({
          events: data.events,
          numberOfPages: data.totalPages
        })
      },
      error: (err) => {
        console.log('error getting events', err);
      }
    })

  }

  renderEvents (page) {
    let searchPage = page.selected;
     $.ajax({
       mode: 'GET',
       url: `eventPage/${searchPage}`,
       success: (data) => {
         this.setState({
           events: data
         })
       },
       error: (err) => {
         console.log('error getting page of events', err);
       }
     })
  }


  render () {
    if (this.state.events.length === 0) {
      return (
        <div>
          <h1>Historical Events Finder</h1>
          <Search getSearchTerm={this.getSearchTerm}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Historical Events Finder</h1>
          <Search getSearchTerm={this.getSearchTerm}/>
          <EventsList events={this.state.events} />
          <Pagination pages={this.state.numberOfPages} renderEvents={this.renderEvents}/>
        </div>
      )
    }
  }
}

export default App;

