import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {DrawerCustomView} from './DrawerCustomView';

import {CityStack} from '../CityStack';
import {IntercityStack} from '../IntercityStack';
import {DRAWER_ROUTES} from './const';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustomView {...props} />}
      initialRouteName={DRAWER_ROUTES.CITY}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name={DRAWER_ROUTES.CITY}
        component={CityStack}
        options={{title: 'City'}}
      />
      <Drawer.Screen
        name={DRAWER_ROUTES.INTERCITY}
        component={IntercityStack}
        options={{title: 'Intercity'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
