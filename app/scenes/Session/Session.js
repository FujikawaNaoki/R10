import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,

} from 'react-native'

import { formatSecondsToTime } from '../../helpers/timeFormatHelpers'
import { toggleFave } from '../../redux/modules/favesActions'
import { goToSpeaker } from '../../helpers/navigationHelpers'

import styles from './styles'
import FaveHeart from '../../components/FaveHeart'


import Button from '../../components/Button'

const Session = ({ sessionData, speaker, isFave, dispatch }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.faveContainer}>
        <Text style={styles.location}>{sessionData.location}</Text>
        <FaveHeart isFave={isFave} />
      </View>
      <Text style={styles.title}>{sessionData.title}</Text>
      <Text style={styles.startTime}>{formatSecondsToTime(sessionData.start_time)}</Text>
      <Text style={styles.description}>{sessionData.description}</Text>
      <Text style={styles.presentedBy}>Presented By:</Text>

      <View style={styles.speakerContainer}>
        <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
          <Image
            style={styles.speakerImage}
            source={{ uri: speaker.image }}
          />
        </TouchableOpacity>
        <Text style={styles.speakerName}>{speaker.name}</Text>
      </View>

      <Button
        text={isFave ? 'Removes from Faves' : 'Add to Faves'}
        onPress={() => dispatch(toggleFave(sessionData.session_id))}
      />

    </ScrollView>
  )
}

export default connect()(Session)
