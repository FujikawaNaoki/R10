import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Schedule } from '../Schedule';
import Loading from '../../components/Loading';

import { ListView } from 'react-native';

import { formatSessionData } from '../../helpers/dataFormatHelpers'

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  formatSessionData = () => {
    const { faves } = this.props;
    const sessions = this.props.sessions.filter(session => faves.includes(session.session_id))

    const structuredSessioneData = formatSessionData(sessions)
    return dataSource.cloneWithRowsAndSections(
      structuredSessioneData.dataBlob,
      structuredSessioneData.sectionIds,
      structuredSessioneData.rowIds,
    )
  }

  render() {
    const { isLoading, route, faves } = this.props;
    return (
      isLoading ?
        <Loading /> :
        <Schedule faves={faves} schedule={this.formatSessionData()} goToSessionHistory={route.params.tab} />
    )
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});

const mapStateToProps = state => {
  return {
    sessions: state.session.sessionData,
    faves: state.faves,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(ScheduleContainer);



