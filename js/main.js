import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import PersonRow from './views/person_row';

import personData from './dummy_data';

import React from 'react';
import ReactDom from 'react-dom';

let tableElement = document.querySelector('.person-grid tbody');

ReactDom.render(
  <PersonRow person={personData[0]}/>,
  tableElement
);

console.log('Hello, World');


