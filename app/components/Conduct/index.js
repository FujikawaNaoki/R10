import React from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

export default ({title, description}) => (
  <View>
    <Text style={styles.title}>+ {title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
)
