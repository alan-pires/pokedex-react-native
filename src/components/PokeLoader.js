import React from 'react'
import {View, Image, Text} from 'react-native'


function PokeLoader() {
    return (
        <View style={{ flex:1, backgroundColor:'#FFFFFF'}}>
            <Image 
                style={{width: '100%', height:400}}
                source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
            />
            
        </View>
    )
}

export default PokeLoader
