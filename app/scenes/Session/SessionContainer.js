import React, { Component } from 'react';
import { connect } from 'react-redux';
import Session from './Session';


import {
  Text,
  ListView,
} from 'react-native';

class SessionContainer extends Component {
  
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  render() {
    return (
      <Session />
    )
  }
}

export default SessionContainer;



