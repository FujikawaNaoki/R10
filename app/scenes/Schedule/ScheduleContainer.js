import React, { Component } from 'react';
import { connect } from 'react-redux';
import Schedule from './Schedule';
import Loading from '../../components/Loading';

import { formatSessionData } from '../../helpers/dataFormatHelpers';

import {
  Text,
  ListView,
} from 'react-native';

import { fetchSchedule } from '../../redux/modules/scheduleActions';

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSchedule());
  }

  render() {
    const { isLoading, schedule } = this.props;
    return (
      isLoading ?
        <Loading /> :
        <Schedule isLoading={isLoading} schedule={schedule} />
    )
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    schedule: dataSource.cloneWithRowsAndSections(
      state.schedule.sessionData.dataBlob,
      state.schedule.sessionData.sectionIds,
      state.schedule.sessionData.rowIds,
    ),
  }
}

export default connect(mapStateToProps)(ScheduleContainer);



