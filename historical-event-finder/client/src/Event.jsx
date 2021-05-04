import React from 'react';

const Event = (props) => {
  if (props.event.date[0] === '-') {
     props.event.date = props.event.date.slice(1) + ' BC';
  }
  return (
  <div>
    <div>
      DATE: {props.event.date}
      <br></br>
      {props.event.description}
    </div>
    <br></br>
  </div>
  )
}

export default Event;