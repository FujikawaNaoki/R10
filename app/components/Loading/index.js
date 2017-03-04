import React from 'react'
import { ActivityIndicator } from 'react-native'

import styles from './styles'

export default () => <ActivityIndicator style={styles.activityIndicator} animating={true} size="small" color="black" />

