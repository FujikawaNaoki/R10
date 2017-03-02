import React, { Component } from 'react'
import {
  Text,
  Image,
  ListView,
  TouchableHighlight,
  View
} from 'react-native'

import { formatSecondsToTime } from '../../helpers/timeFormatHelpers'
import { goToSession } from '../../helpers/navigationHelpers'

import styles from './styles'

export default Schedule = ({isLoading, schedule}) => (
  <View style={styles.container}>
    <ListView
      dataSource={schedule}
      renderRow={data => (
        <TouchableHighlight onPress={() => goToSession('schedule', data)}>
          <View style={styles.row}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.location}>{data.location}</Text>
          </View>
        </TouchableHighlight>
      )}

      renderSectionHeader={(data, sectionId) => (
        <View key={sectionId}>
          <Text style={styles.headerText}>{formatSecondsToTime(sectionId)}</Text>
        </View>
      )}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  </View>
)
