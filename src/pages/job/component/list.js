import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
});

const Row = props => {
  console.log(props.item.key);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contain}>
        <Text style={styles.text}>{props.item.key}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Row;
