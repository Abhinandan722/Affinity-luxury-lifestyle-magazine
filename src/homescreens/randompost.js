import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import {getrandom} from '../API/api';

const Randompost = (item) => {
  
  const [allrandom, setAllrandom] = useState([]);
  const [isloader,setIsloader]=useState(false);
  useEffect(() => {
    console.log("id ka data",item.item.id)
    fetchdata();
  }, [item.item.id]);

  const fetchdata = async () => {
    
    try {
      setIsloader(true)
      const result = await getrandom(`/custom/v1/random_post`); // Replace '/endpoint' with your API endpoint
      setAllrandom(result);
      setIsloader(false)
      //  console.log('random data',result);
    } catch (error) {
      console.error('Error in random post data:', error);
    } finally {
      setIsloader(false)
    }
  };

  const navigation = useNavigation();
  return (
    <View>
      <View
        style={styles.randomView}
        className="flex-row items-center  my-2 mb-5 gap-5 justify-center mt-4">
        <View style={styles.lineone} />

        <Text
          className="self-center text-4xl text-black"
          style={{
            fontFamily: 'PlayfairDisplay-Regular',
            letterSpacing: 2,
          }}>
          Randam Posts
        </Text>
        <View style={styles.lineone} />
      </View>
      {/*-------------------- random post contents  ----------------*/}
      {
        isloader?<ActivityIndicator className="h-40" size="large"  color="rgb(199, 167, 112)" />:
    
      <FlatList
        scrollEnabled={false}
        data={allrandom}
        renderItem={({item}) => {
          return (
            <View className="mt-6">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('detialpage', {item})
                }>
                <Image
                  className="h-56"
                  style={{width: 'auto', resizeMode: 'cover'}}
                  source={{uri: `${item.featured_image}`}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 27,
                  fontFamily: 'PlayfairDisplay-Medium',
                }}
                className="mt-3 opacity-80 text-black">
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 21,
                  color: 'rgb(170, 170, 170)',
                  fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                }}
                className="mt-2 text-xl">
                {item.created_date}
              </Text>
            </View>
          );
        }}
      />
    }

      {/* <View>
   
        <View className="mt-6">
         <TouchableOpacity onPress={()=>navigation.navigate('randompost_detail')} >
         <Image
            className=" h-52"
            style={{width: 'auto'}}
           
            source={require('../img/travelReviews111Random.jpg')}
            
         />   
         </TouchableOpacity>
        </View>
    </View> */}
    </View>
  );
};

export default Randompost;

const styles = StyleSheet.create({
  lineone: {
    height: 0.5,
    width: wp(6),
    backgroundColor: 'rgb(170, 170, 170)',
  },
  randomView: {},
});
