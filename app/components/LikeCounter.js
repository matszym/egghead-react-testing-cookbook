import React from 'react';

class LikeCounter extends React.Component {
  render() {
    const className = this.props.isActive ? 'LikeCounter--active' : '';
    return (
      <a className={className}>{this.props.count}</a>
    );
  }
}

export default LikeCounter;