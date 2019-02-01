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

    render() {
      return (
        <View>
          <ScrollView style={styles.container}>
            <Text style={styles.text}>Calendar with selectable date and arrows</Text>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
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
  