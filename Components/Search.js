import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props){
        super(props)
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
          films: []
    }

    _searchTextInputChanged(text){
        this.searchedText = text
    }

    _loadFilms() {
        //console.log(this.state.searchedText) // un log pour vérifier qu'on a bien le text du textinput
        if(this.state.searchedText.length > 0){ // seulment si le text recherché n'est pas valide
            getFilmsFromApiWithSearchedText(this.state.searchedText)
            .then(data => {
                this.setState({ films: data.results })
            });
        }
    }

    render(){
        return(
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={styles.main_container}>
                <TextInput
                    style= {styles.textinput} 
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Recherche' onPress={() => this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container{
        flex: 1,
        marginTop : 20
    },
    textinput: {
        marginLeft: 5, 
        marginRight: 5, 
        height: 50,       
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    }
})

export default Search