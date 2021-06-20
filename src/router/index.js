import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, DetailJob, DetailStatus, Splash} from '../pages';
import Tabs from '../tabs/MyTabs';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Splash"
        options={{headerShown: false}}
        component={Splash}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={Register}
      />
      <Stack.Screen name="MainLayout" component={Tabs} />
      <Stack.Screen
        name="DetailJob"
        options={{headerShown: false}}
        component={DetailJob}
      />
      <Stack.Screen
        name="DetailStatus"
        options={{headerShown: false}}
        component={DetailStatus}
      />
    </Stack.Navigator>
  );
};

export default Router;
