import React from 'react';
import {View} from 'react-native';
import {BulletList} from 'react-content-loader/native';
const List = () => {
  return (
    <View>
      <BulletList width={400} height={200} style={{width: '100%'}} />
    </View>
  );
};

export default List;
