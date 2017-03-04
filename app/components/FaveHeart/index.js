import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { colors, platformIcons } from '../../config/styles'

const FaveHeart = ({ isFave }) => {
  return (
    <View>
    {
      isFave &&
      <Icon
        name={platformIcons.heart}
        size={25}
        color={colors.red}
      />
    }
    </View>
  );
};

export default FaveHeart;