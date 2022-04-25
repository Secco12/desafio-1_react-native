import React from 'react';
import {StyleSheet, View, Text, Pressable, FlatList, TouchableOpacity} from 'react-native';


export default function CountersFunc({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Counters');
  };

  return (
    <View style={styles.body}>
      
    </View>
  );
}



const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 191, 255)',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: '#000',
  },
});
