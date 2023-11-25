import React from 'react';
import {useCallback} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import City from '../screens/cityRides';
import { CustomButton } from '../components/CustomButton';
import RouteStyles from './RouteStyles';

const Stack = createStackNavigator();

export const CityStack = ({navigation}) => {
  const handleToggleMenu = useCallBack(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CityMain"
        component={City}
        options={{
          title: 'Главная страница',
          headerLeft: () => {
            return (
              <CustomButton
                type={'icon'}
                icon="menu"
                size={25}
                style={RouteStyles.burgerMenuWrapper}
                onPress={() => handleToggleMenu()}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
