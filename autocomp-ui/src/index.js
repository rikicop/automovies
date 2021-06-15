import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import Demo from './components/demo'; */
import DataFetch from './components/DataFetch';


ReactDOM.render(
  <React.StrictMode>
  {/* <Demo onChange={(e, value) => console.log(value)} />  */}
    <DataFetch/>
  </React.StrictMode>,
  document.getElementById('root')
);

