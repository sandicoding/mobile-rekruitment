import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FONTS} from '../../constants';
import Row from './component/list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Job = () => {
  return (
    <ImageBackground
      source={require('../../assets/image/back2.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text
          style={{
            marginHorizontal: 20,
            color: 'white',
            marginBottom: 220,
            ...FONTS.h1,
          }}>
          Lowongan Tersedia
        </Text>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
              {key: 'Devin'},
              {key: 'df'},
              {key: 'Devin'},
            ]}
            renderItem={({item}) => <Row item={item} />}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Job;
