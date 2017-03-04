import React from 'react';


import { formatSessionData } from '../../helpers/dataFormatHelpers';
import { formatSecondsToTime } from '../../helpers/timeFormatHelpers'
import { goToSession } from '../../helpers/navigationHelpers'


import {
  ListView,
  TouchableHighlight,
  View,
  Text
} from 'react-native'

import styles from './styles'

const Faves = ({faves=[]}) => {
  return (
  <View style={styles.container}>
    <ListView
      dataSource={faves}
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
  );
};

export default Faves;