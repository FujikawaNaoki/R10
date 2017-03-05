import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { colors, platformIconNames } from '../../config/styles'

const FaveHeart = ({ isFave }) => {
  return (
    <View>
    {
      isFave &&
      <Icon
        name={platformIconNames.heart}
        size={25}
        color={colors.red}
      />
    }
    </View>
  );
};

export default FaveHeart;