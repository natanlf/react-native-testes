import React, { PureComponent } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {Calendar} from 'react-native-calendars';

export default class Calendario extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
      this.onDayPress = this.onDayPress.bind(this);
    }

    evento = {
      '2019-02-05': {marked: true, dotColor: 'green' },
      '2019-02-24': { marked: true, dotColor: 'red'},
      '2019-02-25': {marked: true, dotColor: 'green'},
      '2012-05-26': {marked: true},
      '2012-05-27': {disabled: true, activeOpacity: 0}
    }

    render() {
      return (
        <View>
          <ScrollView style={styles.container}>
          <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
            <Calendar
            onDayPress={this.onDayPress}
              style={styles.calendar}
           
              firstDay={1}
              markedDates={this.evento}
              // disabledByDefault={true}
              hideArrows={true}
            />
          </ScrollView>
        </View>
      )
    }
  
    onDayPress(day) {
      this.setState({
        selected: day.dateString
      });
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
  