import {StyleSheet, Text, View, TouchableOpacity, Alert,FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Divider} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomBTN from './customBTN';
import {useNavigation} from '@react-navigation/native';
import {getrecentpost} from '../API/api';
import Affinity_img from './affinity_main_img/affinity_img';

const ConnectWithUs = () => {
  const navigation = useNavigation();
  const [allrecentdata, setAllrecentdata] = useState([]);
  const [isloader, setIsloader] = useState(false);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    setIsloader(true);
    try {
      const result = await getrecentpost('/custom/v1/content');
      setAllrecentdata(result);
     
      setIsloader(false);
    } catch (error) {
      console.log('error in recent data', error);
    } finally {
      setIsloader(false);
    }
  };


  return (
    <View className="">

      <Affinity_img />


      
      <Text
        className="self-center text-2xl text-black"
        style={{fontFamily: 'PlayfairDisplay-Regular', letterSpacing: 2}}>
        CONNECT WITH US
      </Text>
      <View
        style={{flexDirection: 'row', gap: wp(4)}}
        className="my-3  self-center mb-20">
        <CustomBTN
          height={3}
          width={5}
          image={require('../img/facebook-app-symbol.png')}
          tintColor={'white'}
          borderColor={'rgb(30,114,189)'}
          backgroundColor={'rgb(30,114,189)'}
          url={'https://www.facebook.com/AffinityMag'}
        />
        <CustomBTN
          height={3}
          width={6}
          image={require('../img/twitter.png')}
          tintColor={'white'}
          borderColor={'rgb(30,114,189)'}
          backgroundColor={'rgb(30,114,189)'}
          url={'https://x.com/i/flow/login?redirect_after_login=%2Faffinitymagz'}
        />
        <CustomBTN
          height={3}
          width={6}
          image={require('../img/instagram-logo.png')}
          tintColor={'white'}
          borderColor={'rgb(30,114,189)'}
          backgroundColor={'rgb(30,114,189)'}
          url={'https://www.instagram.com/affinitymagz/'}
        />
      </View>

      <View style={styles.recentpostView}>
        <View style={{gap: wp(5)}} className="flex-row items-center  my-2 mb-5">
          <View style={styles.lineone} />

          <Text
            className="self-center text-2xl text-black"
            style={{
              fontFamily: 'PlayfairDisplay-Regular',
              letterSpacing: 2,
            }}>
            RECENT POST
          </Text>

          <View style={styles.lineone} />
        </View>
    {
      isloader?<ActivityIndicator 
      className="h-40" size="large"  
      color="rgb(199, 167, 112)"/> :
       <FlatList 
        scrollEnabled={false}

        data={allrecentdata}
        keyExtractor={(item, index) => index.toString()}  
        renderItem={({item,index})=>{
          // console.log("this is recent data",item.title)

          return(
            <View>

       <TouchableOpacity onPress={()=> navigation.navigate('detialpage',{item })
      }
        >
          <Text className=" text-xl" style={[styles.recentposttext,{width:wp(85)}]}>
         {item.title}
          </Text>
        </TouchableOpacity>
        <Divider style={{width: wp(85), height: 1}} />
            </View>
          )
        }}
        />
      }

      </View>
   
    </View>
  );
};

export default ConnectWithUs;

const styles = StyleSheet.create({
  recentposttext: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 21.5,
    color: 'rgba(130,130,130,1)',
    color: 'black',
    opacity: 0.8,
    lineHeight: hp(8),
    width: wp(90),
  },
  lineone: {
    height: 2, // Adjust the height as needed
    width: wp(10), // Width of the line
    backgroundColor: 'rgb(170, 170, 170)', // Color of the line
  },
  recentpostView: {
    marginBottom: hp(5),
  },
});
