import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {scale} from '../../../scale';
import {COLORS} from '../../../utils';
import {Logo} from '../../../components/Logo';
import {Rating} from 'react-native-ratings';
const {width} = Dimensions.get('screen');
export const Comments = ({item}) => {
  return (
    <View style={styles.container}>
      <Logo size={scale(20)} style={styles.logo} />

      <View style={styles.content}>
        <Text style={styles.dirTxt}>{item.name}</Text>
        <Rating
          ratingCount={5}
          readonly
          style={{
            alignItems: 'flex-start',
            marginTop: 9,
          }}
          tintColor={COLORS.PRIMARY}
          imageSize={scale(18)}
          startingValue={3}
        />
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    borderRadius: scale(17),
    padding: 16,
    marginRight: 16,
  },

  logo: {
    width: scale(30),
    aspectRatio: 1,
    borderWidth: 0,
    backgroundColor: COLORS.GRAY,
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    marginLeft: scale(10),
  },
  dirTxt: {
    width: '100%',
    color: 'white',
    fontSize: scale(16),
    fontWeight: '600',
  },

  comment: {
    color: COLORS.GRAY,
    fontSize: scale(16),
    marginTop: 6,
  },
});
