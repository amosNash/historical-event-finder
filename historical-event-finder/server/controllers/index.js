const fetch = require("node-fetch");

// this will sort all data into an array of arrays with each inner array containing objects only 10 in each array
let allEvents = [];
let searchingTerm = '';
//get historical events based on search term
//returns an array of objects
const getEvents = async (term) => {
  if (term !== searchingTerm) {
    allEvents = [];
  }
  searchingTerm = term;
  let uri = `http://localhost:4000/events?q=${term}`;
  let res = await fetch(uri);
  let events = await res.json();
  await sortData(events);
  return await events;
}

//display only 10 events at a time
const sortData = (records) => {
  let terms = [];
  let count = 0;
  for (let i = 0 ; i < records.length; i++) {
    if (count === 10) {
      allEvents.push(terms);
      count = 0;
      terms = [];
    } else {
      terms.push(records[i]);
      count++
    }
  }
  if (count > 0) {
    allEvents.push(terms);
  }
}

//paginate the data
const getPageItems = (pageNumber) => {
  //check to see correct term
  let eventsOnPage = allEvents[pageNumber];
  return eventsOnPage;
  //use pageNumber to get 10 events from allEvents
  //
}
module.exports = {
  getEvents,
  getPageItems
}