// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
//   ActivityIndicator,
//   useWindowDimensions,
// } from 'react-native';
// import React, {useEffect, useState, useRef} from 'react';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {useNavigation} from '@react-navigation/native';
// import {Products} from '../products';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import CustomBTN from '../COMPONENTS/customBTN';
// import ConnectWithUs from '../COMPONENTS/connectWithUs';
// import BottomView from '../COMPONENTS/BottomView';
// import Card from '../COMPONENTS/Card/card';
// import axios, {all} from 'axios';
// import RenderHTML from 'react-native-render-html';
// import HTMLView from 'react-native-htmlview';

// import Header from '../COMPONENTS/headers/header';
// import { getData } from '../API/api';

// const Home = () => {
//   const {width} = useWindowDimensions();
//   const drawer = createDrawerNavigator();
//   const navigation = useNavigation();
//   const scrollViewRef = useRef(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [homescreendata, setHomescreendata] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [allLoaded, setAllLoaded] = useState(false); // State to track if all items are loaded
//   const [allitem, setAllitem] = useState([]);

//   useEffect(() => {
//     loadMoreData();

//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getData('/posts?page=1'); // Replace '/endpoint' with your API endpoint
//         setAllitem(result);
//         // console.log("datat",result)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         // setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);



//   const htmlContent =`<p>
//     <span 
//     style=\"font-weight: 400,;\"
//     >Escape the hustle and bustle of London and embark on 
//     a journey of tranquillity and rejuvenation at Champneys Spa
//      Resorts. With a legacy of luxury and wellness, Champneys offers
//       the perfect retreat at three stunning locations:
//        </span><i><span style=\"font-weight: 400;\">Tring, Henlow Grange,
//         and Eastwell Manor,</span></i><span style=\"font-weight: 400;\">
//          all within 90 minutes drive of London. </span></p>\n<p><span style=\"font-weight: 400;\">
//           </span><b>Champneys Tring | Hertfordshire</b></p>\n<p><span 
//          style=\"font-weight: 400;\">Set in the rolling Hertfordshire hills, </span>
//          <a href=\"https://www.champneys.com/spa-resorts/tring/\" target=\"_blank\" 
//          rel=\"noopener noreferrer\"><span style=\"font-weight: 400;\">Champneys Tring
//          </span></a><span style=\"font-weight: 400;\"> is a historic manor house 
//          renowned for pioneering and perfecting health and wellbeing treatments since 
//          1925. </span>[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column][vc_single_image 
//           image=&#8221;43298&#8243; img_size=&#8221;full&#8221; alignment=&#8221;center&#8221;]
//           [/vc_column][/vc_row][vc_row][vc_column][vc_column_text]
//           <span style=\"font-weight: 400;\">Surrounded by 170 acres of picturesque 
//           countryside and is hailed as the UK’s first health spa. The iconic destination
//            provides an idyllic setting for a relaxing getaway. Guests can enjoy a range 
//            of world-class spa treatments, state-of-the-art fitness facilities, and delicious, health-conscious cuisine. 
//            </span>[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column]
//            [vc_single_image image=&#8221;43300&#8243; img_size=&#8221;full&#8221; alignment=&#8221;center&#8221;][/vc_column][/vc_row][vc_row][vc_column][vc_column_text]<b>Champneys Henlow Grange | Bedfordshire</b></p>\n<p><span style=\"font-weight: 400;\">Located in the scenic Bedfordshire countryside,
//             </span><a href=\"https://www.champneys.com/spa-resorts/henlow/\" target=\"_blank\" rel=\"noopener noreferrer\"><span style=\"font-weight: 400;\">Champneys Henlow Grange</span></a><span style=\"font-weight: 400;\"> combines historic charm with modern luxury. The Georgian manor house, set on the banks of the River Hiz, offers a serene and sophisticated atmosphere. </span>[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column][vc_single_image image=&#8221;43301&#8243; img_size=&#8221;full&#8221; alignment=&#8221;center&#8221;][/vc_column][/vc_row][vc_row][vc_column][vc_column_text]<span style=\"font-weight: 400;\">With therapeutic treatments available on the spa menu including hydrotherapy pools, saunas, 
//             and expert-led fitness classes, Henlow Grange is ideal for those seeking to rejuvenate their mind, body, and spirit.</span>[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column][vc_single_image image=&#8221;43302&#8243; img_size=&#8221;full&#8221; alignment=&#8221;center&#8221;][/vc_column][/vc_row][vc_row][vc_column][vc_column_text]<b>Champneys Eastwell Manor | Kent</b></p>\n<p><span style=\"font-weight: 400;\">Nestled in the beautiful Kent countryside, </span><a href=\"https://www.champneys.com/hotels/eastwell-manor/\" target=\"_blank\" rel=\"noopener noreferrer\"><span style=\"font-weight: 400;\">Champneys Eastwell Manor</span></a><span style=\"font-weight: 400;\"> is a
//              breathtakingly beautiful estate that promises an unforgettable spa experience. The Neo-Elizabethan manor house exudes
//              elegance and offers a variety of wellness programs tailored to your needs. </span>[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column]
//             [vc_single_image image=&#8221;43303&#8243; img_size=&#8221;full&#8221; alignment=&#8221;center&#8221;][/vc_column][/vc_row][vc_row][vc_column][vc_column_text]<span style=\"font-weight: 400;\">Guests can enjoy exquisite dining, holistic treatments, and invigorating activities in a tranquil, rural setting. Eastwell Manor’s opulent surroundings and exceptional service make it the ideal spot for a luxurious spa break.</span>[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column][vc_single_image image=&#8221;43304&#8243; img_size=&#8221;full&#8221; alignment=&#8221;center&#8221;][/vc_column][/vc_row][vc_row][vc_column][vc_column_text]<span style=\"font-weight: 400;\">Champneys Day Spa packages start from £180 per person.</span>[/vc_column_text][/vc_column][/vc_row]
//      </p>`;
    
  



//   const loadMoreData = () => {
//     if (isLoading || allLoaded) return; // Stop loading if already loading or all items are loaded

//     setIsLoading(true);
//     // Simulating an API call with a timeout
//     setTimeout(() => {
//       const newItems = Products.slice((currentPage - 1) * 5, currentPage * 5);
//       setHomescreendata([...homescreendata, ...newItems]);
//       setCurrentPage(currentPage + 1);

//       if (homescreendata.length + newItems.length >= Products.length) {
//         setAllLoaded(true); // Set allLoaded to true if all items are loaded
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   const scrollToTop = () => {
//     scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
//   };

//   const opendrower = () => {
//     navigation.openDrawer();
//   };

//   return (
//     <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
//       {/* {
//         allitem.map((item)=>{
//           console.log("spacific data",item.content.rendered)        })
//       } */}

//       <View style={{flex: 1, backgroundColor: 'white'}}>
//         <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
//           <Header category={'Home'} />
        
//           <View style={{marginTop: hp(2)}}>
//             <FlatList
//               scrollEnabled={false}
//               data={homescreendata}
//               style={{marginBottom: 15}}
//               keyExtractor={(item, index) => index.toString()}
//               renderItem={({item, index}) => {
//                 return (
//                   <View>
//                     <Card
//                       item={item}
//                       navigationn={() =>
//                         navigation.navigate('detialpage', {item})
//                       }
//                     />

//                     <View
//                       style={{marginVertical: hp(5)}}
//                       className="flex-row justify-around mb-20">
//                       <CustomBTN
//                         height={3}
//                         width={5}
//                         image={require('../img/facebook-app-symbol.png')}
//                       />
//                       <CustomBTN
//                         height={3}
//                         width={6}
//                         image={require('../img/twitter.png')}
//                       />
//                       <CustomBTN
//                         height={3}
//                         width={5}
//                         image={require('../img/linkedin.png')}
//                       />
//                       <CustomBTN
//                         height={3}
//                         width={5}
//                         image={require('../img/tumblr.png')}
//                       />
//                     </View>
//                   </View>
//                 );
//               }}
//               onEndReached={loadMoreData}
//               onEndReachedThreshold={0.5}
//               ListFooterComponent={
//                 isLoading ? (
//                   <ActivityIndicator size="large" color="rgb(199, 167, 112)" />
//                 ) : null
//               }
//             />
//           </View>
        

//           <Image
//             style={{
//               width: wp(90),
//               height: hp(70),
//               resizeMode: 'cover',
//               marginVertical: hp(8),
//             }}
//             source={require('../img/MAIN-IMAGE-Affinity-Magazine-April-2024.jpg')}
//           />
//           <ConnectWithUs />
//         </View>
//         <BottomView scrollToTop={scrollToTop} />
//       </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   a: {
//     fontWeight: '300',
//     color: '#FF3366', // make links coloured pink
//   },
//   span:{
//     color:'black'

//   },
//   mainTextView: {
//     position: 'relative',
//   },
//   mainlogo: {
//     height: hp(12),
//     width: wp(90),
//     resizeMode: 'contain',
//   },
//   line: {
//     height: 0.5,
//     width: wp(5),
//     backgroundColor: 'rgb(199, 167, 112)',
//   },
// });
// const htmlStyles = {
//   p: {
//     fontSize: 16,
//     color: 'black',
//   },
//   h1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   h2: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   img: {
//     width: '100%',
//     height: 'auto',
//     resizeMode: 'contain',
//   },
// };

// // -----+--

// //----------------------- this is next and newer ----------------------------

// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
//   ActivityIndicator,
//   useWindowDimensions,
//   Alert,
// } from 'react-native';
// import React, {useEffect, useState, useRef} from 'react';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {useNavigation} from '@react-navigation/native';
// import {Products} from '../products';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import CustomBTN from '../COMPONENTS/customBTN';
// import ConnectWithUs from '../COMPONENTS/connectWithUs';
// import BottomView from '../COMPONENTS/BottomView';
// import Card from '../COMPONENTS/Card/card';
// import axios, {all} from 'axios';
// import RenderHTML from 'react-native-render-html';
// import HTMLView from 'react-native-htmlview';


// import Header from '../COMPONENTS/headers/header';
// import { getData } from '../API/api';

// const Home = () => {
//   const ttt= `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`
//   const htmlContent = ttt;

//   const {width} = useWindowDimensions();
//   const drawer = createDrawerNavigator();
//   const navigation = useNavigation();
//   const scrollViewRef = useRef(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [homescreendata, setHomescreendata] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [allLoaded, setAllLoaded] = useState(false); // State to track if all items are loaded
//   const [allitem, setAllitem] = useState([]);

//   useEffect(() => {
//     loadMoreData();

//   }, []);

//  const ladd=()=>{
//    isLoading(true);
//  }
 
//   const loadMoreData = async () => {
//    try {
//       const result = await getData(`/wp/v2/posts?page=1`); // Replace '/endpoint' with your API endpoint
//       setAllitem(result);
//     } catch (error) {
//       console.error('Error in All  data fetching in home screen :', error);
//     } finally {

//     }
//   };
//   const scrollToTop = () => {
//     scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
//   };

//   const opendrower = () => {
//     navigation.openDrawer();
//   };

//   return (
//     <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
      

//       <View style={{flex: 1, backgroundColor: 'white'}}>
//         <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
//           <Header category={'Home'} />
//           <HTMLView
//         value={htmlContent}
//         stylesheet={styles}
//       />
        
//           <View style={{marginTop: hp(2)}}>
//             <FlatList
//               scrollEnabled={false}
//               data={allitem}
//               style={{marginBottom: 15}}
//               keyExtractor={(item, index) => index.toString()}
//               renderItem={({item, index}) => {
//                 return (
//                   <View>
                    
//                     {/* <Card
//                       item={item}
//                       navigationn={() =>
//                         navigation.navigate('FashionDetialpage', {item})
//                       }
//                     /> */}
                   

//                     <View
//                       style={{marginVertical: hp(5)}}
//                       className="flex-row justify-around mb-20">
//                       <CustomBTN
//                         height={3}
//                         width={5}
//                         image={require('../img/facebook-app-symbol.png')}
//                       />
//                       <CustomBTN
//                         height={3}
//                         width={6}
//                         image={require('../img/twitter.png')}
//                       />
//                       <CustomBTN
//                         height={3}
//                         width={5}
//                         image={require('../img/linkedin.png')}
//                       />
//                       <CustomBTN
//                         height={3}
//                         width={5}
//                         image={require('../img/tumblr.png')}
//                       />
//                     </View>
//                   </View>
//                 );
//               }}
//               onEndReachedThreshold={0.5}
//            onEndReached={console.log("hiiiii")}
//            ListFooterComponent={
//             isLoading ? (
//               <ActivityIndicator size="large" color="rgb(199, 167, 112)" />
//             ) : null
//           }
//  />
//           </View>
        

//           <Image
//             style={{
//               width: wp(90),
//               height: hp(70),
//               resizeMode: 'cover',
//               marginVertical: hp(8),
//             }}
//             source={require('../img/MAIN-IMAGE-Affinity-Magazine-April-2024.jpg')}
//           />
//           <ConnectWithUs />
//         </View>
//         <BottomView scrollToTop={scrollToTop} />
//       </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   p: {
//     fontSize: 30,
//     color: 'black',
//     alignSelf:'center'
//   },
//   a: {
//     fontWeight: '300',
//     color: '#FF3366', // make links coloured pink
//   },
//   span:{
//     color:'black'

//   },
//   mainTextView: {
//     position: 'relative',
//   },
//   mainlogo: {
//     height: hp(12),
//     width: wp(90),
//     resizeMode: 'contain',
//   },
//   line: {
//     height: 0.5,
//     width: wp(5),
//     backgroundColor: 'rgb(199, 167, 112)',
//   },
// });
// const htmlStyles = {
//   p: {
//     fontSize: 16,
//     color: 'black',
//   },
//   h1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   h2: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   img: {
//     width: '100%',
//     height: 'auto',
//     resizeMode: 'contain',
//   },
// };

// // -----+--
// // -----------------------------------------------------------this is last dance

// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
//   ActivityIndicator,
//   useWindowDimensions,
//   Alert,
// } from 'react-native';
// import React, {useEffect, useState, useRef} from 'react';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {useNavigation} from '@react-navigation/native';
// import {Products} from '../products';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import CustomBTN from '../COMPONENTS/customBTN';
// import ConnectWithUs from '../COMPONENTS/connectWithUs';
// import BottomView from '../COMPONENTS/BottomView';
// import Card from '../COMPONENTS/Card/card';
// import axios, {all} from 'axios';
// import RenderHTML from 'react-native-render-html';
// import HTMLView from 'react-native-htmlview';

// import Header from '../COMPONENTS/headers/header';
// import { getData } from '../API/api';

// const Home = () => {
//   const ttt = `<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;

//   const {width} = useWindowDimensions();
//   const drawer = createDrawerNavigator();
//   const navigation = useNavigation();
//   const scrollViewRef = useRef(null);

//   const [currentPage, setCurrentPage] = useState(1); // State to track the current page
//   const [homescreendata, setHomescreendata] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [allLoaded, setAllLoaded] = useState(false); // State to track if all items are loaded
//   const [allitem, setAllitem] = useState([]);

//   useEffect(() => {
//     loadMoreData();
//     console.log("hiiiiii")
    
//   }, []);

//   const loadMoreData = async () => {
//     if (isLoading || allLoaded) return; // Prevent further calls if all data is loaded or already loading
//     setIsLoading(true);
//     console.log("red");
//     console.log("num", currentPage);

//     try {
//       const result = await getData(`/wp/v2/posts?page=${currentPage}`); // Updated API call for pagination
//       if (result.length > 0) {
//         setAllitem(prevData => [...prevData, ...result]);
//         setCurrentPage(prevPage => prevPage + 1); // Move this inside the successful data fetch block
//       } else {
//         setAllLoaded(true);
//       }
//     } catch (error) {
//       console.error('Error in All data fetching in home screen:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const scrollToTop = () => {
//     scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
//   };

//   const handleEndReached = ({distanceFromEnd}) => {
//     console.log("track distance",distanceFromEnd)
//     if(distanceFromEnd<0 ||isLoading||allLoaded) return;
//       loadMoreData();
    
//   };
//   const opendrower = () => {
//     navigation.openDrawer(); 
//   };

//   return (
//     <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
//       <View style={{flex: 1, backgroundColor: 'white'}}>
//         <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
//           <Header category={'Home'} />
//           <View style={{marginTop: hp(2)}}>
//             {isLoading && currentPage === 1 ? (
//               <ActivityIndicator className="h-40" size="large" color="rgb(199, 167, 112)" />
//             ) : (
//               <FlatList
//        initialNumToRender={5}
//                 scrollEnabled={false}
//                 data={allitem}
//                 style={{marginBottom: 15}}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({item, index}) => {
//                   return (
//                     <View>
//                       <Card
//                         item={item}
//                         navigationn={() =>
//                           navigation.navigate('detialpage', {item})
//                         }
//                       />
//                       <View
//                         style={{marginVertical: hp(5)}}
//                         className="flex-row justify-around mb-20">
//                         <CustomBTN
//                           height={3}
//                           width={5}
//                           image={require('../img/facebook-app-symbol.png')}
//                         />
//                         <CustomBTN
//                           height={3}
//                           width={6}
//                           image={require('../img/twitter.png')}
//                         />
//                         <CustomBTN
//                           height={3}
//                           width={5}
//                           image={require('../img/linkedin.png')}
//                         />
//                         <CustomBTN
//                           height={3}
//                           width={5}
//                           image={require('../img/tumblr.png')}
//                         />
//                       </View>
//                     </View>
//                   );
//                 }}
//                 onEndReachedThreshold={5} // Set this threshold to a value that triggers near the end
//                 onEndReached={handleEndReached}
//                  // Use handleEndReached to call loadMoreData
//                 ListFooterComponent={
//                   isLoading ? (
//                     <ActivityIndicator size="large" color="rgb(199, 167, 112)" />
//                   ) : null
//                 }
//               />
//             )}
//           </View>
//           <Image
//             style={{
//               width: wp(90),
//               height: hp(70),
//               resizeMode: 'cover',
//               marginVertical: hp(8),
//             }}
//             source={require('../img/MAIN-IMAGE-Affinity-Magazine-April-2024.jpg')}
//           />
//           <ConnectWithUs />
//         </View>
//         <BottomView scrollToTop={scrollToTop} />
//       </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   p: {
//     color: 'black',
//     opacity: 0.8,
//     fontSize: 22,
//     lineHeight: hp(3.6),
//     letterSpacing: 1,
//     marginVertical: hp(1.5),
//     fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
//     fontFamily: 'OpenSans-Regular',
//   },
//   a: {
//     fontWeight: '300',
//     color: '#FF3366', // make links coloured pink
//   },
//   span: {
//     color: 'black',
//   },
//   mainTextView: {
//     position: 'relative',
//   },
//   mainlogo: {
//     height: hp(12),
//     width: wp(90),
//     resizeMode: 'contain',
//   },
//   line: {
//     height: 0.5,
//     width: wp(5),
//     backgroundColor: 'rgb(199, 167, 112)',
//   },
// });

// const htmlStyles = {
//   p: {
//     fontSize: 16,
//     color: 'black',
//   },
//   h1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   h2: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   img: {
//     width: '100%',
//     height: 'auto',
//     resizeMode: 'contain',
//   },
// };
// ----------------this is for custom pagination impement try -----------------

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
  
    useEffect(() => {
      loadMoreData();
    }, []);
  
    const loadMoreData = async () => {
      if (isLoading ) return; // Prevent further calls if all data is loaded or already loading
      setIsLoading(true);
      console.log('red');
      console.log('num', currentPage);
  
      try {
        const result = await getData(`/custom/v1/content?page=${currentPage}`); // Updated API call for pagination
        setAllitem(prevData => [...prevData, ...result]);
        setCurrentPage(prevPage => prevPage + 1); // Move this inside the successful data fetch block
      } catch (error) {
        console.error('Error in All data fetching in home screen:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    const scrollToTop = () => {
      scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
    };
    const handleEndReached = () => {
      loadMoreData();
    };
  
    const opendrower = () => {
      navigation.openDrawer();
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
                  onEndReachedThreshold={0.1} // Set this threshold to a value that triggers near the end
                  onEndReached={handleEndReached}
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
  