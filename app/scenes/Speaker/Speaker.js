import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
} from 'react-native'

import styles from './styles'

import Button from '../../components/Button'
const wikipediaLink = url => Linking.openURL(url).catch(err => console.error('An error occurred', err));


const Speaker = ({ speakerData }) => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          style={styles.speakerImage}
          source={{ uri: speakerData.image }}
        />
        <Text style={styles.speakerName}>{speakerData.name}</Text>
        <Text style={styles.speakerBio}>{speakerData.bio}</Text>

        <Button text='Read More on Wikipedia' onPress={() => wikipediaLink(speakerData.url)} />

        </View>
    </ScrollView >
  )
}

export default Speaker
