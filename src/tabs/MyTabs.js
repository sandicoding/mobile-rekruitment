import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Status, Job, Profile} from '../pages';
import {COLORS, icons} from '../constants';
import {IconTabs} from '../iconTabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          height: 80,
          borderRadius : 10,
          marginHorizontal : 20,
          backgroundColor: COLORS.primary,
          borderTopColor: 'transparent',
          marginBottom : 20
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <IconTabs focused={focused} icon={icons.home} label="Home" />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Job"
        component={Job}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <IconTabs
                focused={focused}
                icon={icons.briefcase}
                label="Lowongan"
              />
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <IconTabs focused={focused} icon={icons.market} label="Status" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <IconTabs
                focused={focused}
                icon={icons.profile}
                label="Profile"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
