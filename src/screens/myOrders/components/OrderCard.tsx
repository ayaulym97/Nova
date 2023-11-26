import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from '../../../scale';
import {COLORS} from '../../../utils';
import {CustomButton} from '../../../components/CustomButton';
import {Logo} from '../../../components/Logo';
export const OrderCard = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.header}>{`${item.from} -> ${item.to}`}</Text>
        {item.offers.length === 0 && (
          <View style={styles.readyBox}>
            <Text>Выполнен</Text>
          </View>
        )}
      </View>
      {item.offers.length === 0 ? (
        <View style={[styles.row, {marginTop: 16}]}>
          <Logo size={scale(20)} style={styles.logo} />

          <View style={styles.content}>
            <Text style={styles.driver}>{item.driver}</Text>
            <Text style={styles.car}>{item.car}</Text>
          </View>
        </View>
      ) : (
        <>
          <Text style={styles.infoTxt}>
            {item.offers.length} водителей отправяли вам запрос.Выберите
            подходящего для поездки
          </Text>
          <CustomButton
            text={'Выбрать водителя'}
            style={styles.orderBtn}
            txtStyle={styles.orderTxt}
            onPress={() => handleOrder()}
          />
        </>
      )}
      <Text style={styles.createdAt}>Cоздано {item.createdAt}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '92%',
    marginTop: scale(15),
    backgroundColor: COLORS.PRIMARY,
    marginHorizontal: '4%',
    borderRadius: 8,
    padding: scale(14),
  },
  readyBox: {
    width: '30%',
    borderWidth: 0,
    paddingVertical: 4,
    marginVertical: 4,
    backgroundColor: COLORS.GREEN,
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '85%',
  },
  header: {
    color: 'white',
    fontSize: scale(20),
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  driver: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: '600',
  },
  orderBtn: {
    marginTop: scale(14),
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(24),
    paddingVertical: scale(8),
  },
  orderTxt: {
    color: COLORS.PRIMARY,
    fontSize: scale(16),
    fontWeight: '800',
  },
  car: {
    color: 'white',
    fontSize: scale(10),
  },
  createdAt: {
    color: COLORS.GRAY,
    fontSize: scale(10),
    marginTop: scale(16),
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
  infoTxt:{
    color: COLORS.GRAY,
    fontSize: scale(15),
    marginTop: scale(16),
  }
});
