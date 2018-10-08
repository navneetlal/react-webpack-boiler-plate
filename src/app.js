import React from 'react';
import ReactDom from 'react-dom';

// Import all your components here

import './styles/styles.scss';

class App extends React.Component{
  render(){
    return( 
      // Use all your imported components under one <div> element
      <h1>Hello!</h1>
    );
  }
};

ReactDom.render(<App />, document.getElementById('root'));
