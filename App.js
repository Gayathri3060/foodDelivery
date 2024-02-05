import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/LoginSignupScreens/WelcomeScreen';
import SignupScreen from './src/screens/LoginSignupScreens/SignupScreen';
import LoginScreen from './src/screens/LoginSignupScreens/LoginScreen';
import HomeScreen from './src/screens/LoginSignupScreens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import UserProfile from './src/screens/LoginSignupScreens/UserProfile';
import ProductPage from './src/screens/LoginSignupScreens/ProductPage';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerShown:false
        }} />
        <Stack.Screen name="SignUp" component={SignupScreen}  options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{
          headerShown:false
        }}/>
         <Stack.Screen name="User" component={UserProfile}  options={{
          headerShown:false
        }}/>
        <Stack.Screen name="ProductPage" component={ProductPage}  options={{
          headerShown:false
        }}/>
    </Stack.Navigator>

    </NavigationContainer>
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
