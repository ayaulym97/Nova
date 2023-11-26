import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../utils';
import {scale} from '../../../scale';
import {CustomButton} from '../../../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
export const ChooseSeat = () => {
  const navigation = useNavigation();
  const [seats, setSeats] = useState([]);

  const handleSeat = seat => {
    // Check if the seat already exists in the seats array
    const seatIndex = seats.findIndex(
      selectedSeat => selectedSeat.id === seat.id,
    );

    if (seatIndex === -1) {
      // If the seat does not exist, add it to the seats array
      setSeats([...seats, seat]);
    } else {
      // If the seat exists, remove it from the seats array
      const updatedSeats = seats.filter(
        selectedSeat => selectedSeat.id !== seat.id,
      );
      setSeats(updatedSeats);
    }
  };

  const DATA = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '5', title: 'Item 5'},
    {id: '6', title: 'Item 6'},
  ];

  const numColumns = 2;

  const renderItem = ({item}) => (
    <>
      {item.id !== '1' ? (
        <TouchableOpacity style={styles.seat} onPress={() => handleSeat(item)}>
          <Image
            source={
              seats.find(selectedSeat => selectedSeat.id === item.id)
                ? require('../../../assets/seat-selected.png')
                : require('../../../assets/seat.png')
            }
            resizeMode="stretch"
          />
        </TouchableOpacity>
      ) : (
        <Icon
          size={scale(50)}
          color={'white'}
          name="steering"
          style={styles.logo}
        />
      )}
    </>
  );
  return (
    <View style={styles.root}>
      <FlatList
        data={DATA}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
      <View style={styles.line} />
      <View>
        <Text style={styles.selectedTxt}>Выбрано {seats.length} место</Text>
        <CustomButton
          text={'Заказать'}
          style={styles.orderBtn}
          txtStyle={styles.orderTxt}
          onPress={() => navigation.navigate('RateTrip')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  seat: {margin: scale(16)},
  root: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: scale(16),
    paddingTop: scale(16),
  },
  line: {
    width: '100%',
    height: 0.7,
    backgroundColor: COLORS.GRAY,
  },
  header: {
    fontSize: scale(25),
    color: 'white',
    fontWeight: '600',
  },
  selectedTxt: {
    marginTop: 8,
    fontSize: scale(18),
    color: 'white',
    fontWeight: '600',
  },
  image: {
    flex: 1,
  },
  logo: {
    width: scale(60),
    aspectRatio: 1,
    margin: scale(16),
  },
  orderBtn: {
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(24),
    marginVertical: 20,
    padding: scale(12),
  },
  orderTxt: {
    color: COLORS.PRIMARY,
    fontSize: scale(19),
    fontWeight: '800',
  },
});
