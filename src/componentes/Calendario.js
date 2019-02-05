import React, { PureComponent } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {Calendar, LocaleConfig} from 'react-native-calendars';

export default class Calendario extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
      this.onDayPress = this.onDayPress.bind(this);

      LocaleConfig.locales['br'] = {
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dec.'],
        dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
        dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.']
      };
      
      LocaleConfig.defaultLocale = 'br';
    }

    evento = {
      '2019-02-05': {marked: true, dotColor: 'green' },
      '2019-02-24': { marked: true, dotColor: 'red'},
      '2019-02-25': {marked: true, dotColor: 'green'},
      '2012-05-26': {marked: true},
      '2019-02-23': {selected: true},
      '2012-05-27': {disabled: true, activeOpacity: 0}
    }

    render() {
      return (
        <View>
          <ScrollView style={styles.container}>
            <Calendar
            onDayPress={this.onDayPress}
              style={styles.calendar}
           
              firstDay={1}
              markedDates={this.evento}
              // disabledByDefault={true}
              hideArrows={true}
            />

        <Text style={styles.text}>Calendar with week numbers</Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          showWeekNumbers
          markedDates={{[this.state.selected]: {selected: true}}}
        />
          </ScrollView>
        </View>
      )
    }
  
    onDayPress(day) {
      this.setState({
        selected: day.dateString
      });
      alert(day.dateString)
    }
  }
  
  const styles = StyleSheet.create({
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    },
    text: {
      textAlign: 'center',
      borderColor: '#bbb',
      padding: 10,
      backgroundColor: '#eee'
    },
    container: {
  
      backgroundColor: 'gray'
    }
  });
  