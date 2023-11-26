import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import {Intercity} from '../screens/ Intercity';
import {IntercityStack} from './IntercityStack';
import {MyOrderStack} from './MyOrdersStack';
import {COLORS} from '../utils';

const Tab = createBottomTabNavigator();

export const IntercityTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Заказ"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: COLORS.PRIMARY},
        tabBarActiveTintColor: COLORS.BLUE, // Change the active tab title color here
        tabBarInactiveTintColor: COLORS.GRAY,
      }}>
      <Tab.Screen
        name="Intercity"
        component={Intercity}
        options={{
          tabBarLabel: 'Заказы',
          tabBarIcon: ({color, size}) => (
            <Icon name="like2" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="IntercityStack"
        component={IntercityStack}
        options={{
          tabBarLabel: 'Попутки',
          tabBarIcon: ({color, size}) => (
            <Icon name="car" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyOrderStack"
        component={MyOrderStack}
        options={{
          tabBarLabel: 'Мои заказы',
          tabBarIcon: ({color, size}) => (
            <Icon name="profile" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
