import React from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const FeedStack = createStackNavigator();

const FeedScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button
      title="Go to Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);
const ProfileScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button
      title="Go to User details"
      onPress={() => navigation.navigate('UserDetails')}
    />
  </View>
);
const SettingsScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button title="Go to Wifi" onPress={() => navigation.navigate('WiFi')} />
  </View>
);
const WiFiSettingsScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button
      title="Go to Wifi Ucom"
      onPress={() => navigation.navigate('WiFi_UCOM')}
    />
  </View>
);
const WiFiSettingsUcomScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button
      title="Go to Profile Tab"
      onPress={() => navigation.navigate('Profile')}
    />
    <Button
      title="Go to User Details"
      onPress={() => navigation.navigate('UserDetails')}
    />
  </View>
);

const FeedStackScreen = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name="Feed" component={FeedScreen} />
  </FeedStack.Navigator>
);

const UserDetailsScreen = ({navigation}) => (
  <Button onPress={() => navigation.navigate('UserImage')} title="User image" />
);

const UserImageScreen = ({navigation}) => (
  <Button
    onPress={() => navigation.navigate('UserDetails')}
    title="Go to user details"
  />
);

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="UserDetails" component={UserDetailsScreen} />
    <ProfileStack.Screen name="UserImage" component={UserImageScreen} />
  </ProfileStack.Navigator>
);

const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedStackScreen} />
    <Tab.Screen name="Profile" component={ProfileStackScreen} />
  </Tab.Navigator>
);

const RootStack = createStackNavigator();

const App3 = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeTabs} />
      <RootStack.Screen name="Settings" component={SettingsScreen} />
      <RootStack.Screen name="WiFi" component={WiFiSettingsScreen} />
      <RootStack.Screen name="WiFi_UCOM" component={WiFiSettingsUcomScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App3;
