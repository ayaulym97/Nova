import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrderDetails from '../screens/myOrders/OrderDetails';
import {MyOrders} from '../screens/myOrders';
import { COLORS } from '../utils';

const Stack = createStackNavigator();

export const MyOrderStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          title: 'Мои поездки',
          headerTintColor: 'white',

          headerStyle: {
            backgroundColor: COLORS.PRIMARY,
          },
        }}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{
          title: 'Мои поездки',
        }}
      />
    </Stack.Navigator>
  );
};
