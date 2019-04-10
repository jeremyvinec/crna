import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
    render(){
        return(
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={{ marginTop: 20}}>
                <TextInput
                    style= {styles.TextInput} 
                    placeholder='Titre du film'/>
                <Button title='Recherche' onPress={() => {}}/>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextInput: {
        marginLeft: 5, 
        marginRight: 5, 
        height: 50,       
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    }
})

export default Search