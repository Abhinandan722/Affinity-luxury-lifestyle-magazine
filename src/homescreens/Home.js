 import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {Products} from '../products';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomBTN from '../COMPONENTS/customBTN';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import BottomView from '../COMPONENTS/BottomView';
import Card from '../COMPONENTS/Card/card';
import axios, {all} from 'axios';
import RenderHTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';
import MasonryList from '@react-native-seoul/masonry-list';
import Header from '../COMPONENTS/headers/header';
import {getData} from '../API/api';
import Pagination from '@cherry-soft/react-native-basic-pagination';
import { FadeOutDown } from 'react-native-reanimated';

const Home = () => {
  const ttt = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;

  const {width} = useWindowDimensions();
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const [isLoading, setIsLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false); // State to track if all items are loaded
  const [allitem, setAllitem] = useState([]);
  const itemsPerPage = 18; // Define the number of items per page

  useEffect(() => {
    loadMoreData(1);
  }, []);

  const loadMoreData = async (page) => {
    if (isLoading ) return; // Prevent further calls if all data is loaded or already loading
    setIsLoading(true);
    console.log('num', page);

    try {
    
      const result = await getData(`/custom/v1/content?page=${page}`); // Updated API call for pagination
      setAllitem(result);
     
    } catch (error) {
      console.error('Error in All data fetching in home screen:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const handlePageChange = (page) => {
    console.log('Page changed to:', page);
    setCurrentPage(page);
    loadMoreData(page);
  };

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
  };


  const opendrower = () => {
    navigation.openDrawer();
  };
 const handleLastPage = () => {
  const lastPage = Math.ceil(allitem.length / itemsPerPage);
  setCurrentPage(lastPage);
  loadMoreData(lastPage); // Load data for the last page
};

  const handleFirstPage = () => {
    setCurrentPage(1);
    loadMoreData(1); // Load data for the first page
  };

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
          <Header category={'Home'} />
          <View style={{marginTop: hp(2)}}>
            {isLoading && currentPage === 1 ? (
              <ActivityIndicator
                className="h-40"
                size="large"
                color="rgb(199, 167, 112)"
              />
            ) : (
              <FlatList
                scrollEnabled={false}
                data={allitem}
                style={{marginBottom: 15}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <Card
                        item={item}
                        navigationn={() =>
                          navigation.navigate('detialpage', {item})
                        }
                      />
                      <View
                        style={{marginVertical: hp(5)}}
                        className="flex-row justify-around mb-20">
                        <CustomBTN
                          height={3}
                          width={5}
                          image={require('../img/facebook-app-symbol.png')}
                        />
                        <CustomBTN
                          height={3}
                          width={6}
                          image={require('../img/twitter.png')}
                        />
                        <CustomBTN
                          height={3}
                          width={5}
                          image={require('../img/linkedin.png')}
                        />
                        <CustomBTN
                          height={3}
                          width={5}
                          image={require('../img/tumblr.png')}
                        />
                      </View>
                    </View>
                  );
                }}
             
                // Use handleEndReached to call loadMoreData
                ListFooterComponent={
                  isLoading ? (
                    <ActivityIndicator
                      size="large"
                      color="rgb(199, 167, 112)"
                    />
                  ) : null
                }
              />
            )}
          </View>
          <Pagination
              onFirstPagePress={() => console.log("First page button pressed")}
            onLastPagePress={handleLastPage} // Handle last page button press
          totalItems={20}
        
            current={currentPage}
            showLastPageButtons={true}
            onPageChange={(page)=>handlePageChange(page)}
            containerStyle={{
            }}
            buttonStyle={{
              backgroundColor: 'rgb(199, 167, 112)',
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginHorizontal: 5,
              borderRadius: 5,
            }}
            textStyle={{
              color: 'white',
              fontSize: 26,
            }}
            activeButtonStyle={{
              backgroundColor: 'red',
            }}
            activeTextStyle={{
              fontWeight: 'bold',
            }}
          />
          <Image
            style={{
              width: wp(90),
              height: hp(70),
              resizeMode: 'cover',
              marginVertical: hp(8),
            }}
            source={require('../img/MAIN-IMAGE-Affinity-Magazine-April-2024.jpg')}
          />
          <ConnectWithUs />
        </View>
        <BottomView scrollToTop={scrollToTop} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  p: {
    color: 'black',
    opacity: 0.8,
    fontSize: 22,
    lineHeight: hp(3.6),
    letterSpacing: 1,
    marginVertical: hp(1.5),
    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
    fontFamily: 'OpenSans-Regular',
  },
  a: {
    fontWeight: '300',
    color: '#FF3366',
  },
  span: {
    color: 'black',
  },
  mainTextView: {
    position: 'relative',
  },
  mainlogo: {
    height: hp(12),
    width: wp(90),
    resizeMode: 'contain',
  },
  line: {
    height: 0.5,
    width: wp(5),
    backgroundColor: 'rgb(199, 167, 112)',
  },
});

const htmlStyles = {
  p: {
    fontSize: 16,
    color: 'black',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  img: {
    width: '100%',
    height: 'auto',
    resizeMode: 'contain',
  },
};
