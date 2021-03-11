import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const getHeaderTitle = (route) => {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Feed':
      return 'News Feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
};

const Tab = createBottomTabNavigator();

const FeedScreen = () => <Text>Feed screen</Text>;
const ProfileScreen = () => <Text>Profile screen</Text>;
const AccountScreen = () => <Text>Account screen</Text>;

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const SettingsScreen = () => <Text>Settings screen</Text>;

const Stack = createStackNavigator();

const App2 = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App2;
