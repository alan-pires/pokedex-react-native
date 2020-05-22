import React,{useEffect} from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'
import { ListItem, List } from 'native-base'


function SearchBody({ sprite, data }) {
    

    let pokemonData = data
    console.log(pokemonData)
            //contentContainerStyle={{flexGrow:1}}
        // if (!pokemonData) {
        //     return <View><Text> </Text></View>
        // }

    return (
        <ScrollView  style={{ backgroundColor: '#FFF' }}>
            <Text style={styles.title}>
                {` #${pokemonData.id} - ${pokemonData.name}`}
            </Text>
            <View style={styles.imagePokemonView}>
                <Image
                    style={{ height: 180, width: 180 }}
                    source={{ uri: sprite }}
                />
                <View style={styles.info}>
                <ListItem >
                        <Text style={styles.titleDescription}>Type </Text>
                    </ListItem>
                <List 
                    dataArray={pokemonData.types}
                    renderRow={(item) => <ListItem>
                        <Text>Type - {item.type.name}</Text>
                        </ListItem>}
                    >                        
                    </List>

                    <ListItem >
                        <Text style={styles.titleDescription}>Size </Text>
                    </ListItem>
                    <ListItem >
                        <Text>Weight - {pokemonData.weight / 10}kg</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Height - {pokemonData.height / 10}m</Text>
                    </ListItem>

                    <ListItem >
                        <Text style={styles.titleDescription}>Abilities </Text>
                    </ListItem>
                                        
                    { <List
                        style={{marginBottom: 100}}
                        dataArray={pokemonData.abilities}
                        renderRow={(item) => <ListItem >
                            <Text>Abilitie - {item.ability.name}</Text>
                        </ListItem>}
                    >
                    </List>}

                </View>

            </View>
        </ScrollView>
    )




}

const styles = StyleSheet.create({

    title: {        
        fontSize: 26,
        textAlign: 'center',
        backgroundColor: '#ADD8E6'
    },
    imagePokemonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ADD8E6'
    },
    titleDescription:{
        fontWeight: 'bold',
         backgroundColor:'#ADD8E6',
         fontSize: 18
    },
    info: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        alignSelf: 'flex-start',
        
    }

})

export default SearchBody
