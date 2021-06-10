import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderRadius: 39,
    marginHorizontal: 10,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
});

const Row = props => {
  console.log(props.item.key);
  return (
    <TouchableOpacity style={styles.contain}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.item.key}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
