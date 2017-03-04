import React, { Component } from 'react';
import Speaker from './Speaker';

import {colors, typography} from '../../config/styles';

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About The Speaker',
      titleStyle: {
        color: colors.white,
        fontFamily: typography.fontMain,
        fontSize: 25 
      },
      backgroundColor: colors.black
    }
  }

  render() {
    const { speakerData } = this.props
    return (
        <Speaker speakerData={speakerData} />
    )
  }
}

export default SpeakerContainer;
