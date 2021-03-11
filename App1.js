import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const A = () => <Text>A screen</Text>;

const B = () => <Text>B screen</Text>;

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="A" component={A} options={{tabBarLabel: 'Home!'}} />
  </HomeStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="B"
      component={B}
      options={{tabBarLabel: 'Settings!'}}
    />
  </SettingsStack.Navigator>
);

const App1 = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{tabBarLabel: 'Home!'}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{tabBarLabel: 'Settings!'}}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App1;
