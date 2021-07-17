import React, { useEffect } from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {COLORS} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {listMyApply} from '../../config/redux/action/MyApplyAction';
import {useDispatch , useSelector} from 'react-redux';
import {List} from '../../Loader';


const  Status = (props) => {

const dispatch = useDispatch()

const applyList = useSelector(state => state.applyList);

const {loading, error, applys} = applyList;
useFocusEffect(
  React.useCallback(() => {
  dispatch(listMyApply())
}, [dispatch])
)

  
  
    return (
      <View
        style={{
          justifyContent: 'center',
          width: wp('100%'),
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: 18,
            marginTop: 13,
            backgroundColor: 'black',
            color: COLORS.white,
            width: wp(59),
            padding: 10,
          }}>
          Status Lamaran Kamu
        </Text>
        <ScrollView
          style={{
            backgroundColor: '#F8F8F8',
            paddingHorizontal: 20,
          }}>
          {loading ? (
            <List />
          ) : (
            applys?.map(item => (
              <View
                key={item.id}
                style={{
                  backgroundColor: '#FFF',
                  marginTop: 10,
                  flexDirection: 'row',
                  borderRadius: 10,
                  height: 60,
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                <View
                  style={{
                    backgroundColor: '#DFDFDF',
                    borderRadius: 5,
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../assets/image/pentool.png')}
                    style={{width: wp(6), height: hp(6)}}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: wp(70),
                    paddingHorizontal: 10,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-ExtraBold',
                        fontSize: 13,
                      }}>
                      {item.job.name}
                    </Text>
                    <View
                      style={{
                        backgroundColor:
                          item.status === 'diterima'
                            ? '#2541B2'
                            : item.status === 'menunggu'
                            ? '#01937C'
                            : '#D83A56',
                        borderRadius: 5,
                        width: wp(25),
                        alignItems: 'center',
                        marginVertical: 5,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-Medium',
                          color: '#fff',
                          opacity: 0.5,
                        }}>
                        {item.status}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('DetailStatus', {
                        idJob : item.id
                      })
                    }>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-ExtraBold',
                        fontSize: 18,
                        marginTop: 10,
                        color: '#125d98',
                      }}>
                      Detail
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    );
  
}

// const mapStateToprops = ({applyList}) => ({
//   applys: applyList,
// });

// export default connect(mapStateToprops, {listMyApply})(Status);

export default Status