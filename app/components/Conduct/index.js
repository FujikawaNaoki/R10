import React, { Component } from 'react'
import {
  Animated,
  Text,
  LayoutAnimation,
  TouchableOpacity,
  View
} from 'react-native'

import styles from './styles'

class Conduct extends Component {

  constructor() {
    super();

    this.state = {
      descriptionVisible: false,
      spinValue: new Animated.Value(0)
    }
  }

  onPress = () => {
    const config = LayoutAnimation.create(400, 'linear', 'opacity');
    this.setState({ descriptionVisible: !this.state.descriptionVisible })
    LayoutAnimation.configureNext(config)
    
    this.state.spinValue.setValue(0);
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 400,
      }
    ).start();
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const animatedStyles = {
      transform: [
        { rotate: spin },
      ],
    };
    const { title, description } = this.props;
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Animated.Text style={[styles.title, styles.expandHideIcon, animatedStyles]}>{this.state.descriptionVisible ? '-' : '+'}</Animated.Text>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        {
          this.state.descriptionVisible &&
          <Text style={styles.description}>{description}</Text>
        }
      </View>
    )
  }
}

export default Conduct;