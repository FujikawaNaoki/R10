import React from 'react'
import {
  Text,
  ListView,
  TouchableHighlight,
  View
} from 'react-native'

import { formatSecondsToTime } from '../../helpers/timeFormatHelpers'
import { goToSession } from '../../helpers/navigationHelpers'

import styles from './styles'

import FaveHeart from '../../components/FaveHeart'

const Schedule = ({ schedule, goToSessionHistory, faves }) => (
  <View style={styles.container}>
    <ListView
      dataSource={schedule}
      renderRow={data => (
        <TouchableHighlight onPress={() => goToSession(goToSessionHistory, { ...data, tab: goToSessionHistory })}>
          <View style={styles.row}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.faveContainer}>
              <Text style={styles.location}>{data.location}</Text>
              <FaveHeart isFave={faves.includes(data.session_id)} />
            </View>
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

export default Schedule;
