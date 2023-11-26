import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, FlatList} from 'react-native';

import {COLORS} from '../../utils';
import {scale} from '../../scale';

import Icon from 'react-native-vector-icons/AntDesign';
import {CustomButton} from '../../components/CustomButton';
import {DriverCard} from './DriverCard';
import {DriverDetailsModal} from './DriverDetailsModal';
import {useNavigation} from '@react-navigation/native';

export interface CityToCityLoadingProps {
  testID?: string;
}

export function HitchingRides(props: CityToCityLoadingProps) {
  const navigation = useNavigation();
  const [data, setData] = useState({
    from: '',
    to: '',
    date: '',
  });
  const [driver, setDriver] = useState({});
  const [modalVisible, setModalVisible] = useState(Boolean);
  const drivers = [
    {
      id: 0,
      name: 'Дастан',
      date: '23 ноября, 07:30',
      createdAt: '22 ноября, 22:00',
      from: 'Алматы',
      to: 'Бурабай',
      car: 'Toyota Corolla',
      price: '10000',
    },
    {
      id: 1,
      name: 'Амир',
      date: '23 ноября, 07:30',
      createdAt: '22 ноября, 22:00',
      from: 'Алматы',
      to: 'Бурабай',
      car: 'HYUNDAI ELANTRA 2019',
      price: '5000',
    },
  ];
  const directions = [
    {title: 'Астана - Бурабай (189)', from: 'Астана', to: 'Бурабай'},
    {title: 'Астана - Караганда (167)', from: 'Астана', to: 'Караганда'},
    {title: 'Астана - Кокшетау (100)', from: 'Астана', to: 'Кокшетау'},
    {title: 'Астана - Алматы (100)', from: 'Астана', to: 'Алматы'},
  ];
  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleDir = dir => {
    setData({
      from: dir.from,
      to: dir.to,
    });
  };
  const handleDriver = driver => {
    setModalVisible(true);
    setDriver(driver);
  };
  const handleOrder = () => {
    navigation.navigate('ChooseSeat');
  };
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
      <View style={styles.line} />
      {data.from.length === 0 && data.to.length === 0 ? (
        directions.map(dir => (
          <CustomButton
            key={dir.title}
            text={dir.title}
            style={{marginTop: scale(8)}}
            txtStyle={styles.dirTxt}
            onPress={() => handleDir(dir)}
          />
        ))
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={drivers}
          renderItem={({item}) => (
            <DriverCard item={item} onPress={() => handleDriver(item)} />
          )}
        />
      )}
      <DriverDetailsModal
        driver={driver}
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        handleOrder={() => handleOrder()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
