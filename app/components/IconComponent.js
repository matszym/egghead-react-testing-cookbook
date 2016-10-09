import React from 'react';

class IconComponent extends React.Component {
  render() {
    return (
      <i className={`fa fa-${this.props.name}`}></i>
    );
  }
}

export default IconComponent;