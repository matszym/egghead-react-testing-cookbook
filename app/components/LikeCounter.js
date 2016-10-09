import React from 'react';

class LikeCounter extends React.Component {
  render() {
    const className = this.props.isActive ? 'LikeCounter--active' : '';
    return (
      <a className={className}>
        <span>{`Likes: ${this.props.counter}`}</span>
      </a>
    );
  }
}

export default LikeCounter;