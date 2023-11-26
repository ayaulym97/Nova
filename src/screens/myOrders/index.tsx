import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {OrderCard} from './components/OrderCard';
import {COLORS} from '../../utils';
export const MyOrders = () => {
  const orders = [
    {
      id: 0,
      type: 'new',
      from: 'Aлматы',
      to: 'Актобе',
      driver: '',
      car: 'HYUNDAI ELANTRA 2022',
      createdAt: '22 ноября, 22:00',
      offers: [
        {
          id: 0,
          name: 'Дастан',
          date: '23 ноября, 07:30',
          car: 'Toyota Corolla',
          price: '10000',
        },
        {
          id: 1,
          name: 'Дастан',
          date: '23 ноября, 07:30',
          car: 'Toyota Corolla',
          price: '10000',
        },
      ],
    },
    {
      id: 1,
      type: 'finish',
      from: 'Aлматы',
      to: 'Aстана',
      car: 'HYUNDAI ELANTRA 2019',
      offers: [],
      driver: 'Aлмас',
      createdAt: '22 ноября, 22:00',
    },
  ];
  return (
    <FlatList
      data={orders}
      style={styles.container}
      renderItem={({item}) => <OrderCard item={item} onPress={() => {}} />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33393C',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
