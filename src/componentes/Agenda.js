import React, { Component } from 'react'
import { Text, View, FlatList} from 'react-native'

export default class Agenda extends Component {
    state = {
        tasks: [
            {id: Math.random(), nome: "Natan"},
            {id: Math.random(), nome: "Luan"}
        ]
    }

    render(){
        return (
            <View>
                <FlatList data={this.state.tasks}
                keyExtractor={ item => `${item.id}`}
                renderItem={({item}) => <Text>{item.nome}</Text> }/>
            </View>
        )
    }
}