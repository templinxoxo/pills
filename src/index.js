import React from 'react';
import ReactDOM from 'react-dom';
import Pills from './Pills';

const terms = ['Lorem', 'Lorem ipsum', 'Dolor sit', 'Amet ipsum dolor', 'Sit lorem', 'Ipsum dolor']

ReactDOM.render(
  <React.StrictMode>
    <Pills terms={terms}/>
  </React.StrictMode>,
  document.getElementById('root')
);
