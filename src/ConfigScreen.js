import React from 'react';
import {StyleSheet, View, Text, Pressable, Button} from 'react-native';
import FlatButton from '../src/button';

export default function ConfigFunc({navigation}) {
  navigation.navigate('Config');

  return (
    <View style={styles.body}>
      <Text style={styles.counterText}>Counters</Text>
      <View style={styles.counters}>
        <FlatButton text="Add Counter" />
        <FlatButton text="Remove Counter" />
      </View>
      <View>
        <Text style={styles.selected}>Selected Counter</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rgb(0, 191, 255)',
  },
  counters: {
    flex: 1,
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  counterText: {
    fontSize: 25,
    fontWeight: 'bold',
    top: 20,
    left: 40,
  },
  selected:{
    fontSize: 25,
    fontWeight: 'bold',
    left: 40,


  }
});
