import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from '../../../scale';
import {COLORS} from '../../../utils';
import {CustomButton} from '../../../components/CustomButton';
export const DriverCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.logoBox}>
        <View style={styles.logo}>
          <Icon name="person" size={scale(30)} color={'white'} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.container}>
          <Icon name="star" size={scale(12)} color={'white'} />
          <Text style={styles.name}>5.0</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.dirTxt}>{`${item.from} -> ${item.to}`}</Text>
        <Text style={styles.price}>{item.price}₸</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.date}>{item.car}</Text>
        <Text style={styles.createdAt}>Cоздано {item.createdAt}</Text>
      </View>

      <CustomButton
        type={'icon'}
        icon={'phone'}
        size={scale(20)}
        style={styles.phone}
        iconColor={COLORS.PRIMARY}
        onPress={() => {}}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: scale(15),
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: scale(45),
    aspectRatio: 1,
    borderWidth: 0,
    backgroundColor: COLORS.GRAY,
    borderRadius: scale(27.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '70%',
    marginLeft: scale(10),
  },
  dirTxt: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: '600',
  },
  name: {
    color: 'white',
    fontSize: scale(10),
  },
  date: {
    color: 'white',
    fontSize: scale(14),
  },
  createdAt: {
    color: COLORS.GRAY,
    fontSize: scale(10),
  },
  price: {
    color: 'red',
    fontSize: scale(16),
    fontWeight: '600',
  },
  phone: {
    width: scale(40),
    aspectRatio: 1,
    borderWidth: 0,
    backgroundColor: COLORS.GREEN,
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
