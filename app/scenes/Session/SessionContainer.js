import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import Session from './Session';

import { fetchSpeaker } from '../../redux/modules/speakerActions';

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

  componentDidMount() {
    const { dispatch, sessionData } = this.props;
    dispatch(fetchSpeaker(sessionData.speaker));
  }

  getFaveId(sessionId) {

  }

  render() {
    const { isLoading, sessionData, speaker } = this.props
    return (
      isLoading ?
        <Loading /> :
        <Session
          sessionData={sessionData}
          speaker={speaker}
          faveId={this.getFaveId(sessionData.session_id)}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    speaker: state.speaker,
  }
}

export default connect(mapStateToProps)(SessionContainer);



