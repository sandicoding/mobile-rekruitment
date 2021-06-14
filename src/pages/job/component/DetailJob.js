import React from 'react';
import {View,ImageBackground, Image,Text, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker';


export default class DetailJob extends React.Component {

    render(){
        const fileDocument = async() => {
            try {
                const res = await DocumentPicker.pick({
                    type: [DocumentPicker.types.images],
                });
                console.log(
                    res.uri,
                    res.type, // mime type
                    res.name,
                    res.size,
                );
                } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                    // User cancelled the picker, exit any dialogs or menus and move on
                } else {
                    throw err;
                }
                }

            }
        return (
          <ScrollView vertical showsHorizontalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: '#f8f8f8',
                height: '100%',
                paddingHorizontal: 20,
                }}>
                <ImageBackground
                    source={require('../../../assets/image/dev2.png')}
                    style={{marginLeft: 50, width: '100%', height: 250}}>
                    <View
                    style={{
                        backgroundColor: '#000',
                        height: 30,
                        width: 40,
                        marginLeft: -50,
                        marginTop: 10,
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() =>
                        this.props.navigation.navigate('MainLayout')
                        }>
                        <Image
                        source={require('../../../assets/image/back.png')}
                        style={{width: 25, height: 10}}
                        />
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View
                    style={{
                    backgroundColor: '#FFF',
                    padding: 10,
                    borderRadius: 15,
                    }}>
                    <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <View>
                        <Text
                        style={{
                            fontSize: 18,
                            fontFamily: 'ExtraBold',
                        }}>
                        Software Developer
                        </Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                            style={{
                            fontFamily: 'ExtraBold',
                            color: '#000',
                            opacity: 0.6,
                            fontSize: 14,
                            }}>
                            Parallel
                        </Text>
                        </View>
                    </View>
                    {/* <View
                            style={{
                            backgroundColor: '#DFDFDF',
                            height: 32,
                            width: 32,
                            borderRadius: 5,
                            marginLeft: 50,
                            marginTop: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}>
                            <Image
                            source={require('../../../assets/image/favourite.png')}
                            style={{opacity: 0.5, width: 24, height: 24}}
                            />
                        </View> */}
                    </View>
                    <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: 20,
                        alignItems: 'center',
                    }}>
                    {/* <Image
                            source={require('../../../assets/image/1.jpg')}
                            style={{width: 30, height: 30}}
                        />
                        <Image
                            source={require('../../../assets/image/2.jpg')}
                            style={{width: 30, height: 30}}
                        />
                        <Image
                            source={require('../../../assets/image/3.jpg')}
                            style={{width: 30, height: 30}}
                        />
                        <Image
                            source={require('../../../assets/image/4.jpg')}
                            style={{width: 30, height: 30}}
                        /> */}
                    {/* <Text
                            style={{
                            fontFamily: 'Bold',
                            color: '#B8B8B8',
                            paddingHorizontal: 10,
                            }}>
                            4 Friends Work Here
                        </Text> */}
                    </View>
                </View>

                <View
                    style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    }}>
                    <View
                    style={{
                        backgroundColor: '#FFF',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderRadius: 8,
                        width: 140,
                    }}>
                    <Text
                        style={{
                        fontFamily: 'ExtraBold',
                        color: '#B8B8B8',
                        }}>
                        Experiance
                    </Text>
                    <Text
                        style={{
                        fontFamily: 'ExtraBold',
                        }}>
                        Minimum 2 year
                    </Text>
                    </View>

                    <View
                    style={{
                        backgroundColor: '#FFF',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        marginLeft: 35,
                        borderRadius: 8,
                        width: 140,
                    }}>
                    <Text
                        style={{
                        fontFamily: 'ExtraBold',
                        color: '#B8B8B8',
                        }}>
                        Type
                    </Text>
                    <Text
                        style={{
                        fontFamily: 'ExtraBold',
                        }}>
                        Full Time
                    </Text>
                    </View>
                </View>
                <View
                    style={{
                    backgroundColor: '#FFF',
                    borderRadius: 15,
                    padding: 20,
                    marginTop: 20,
                    }}>
                    <Text
                    style={{
                        fontFamily: 'ExtraBold',
                        fontSize: 20,
                        marginBottom: 10,
                    }}>
                    Job Description
                    </Text>
                    <Text
                    style={{
                        fontFamily: 'SemiBold',
                        color: '#B2B2B2',
                    }}>
                    Amet minim mollit non deserunt ulliamco est sit aliqua dolor
                    do amet sit. Vellit officoa consequat duis enim velit mollit.
                    Extertation venoima consequat sunt notserud amet.
                    </Text>
                    <Text
                    style={{
                        fontFamily: 'Montserrat-ExtraBold',
                        marginVertical: 20,
                        fontSize: 15,
                    }}>
                    Upload cv
                    </Text>
                    <TouchableOpacity
                    style={{
                        fontFamily: 'Montserrat-Bold',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={fileDocument}>
                    <Icon name="upload" color="#FF6347" size={25} />
                    <Text>Upload</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                    width: '100%',
                    alignItems: 'flex-end',
                    }}>
                    <View
                    style={{
                        backgroundColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 90,
                        height: 55,
                        marginTop: 30,
                        borderRadius: 15,
                        padding: 10,
                    }}>
                    <Image
                        source={require('../../../assets/image/for.png')}
                        style={{width: 30}}
                    />
                    <Text
                        style={{
                        color: '#FFF',
                        fontFamily: 'Regular',
                        }}>
                        Apply
                    </Text>
                    </View>
                </View>
                </View>
            </ScrollView>
        );
    }
}