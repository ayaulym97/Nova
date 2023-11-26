import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface BtnProps {
  size?: any;
  style: any;
}

export const Logo = ({size, style}: BtnProps) => {
  return (
    <View style={style}>
      <Icon name="person" size={size} color={'white'} />
    </View>
  );
};
