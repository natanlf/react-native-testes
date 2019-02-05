/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Legenda from './src/componentes/Legenda'
import Calendarario from './src/componentes/Calendario'
import Agenda from './src/componentes/Agenda';
import Downloadfile from './src/componentes/Downloadfile';
import Exemplo from './src/componentes/Exemplo';
import CardTeste from './src/componentes/CardTeste';
import TabsExample from './src/componentes/TabsExample'


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/*<Legenda/>
        <Calendarario/>
        <Agenda/>
        <Downloadfile/>
        <CardTeste/>*/}
        <TabsExample/>
      </View>
    );
  }
}

