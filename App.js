import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from './screens/ReviewDetails'

const getFonts =()=>Font.loadAsync({
  'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
})

const Stack = createStackNavigator();

export default function App() {
  const [fontsloaded, setfontsloaded] = useState(false);

  if(fontsloaded){
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }else{
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setfontsloaded(true)}
      onError={console.warn}
      />
     
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
