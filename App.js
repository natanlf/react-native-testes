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

export default class App extends Component {
  render() {
    return (
      <View>
        {/*<Legenda/>
        <Calendarario/>
        <Agenda/>
        <Downloadfile/>*/}
        <Legenda/>
        <Calendarario/>
      </View>
    );
  }
}

