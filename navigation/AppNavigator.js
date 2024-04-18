import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import MainHomeScreen from './MainHomeScreen';
import FoodScreen from '../screens/FoodScreen';
import BottomNavBar from './BottomNavBar';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="MainHome"
          component={MainHomeScreen}
          options={{
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
      <BottomNavBar />
    </NavigationContainer>
  );
};

export default AppNavigator;
