import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { colors } from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
        colors={[colors.purple, colors.blue]}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;