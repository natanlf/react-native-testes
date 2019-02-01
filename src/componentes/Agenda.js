import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default class Agenda extends Component {
    state = {
        tasks: [
            {id: Math.random(), nome: "Natan"},
            {id: Math.random(), nome: "Luan"}
        ]
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList data={this.state.tasks}
                keyExtractor={ item => `${item.id}`}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={ () => alert(item.nome)}>
                        <Text style={styles.name}>{item.nome}</Text> 
                    </TouchableOpacity>
                }/>
                <View style={styles.br}>
                    <TextInput style={styles.TextInputStyle}/>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'gray'
        },
        name: {
            fontSize: 30,
            alignItems: 'center',
            padding: 10,
            color: 'white'
        },
        TextInputStyle: {
            borderWidth: 2,
            borderColor: 'blue',
            width: '90%',
            height: 40,
            textAlign: 'center',
            fontSize: 20
          },
          br: {
              backgroundColor: 'white',
              alignItems: 'center',
              padding: 10
          }    
    }
)