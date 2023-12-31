import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

import {COLORS} from '../../utils';
import {scale} from '../../scale';

import Icon from 'react-native-vector-icons/AntDesign';
import {CustomButton} from '../../components/CustomButton';

export function Intercity(props) {
  const [data, setData] = useState({
    from: '',
    to: '',
    date: '',
    price: '',
  });
  const [order, setOrder] = useState({});

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleOrder = () => {};
  return (
    <View style={styles.root}>
      <View style={styles.inputRow}>
        <View style={styles.ovalBox}>
          <Text style={styles.oval}>А</Text>
        </View>
        <TextInput
          placeholder="Откуда?"
          value={data.from}
          style={styles.input}
          placeholderTextColor={COLORS.GRAY}
          onChangeText={value => handleChange('from', value)}
        />
        <Icon
          name="right"
          size={scale(20)}
          color={COLORS.GRAY}
          style={styles.arrowdown}
        />
      </View>
      <Icon
        name="arrowdown"
        size={scale(28)}
        color="white"
        style={styles.arrowdown}
      />
      <View style={styles.inputRow}>
        <View style={[styles.ovalBox, {backgroundColor: COLORS.GREEN}]}>
          <Text style={styles.oval}>B</Text>
        </View>
        <TextInput
          placeholder="Куда?"
          placeholderTextColor={COLORS.GRAY}
          value={data.to}
          style={styles.input}
          onChangeText={value => handleChange('to', value)}
        />
        <Icon
          name="right"
          size={scale(20)}
          color={COLORS.GRAY}
          style={styles.arrowdown}
        />
      </View>
      <View style={[styles.inputRow, {marginTop: scale(16)}]}>
        <Icon
          name="calendar"
          size={scale(28)}
          color={COLORS.GRAY}
          style={styles.arrowdown}
        />
        <TextInput
          placeholder="Дата отправления"
          placeholderTextColor={COLORS.GRAY}
          value={data.date}
          style={[styles.input]}
          onChangeText={value => handleChange('date', value)}
        />
        <Icon
          name="right"
          size={scale(20)}
          color={COLORS.GRAY}
          style={styles.arrowdown}
        />
      </View>
      <View style={[styles.inputRow, {marginTop: scale(16)}]}>
        <Text style={styles.priceTxt}>₸</Text>
        <TextInput
          placeholder="Предложите цену"
          placeholderTextColor={COLORS.GRAY}
          value={data.price}
          style={[styles.input]}
          onChangeText={value => handleChange('price', value)}
        />
        <Icon
          name="right"
          size={scale(20)}
          color={COLORS.GRAY}
          style={styles.arrowdown}
        />
      </View>
      <View style={styles.line} />
      {data.from.length !== 0 && data.to.length !== 0 && (
        <View style={styles.info}>
          <Icon
            name="infocirlceo"
            size={scale(20)}
            color={'white'}
            style={styles.arrowdown}
          />
          <Text style={styles.infoTxt}>
            Средний тариф по маршруту: 12 000 ₸
          </Text>
        </View>
      )}
      <CustomButton
        text={'Заказать'}
        style={styles.orderBtn}
        txtStyle={styles.orderTxt}
        onPress={() => handleOrder()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  orderBtn: {
    marginTop: scale(14),
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(24),
    paddingVertical: scale(12),
  },
  orderTxt: {
    color: COLORS.PRIMARY,
    fontSize: scale(19),
    fontWeight: '800',
  },
  root: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: scale(16),
    paddingTop: scale(16),
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    marginLeft: scale(14),
    fontSize: scale(18),
    color: 'white',
    fontWeight: '900',
  },
  info: {
    flexDirection: 'row',
    backgroundColor: '#1F4468',
    borderRadius: scale(9),
    padding: scale(8),
  },
  infoTxt: {
    maxWidth: '80%',
    color: 'white',
    fontSize: scale(16),
    marginLeft: scale(8),
  },
  oval: {
    color: COLORS.PRIMARY,
    fontSize: scale(18),
  },
  arrowdown: {marginLeft: scale(4)},
  ovalBox: {
    width: scale(35),
    aspectRatio: 1,
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: scale(17.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularDirections: {
    fontSize: scale(18),
    color: 'white',
    fontWeight: '700',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.GRAY,
    marginVertical: scale(16),
  },
  dirTxt: {
    color: COLORS.BLUE,
    fontSize: scale(16),
  },
  priceTxt: {
    color: 'white',
    fontSize: scale(19),
    fontWeight: '900',
    margin: scale(10),
  },
});
