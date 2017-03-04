import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Schedule } from '../Schedule';
import Loading from '../../components/Loading';

import {
  Text,
  ListView,
} from 'react-native';

import { fetchSessions } from '../../redux/modules/sessionActions';
import { loadFaves } from '../../redux/modules/favesActions';
import { formatSessionData } from '../../helpers/dataFormatHelpers'

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }
  constructor() {
    super();
    this.sessionFilter = 'faves'
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchSessions());
    dispatch(loadFaves())
  }

  formatSessionData = (sessions, faves) => {
    const sessionsFilter = sessions.filter(session => faves.includes(session.session_id))

    const structuredSessioneData = formatSessionData(sessionsFilter)
    return dataSource.cloneWithRowsAndSections(
      structuredSessioneData.dataBlob,
      structuredSessioneData.sectionIds,
      structuredSessioneData.rowIds,
    )
  }

  render() {
    const { sessions, faves } = this.props;
    return (
      <Schedule schedule={this.formatSessionData(sessions, faves)} goToSessionHistory='faves' />
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
  }
}

export default connect(mapStateToProps)(FavesContainer);



