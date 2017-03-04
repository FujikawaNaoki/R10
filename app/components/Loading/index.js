import React from 'react'
import { ActivityIndicator } from 'react-native'

import styles from './styles'

const Loading = () => (
  <ActivityIndicator style={styles.activityIndicator} animating={true} size="small" color="black" />
)

export default Loading

