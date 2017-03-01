import React, { Component } from 'react'
import {
  Text,
  Image,
  ScrollView,
  View
} from 'react-native'

import Conduct from '../../components/Conduct'

import styles from './styles'

export default About = ({isLoading, conducts}) => (
  <ScrollView style={styles.sceneContainer}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/r10_logo.png')}
      />
    </View>
    <Text style={styles.description}>R10 is a conference that focuses on just about any topic related to dev.</Text>
    <Text style={styles.title}>Date & Venue</Text>
    <Text style={styles.description}>The R10 conference will take place on Tuesday, June 27 2017 in Vancouver, BC.</Text>
    {conducts.map(data => <Conduct key={data.title} title={data.title} description={data.description} />)}
  </ScrollView>
)
