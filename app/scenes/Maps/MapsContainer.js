import React, { Component } from 'react';
import Maps from './Maps';

class MapsContainer extends Component {
    static route = {
    navigationBar: {
      title: 'Maps'
    }
  }
  render() {
    return (
    <Maps />
    );
  }
}

export default MapsContainer;