import React, {useEffect, useState} from 'react';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {View, Text, Image, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {listJobs} from '../../config/redux/action/JobAction';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {List} from '../../Loader';
import SearchInput, {createFilter} from 'react-native-search-filter';
import AsyncStorage from '@react-native-async-storage/async-storage';
const KEYS_TO_FILTERS = ['name', 'subject'];

const Home = props => {
  const state = useSelector(state => state);
  const [cariNama, setCariNama] = useState('');
  const [name, setName] = useState();

  const {auth} = state;

  // const {name} = auth?.dataUser;
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const jobList = useSelector(state => state.jobsList);

  const {loading, error, jobs} = jobList;

  const cariUpdate = data => {
    setCariNama(data);
  };

  // useFocusEffect(

  //   React.useCallback(() => {
  //     dispatch(listJobs());

  //   },[dispatch,listJobs])
  // );
  const isFocused = useIsFocused();

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // Prevent default behavior

      dispatch(listJobs());
      const check = async () => {
        const user = await AsyncStorage.getItem('user');
        const data = JSON.parse(user);

        setName(data.name);
      };

      check();
    });

    return unsubscribe;
    // if(isFocused){
    // dispatch(listJobs());
    // }
  }, [dispatch, isFocused]);

  const cariDataNama = jobs?.filter(createFilter(cariNama, KEYS_TO_FILTERS));

  return (
    <ScrollView
      style={{
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: '#B0B0B0',
          marginTop: 40,
          fontFamily: 'Montserrat-Bold',
        }}
      >
        Hello, {name}
      </Text>

      <Text
        style={{
          fontFamily: 'Montserrat-ExtraBold',
          fontSize: 18,
          marginTop: 13,
        }}
      >
        Temukan Pekerjaan Terbaikmu !
      </Text>

      <View
        style={{
          backgroundColor: '#FFF',
          borderRadius: 5,
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          placeholder="Cari disini"
          placeholderTextColor="#B0B0B0"
          onChangeText={data => {
            cariUpdate(data);
          }}
          style={{
            fontFamily: 'Montserrat-Medium',
            paddingHorizontal: 20,
            width: wp(75),
          }}
        />
        <View
          style={{
            backgroundColor: '#000000',
            width: wp(10),
            height: hp(5),
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={require('../../assets/image/searc.png')} />
        </View>
      </View>

      <Text
        style={{
          fontFamily: 'Montserrat-ExtraBold',
          marginVertical: 20,
          fontSize: 15,
        }}
      >
        Lowongan Tersedia
      </Text>
      {loading ? (
        <List />
      ) : (
        cariDataNama?.map(item => (
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
            }}
          >
            <View
              style={{
                backgroundColor: '#DFDFDF',
                borderRadius: 5,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
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
              }}
            >
              <View
                style={{
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Montserrat-ExtraBold',
                    fontSize: 13,
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    backgroundColor: '#DFDFDF',
                    borderRadius: 5,
                    width: 70,
                    alignItems: 'center',
                    marginVertical: 5,
                  }}
                >
                  <Text
                    style={{fontFamily: 'Medium', color: '#000', opacity: 0.5}}
                  >
                    {item.type}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('DetailJob', {
                    idJob: item.id,
                  })
                }
              >
                <Text
                  style={{
                    fontFamily: 'Montserrat-ExtraBold',
                    fontSize: 18,
                    marginTop: 10,
                    color: '#125d98',
                  }}
                >
                  Detail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

// const mapStateToprops = ({jobsList}) => ({
//   jobs: jobsList,
//   loading : jobsList.loading
// });

// export default connect(mapStateToprops, {listJobs})(Home);

export default Home;
