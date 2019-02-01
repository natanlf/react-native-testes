import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: 'white',
        margin:10,
        borderRadius:10
    },
    legenda: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    feriado: {
        width: 40,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    evento: {
        width: 40,
        height: 20,
        backgroundColor: 'green',
        borderRadius: 10,
    }
})

const Feriado = () => <View style={styles.feriado}></View>

export default props => {
    return (
        <View style={styles.container}>

            <View style={styles.legenda}>
                <Feriado />
                <Text style={{paddingHorizontal:10}}>Feriado</Text>
            </View>
        </View>
    )
}