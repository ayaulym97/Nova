import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './CustomButton.styles';

interface BtnProps {
  loading?: boolean;
  type?: any;
  icon?: any;
  iconColor?: any;
  text?: any;
  size?: any;
  txtStyle?: any;
  iconStyle?: any;
  style?: any;
  defaultStyle?: boolean;
  onPress: () => void;
}

export const CustomButton = ({
  loading,
  type,
  style,
  icon,
  iconColor,
  size,
  text,
  txtStyle,
  defaultStyle,
  onPress,
}: BtnProps) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[defaultStyle && styles.wrapper, style]}
      onPress={onPress}>
      {(() => {
        switch (type) {
          case 'icon':
            return (
              <Icon name={icon} size={size} color={iconColor || 'black'} />
            );
          default:
            return (
              <Text style={[defaultStyle && styles.txt, txtStyle]}>{text}</Text>
            );
        }
      })()}
    </TouchableOpacity>
  );
};
