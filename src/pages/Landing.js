import React from 'react'
import {Button} from 'native-base'
import { StyleSheet, Text, View,  ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native'


function Landing(){
    const navigation = useNavigation()

    function goToSearch(){
        navigation.navigate('Search')
    }

    let myBackground = require('../../assets/landing.jpg')

    return (
        <ImageBackground style={{width:'100%', height: '100%', opacity: 0.9}} source={myBackground}>
          <View style={styles.welcome}>
            <Button 
            onPress={goToSearch}
            block={true}
            style={{margin: 10, backgroundColor: '#1E90FF'}}
            >
              <Text style={styles.textButtonSearch}>
                Start Searching
              </Text>
            </Button>
          </View>
      </ImageBackground>
    )
}



const styles = StyleSheet.create({
    
    welcome:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },  
      title:{
        fontSize: 30,
        color: 'black',
        
      },
      textButtonSearch:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
      }
    
  });
  

export default Landing


