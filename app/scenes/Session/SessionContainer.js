import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import Session from './Session';

import { fetchSpeaker } from '../../redux/modules/speakerActions';

class SessionContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  componentWillMount() {
    const { dispatch, sessionData } = this.props;
    dispatch(fetchSpeaker(sessionData.speaker, sessionData.tab));
  }

  render() {
    const { isLoading, sessionData, speaker, faves } = this.props
    return (
      isLoading ?
        <Loading /> :
        <Session
          sessionData={sessionData}
          speaker={sessionData.tab === 'Schedule' ? speaker.speakerData : speaker.faveSpeakerData}
          isFave={faves.includes(sessionData.session_id)}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    speaker: state.speaker,
    faves: state.faves,
  }
}

export default connect(mapStateToProps)(SessionContainer);



