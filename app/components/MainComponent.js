import React from 'react';
import ReactDOM from 'react-dom';

import CoolComponent from './CoolComponent';

class MainComponent extends React.Component {
  render() {
    return (
      <CoolComponent greeting="hello world" />
    );
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('app')
);