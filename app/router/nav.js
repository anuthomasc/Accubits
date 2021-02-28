import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import AuthLoadingScreen from '../components/authLoading/AuthLoadingScreen';
import LoginScreen from '../components/login/LoginScreen';
import DashboardScreen from '../components/dashboard/DashboardScreen';

const LoginStack = createStackNavigator();

function LoginStackNavigator() {
  return (
    <LoginStack.Navigator initialRouteName="AuthLoadingScreen" headerMode="none">
      <LoginStack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="DashboardScreen" component={DashboardScreen} />
    </LoginStack.Navigator>
  );
}
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <LoginStackNavigator />
    </NavigationContainer>
  );
}

export default MainStackNavigator;