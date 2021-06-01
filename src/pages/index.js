import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './login';

const Pages = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Login} />
    </Stack.Navigator>
  );
};
