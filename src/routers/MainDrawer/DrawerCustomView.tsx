import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 100,
    alignSelf: 'center',
  },
  textVersion: {
    textAlign: 'center',
    marginTop: 60,
  },
  textHeading: {
    paddingHorizontal: 15,
    marginTop: 10,
    fontSize: 15,
  },
  textHeadingBottom: {
    marginBottom: 30,
  },
  textInner: {
    fontWeight: '500',
  },
  logOut: {
    marginTop: 100,
  },
});

export const DrawerCustomView = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.textHeading}>
        Имя пользователя: <Text style={styles.textInner}>Aruzhan</Text>
      </Text>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
