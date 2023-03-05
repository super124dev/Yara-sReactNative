/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapLocations from './components/MapLocations';
import LocationSelector from './components/LocationSelector';
import CityList from './components/CityList';
import RestaurantList from './components/RestaurantList';
import MainPage from './components/MainPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from "@react-native-material/core";

const Stack = createStackNavigator();

const LoadingPage = () => {
    const navigation = useNavigation();
    return(
    setTimeout(() => {
      navigation.navigate("LocationSelector");
    }, 2000),
    <View style={{flex: 1}}>
      <ImageBackground source={require("./components/assets/background.png")} resizeMode="cover" style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require("./components/assets/logo.png")} style={{width: 200, height: 100}} />
        <View style={styles.loadingStyle}><ActivityIndicator size="large" color='white'/></View>
      </ImageBackground>
    </View>
  )
}

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={LoadingPage} options={{headerShown: false}} />
      <Stack.Screen name="LocationSelector" component={LocationSelector} options={{headerShown: false}} />
      <Stack.Screen name="RestaurantList" component={RestaurantList} options={{headerShown: false}} />
      <Stack.Screen name="CityList" component={CityList} options={{headerShown: false}} />
      <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown: false}} />
      <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default App;
