import React from 'react';
import _ from 'underscore';
import PersonCell from './person_cell';

// {
//   "id" : '1',
//   "firstName" : "John",
//   "lastName" : "Doe",
//   "email" : "jdoe@example.com"
// }

export default React.createClass({

  getCells(person) {
    let cells = [];
    _.each(person, (value, key) => {
      cells.push(<PersonCell key={key} field={value}/>);
    });
    return cells;
  },

  render() {
    return (
      <tr>{this.getCells(this.props.person)}</tr>
    );
  }

}); 
