import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import City from '../screens/cityRides';
import {Intercity} from '../screens/ Intercity';

const Stack = createStackNavigator();

export const IntercityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IntercityMain"
        component={Intercity}
        options={{
          title: 'Межгород',
        }}
      />
    </Stack.Navigator>
  );
};
