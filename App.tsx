import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {IntercityTab} from './src/routers/IntercityTab';

const App = () => {
  return (
    <NavigationContainer>
      <IntercityTab />
    </NavigationContainer>
  );
};

export default App;
