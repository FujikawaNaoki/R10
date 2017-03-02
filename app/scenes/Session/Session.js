import React from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { formatSecondsToTime } from '../../helpers/timeFormatHelpers'


import Realm from 'realm'
import realm, { createFave } from '../../config/models'

import styles from './styles'

const onPressFave = () => {

}

const Session = ({sessionData, speaker}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.location}>{sessionData.location}</Text>
      <Text style={styles.title}>{sessionData.title}</Text>
      <Text style={styles.startTime}>{formatSecondsToTime(sessionData.start_time)}</Text>
      <Text style={styles.description}>{sessionData.description}</Text>
      <Text style={styles.presentedBy}>Presented By:</Text>

      <View style={styles.speakerContainer}>
        <Image
          style={styles.speakerImage}
          source={{ uri: speaker.speakerData.image }}
        />
        <Text style={styles.speakerName}>{speaker.speakerData.name}</Text>
      </View>

      <View style={styles.bottomElement}>
        <TouchableOpacity onPress={onPressFave}>
          <View style={styles.faveButton}>
            <Text style={styles.faveButtonText}>Add to Faves</Text>
          </View>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default Session
