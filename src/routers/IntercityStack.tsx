import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {COLORS} from '../utils';
import {ChooseSeat} from '../screens/HitchingRides/ChoosePlace';
import {HitchingRides} from '../screens/HitchingRides';

const Stack = createStackNavigator();

export const IntercityStack = () => {
  return (
    <Stack.Navigator initialRouteName="ChooseSeat">
      <Stack.Screen
        name="HitchingRides"
        component={HitchingRides}
        options={{
          title: 'Межгород',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: COLORS.PRIMARY,
          },
        }}
      />
      <Stack.Screen
        name="ChooseSeat"
        component={ChooseSeat}
        options={{
          title: 'Выберите место',
          headerTintColor: 'white',

          headerStyle: {
            backgroundColor: COLORS.PRIMARY,
          },
        }}
      />
    </Stack.Navigator>
  );
};
