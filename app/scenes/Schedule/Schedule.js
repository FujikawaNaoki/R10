/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
} from 'react-native';

import styles from './styles'

export default Schedule = ({isLoading, dataSource}) => (
  <ScrollView style={styles.sceneContainer}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/r10_logo.png')}
      />
    </View>
    <Text style={styles.description}>Schedule</Text>
    </ScrollView>
)