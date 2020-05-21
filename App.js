import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';
import Landing from './src/pages/Landing'
import Search from './src/pages/Search'
import {NavigationContainer}  from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {

  const stack = createStackNavigator()

  return (
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen name='Search' component={Search} options={{headerShown: false}} />
            <stack.Screen name='Landing' component={Landing} options={{headerShown:false}}/>
          </stack.Navigator>

        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS ==="android"? 25 : 0
  }
});
