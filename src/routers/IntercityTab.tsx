import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Intercity} from '../screens/ Intercity';
import {HitchingRides} from '../screens/HitchingRides';
import {IntercityStack} from './IntercityStack';

const Tab = createBottomTabNavigator();

export const IntercityTab = () => {
  return (
    <Tab.Navigator initialRouteName='Попутки' screenOptions={{headerShown: false}}>
      <Tab.Screen name="Заказ" component={Intercity} />
      <Tab.Screen name="Попутки" component={IntercityStack} />
    </Tab.Navigator>
  );
};
