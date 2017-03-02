import React, { Component } from 'react'
import {
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
    }
  }

  onPress = () => {
    const config = LayoutAnimation.create(400, 'linear', 'opacity');
    LayoutAnimation.configureNext(config);
    this.setState({ descriptionVisible: !this.state.descriptionVisible })
  }

  descriptionVisibilitySymbol = () => this.state.descriptionVisible ? '-' : '+';

  render() {
    const { title, description } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.title}>
            {this.descriptionVisibilitySymbol}
            {title}
          </Text>
        </TouchableOpacity>
        {
          this.state.descriptionVisible &&
          <Text style={styles.description}>{description}</Text>
        }
      </View>
    )
  }
}

export default Conduct