import React from 'react'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'
import { ListItem, List } from 'native-base'


function SearchBody({ sprite, data }) {
    let pokemonData = data

    if (!pokemonData) {
        return <View><Text> </Text></View>
    }


    return (
        <ScrollView contentContainerStyle={{flexGrow:1}} style={{ backgroundColor: '#CCC' }}>
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
                        <Text style={{ fontWeight: 'bold' }}>Size </Text>
                    </ListItem>
                    <ListItem >
                        <Text>Weight - {pokemonData.weight / 10}kg</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Height - {pokemonData.height / 10}m</Text>
                    </ListItem>

                    <ListItem >
                        <Text style={{ fontWeight: 'bold' }}>Abilities </Text>
                    </ListItem>
                    <List
                        dataArray={pokemonData.abilities}
                        renderRow={(item) => <ListItem >
                            <Text>Abilitie - {item.ability.name}</Text>
                        </ListItem>}
                    >

                    </List>

                </View>

            </View>
        </ScrollView>
    )




}

const styles = StyleSheet.create({

    title: {
        fontSize: 26,
        alignSelf: 'center'
    },
    imagePokemonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    info: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        opacity: 0.8,
        alignSelf: 'flex-start'
    }

})

export default SearchBody
