import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
  render() {
    return (
      <h1>React testing cookbook</h1>
    );
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('app')
);