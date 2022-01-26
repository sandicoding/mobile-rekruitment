import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, DetailJob, DetailStatus, Splash} from '../pages';
import Tabs from '../tabs/MyTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setHeaderToken} from '../config/axios/setHeaderToken';
import {useSelector} from 'react-redux';
import EditProfile from '../pages/profile/components/EditProfile';
const Stack = createStackNavigator();
const Router = ({navigation}) => {
  const state = useSelector(state => state);

  const {auth} = state;
  const [token, setToken] = useState(auth?.accessToken);
  const getToken = async token => {
    if (!token) {
      const dataToken = await AsyncStorage.getItem('access_token');
      setToken(dataToken);
    } else {
      setToken(token);
    }
  };

  useEffect(() => {
    getToken(auth?.accessToken);
    setHeaderToken(token);
  }, [state, token]);

  // console.warn(auth)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {token == null ? (
        <>
          <Stack.Screen
            name="Splash"
            options={{headerShown: false}}
            component={Splash}
          />
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
        </>
      ) : (
        <>
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
          <Stack.Screen
            name="EditProfile"
            options={{headerShown: false}}
            component={EditProfile}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;
