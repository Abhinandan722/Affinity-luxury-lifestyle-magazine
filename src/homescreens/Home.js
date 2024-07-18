import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation, useRoute} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import BottomView from '../COMPONENTS/BottomView';
import Card from '../COMPONENTS/Card/card';
import RenderHTML from 'react-native-render-html';
import Header from '../COMPONENTS/headers/header';
import {getData} from '../API/api';
import Animated, {
  FadeInDown,
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';
import Mybuttons from '../COMPONENTS/buttons';
import Paginationss from '../COMPONENTS/pagination/pagination';

const Home = () => {
  const route = useRoute();
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);
  const scrollViewRef = useAnimatedRef();
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const [isLoading, setIsLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false); // State to track if all items are loaded
  const [allitem, setAllitem] = useState([]);
  const [totalepage_count, setTotalepage_count] = useState();
  const itemsPerPage = 18;

  const category = route.params?.categories;
  // console.log('get this name category', category);

  useEffect(() => {
   // setCurrentPage(1); // Reset to first page on category change
    loadMoreData(1);
  }, [category]);
  const loadMoreData = async page => {
    if (isLoading) return; // Prevent further calls if all data is loaded or already loading
    setIsLoading(true);
    console.log('num', page);

    try {
      const result = 
      await getData(`/custom/v1/content?${category ? `categories=${category}&page=${page}` : `page=${page}`
        }`,
      );
      
      setTotalepage_count(result.headers['x-wp-totalpages']);
      setAllitem(result.data);

      scrollToTop();
    } catch (error) {
      console.error('Error in All data fetching in home screen:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = page => {
    console.log('page changer number come from paginations:', page);
    setCurrentPage(page);
    loadMoreData(page);
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const opendrower = () => {
    navigation.openDrawer();
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  };

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onScroll={scrollHandler}
      scrollEventThrottle={10} // Adjust as needed
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
          <Header category={category ? category : 'Home'} />
          <View style={{marginTop: hp(2)}}>
            {category && isLoading && currentPage === 1 ? (
              <ActivityIndicator
                style={{height: hp(50)}}
                size="large"
                color="rgb(199, 167, 112)"
              />
            ) : allitem.length === 0 && !isLoading ? (
              <View>
                <Text
                  className="text-6xl  my-10"
                  style={{
                    alignItems: 'center',
                    color: 'black',
                    lineHeight: hp(10),
                    fontFamily: 'PlayfairDisplay-Medium',
                    textAlign: 'center',
                  }}>
                  No Post Were Found!
                </Text>
              </View>
            ) : (
              <FlatList
                scrollEnabled={false}
                data={allitem}
                style={{marginBottom: 15}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                  return (
                    <Animated.View
                      entering={FadeInDown.delay(index * 100)
                        .duration(600)
                        .springify()
                        .damping(20)}>
                      <Card
                        item={item}
                        navigationn={() =>
                          navigation.navigate('detialpage', {item})
                        }
                      />
                      <Mybuttons />
                    </Animated.View>
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
          {allitem.length > 0 && !isLoading && (
            <Paginationss
              onPageChange={handlePageChange}
              totalpage_count={totalepage_count}
            />
          )}

          {/* -------------------------------------custom pagination */}

          <Animated.View entering={FadeInDown.duration(800)}>
            <ConnectWithUs />
          </Animated.View>
        </View>

        <BottomView scrollToTop={scrollToTop} />
      </View>
    </Animated.ScrollView>
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
