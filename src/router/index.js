import React from 'react';
import Login from '../pages/login';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../pages/register';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default Router;
