import React,{useState} from 'react'
import {View, Text, Keyboard} from 'react-native'
import {Header, Item, Icon, Input  } from 'native-base'
import PokeLoader from '../components/PokeLoader'
import SearchBody from '../components/SearchBody'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'

function Search(){

    const [pokeSearch, setPokeSearch] = useState('')
    const [loading, setLoading] = useState(false)
     const [data, setData] = useState({})
    const [sprite, setSprite] = useState(null)
    

    function searchPoke(){
        setLoading(true)
        Keyboard.dismiss()
        axios.get('http://pokeapi.co/api/v2/pokemon/'+pokeSearch.toLowerCase())
        .then(function(response){
            const res = response.data
            setData(res)
            setSprite(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id}.png`)
            setLoading(false)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    function renderBody(){
        if(loading){
            return(
                < PokeLoader/>
            )
        }else{
            return(
                <ScrollView >
                 <SearchBody style={{backgroundColor:'#CCC'}} sprite={sprite} data={data} />
                   
                   </ScrollView>
               
            )
        }
    }

    return(
    <View>
      <Header
      searchBar
      rounded
      >
          <Item>
              <Icon name='ios-search' onPress={searchPoke}/>
              <Input 
          value={pokeSearch}
          placeholder="Search for a pokemon..."
          onChangeText={(value) => setPokeSearch(value)}
          />
          </Item>          
      </Header>
      {renderBody()}
    </View>
    )
}

export default Search