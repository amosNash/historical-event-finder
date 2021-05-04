import React from 'react';
import Event from './Event.jsx';

const EventsList = (props) => {
  return (
    <div>
      {props.events.map(event =>
      <Event event={event}/>
    )}
    </div>
  )
}

export default EventsList;
