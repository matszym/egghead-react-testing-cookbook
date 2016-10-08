import React from 'react';

class LikeCounter extends React.Component {
  render() {
    return (
      <a>{this.props.count}</a>
    );
  }
}

export default LikeCounter;