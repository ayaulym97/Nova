import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Intercity} from '../screens/ Intercity';
import {HitchingRides} from '../screens/HitchingRides';

const Tab = createBottomTabNavigator();

export const IntercityTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Заказ" component={Intercity} />
      <Tab.Screen name="Попутки" component={HitchingRides} />
    </Tab.Navigator>
  );
};
