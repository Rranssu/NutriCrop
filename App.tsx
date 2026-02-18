import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import VerificationScreen from './screens/verificationScreen';
import PermissionScreen from './screens/permissionScreen';
import MainContainer from './screens/mainContainer'; // The unified shell we just built

// Define the types for your routes (TypeScript)
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Verification: undefined;
  Permission: undefined;
  Main: undefined; // Added the Main container route
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // Hides default headers to use your custom TopBar
          animation: 'fade',  // Smooth transition between auth and main app
        }}
      >
        {/* Auth Flow */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Permission" component={PermissionScreen} />

        {/* Main App Flow */}
        <Stack.Screen 
          name="Main" 
          component={MainContainer} 
          options={{
            gestureEnabled: false // Prevents users from swiping back to the Permission screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}