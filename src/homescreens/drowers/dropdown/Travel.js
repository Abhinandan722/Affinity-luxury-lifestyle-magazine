import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const Travel = ({Travels, setTravels}) => {
  const navigation = useNavigation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    {label: 'TRAVEL', value: 'TRAVEL'},
    {label: 'TRAVEL DESTINATIONS', value: 'TRAVEL DESTINATIONS'},
    {label: 'TRAVEL REVIEWS', value: 'TRAVEL REVIEWS'},
    {
      label: "'THE FELLOWS HOUSE – A CULTIVATED RETREAT'",
      value: "'THE FELLOWS HOUSE – A CULTIVATED RETREAT'",
    },
    {label: 'LATEST TRAVEL NEWS', value: 'LATEST TRAVEL NEWS'},
    {
      label: "'CELEBRATING A MONTH OF LOVE AT SHANGRI-LA THE SHARD, LONDON'",
      value: "'CELEBRATING A MONTH OF LOVE AT SHANGRI-LA THE SHARD, LONDON'",
    },
    {label: 'MINI BREAKS', value: 'MINI BREAKS'},
    {label: 'CRUISES', value: 'CRUISES'},
  ]);
  const [firstLoad, setFirstLoad] = useState(true); // Add state for first load
  //CelevratingMonth_Lndon
  
  // useEffect(() => {
  //   if (firstLoad) {
  //     setFirstLoad(false);
  //   } else {
  //     if (isDropdownOpen == false) {
  //       if (Travels == 'TRAVEL DESTINATIONS') {
  //         navigation.navigate('TravelANDdestinations');
  //       } else if (Travels == 'TRAVEL') {
  //         navigation.navigate('Travel');
  //       } else if (Travels == 'TRAVEL REVIEWS') {
  //         navigation.navigate('TravelAndReviews');
  //       } else if (Travels == "'THE FELLOWS HOUSE – A CULTIVATED RETREAT'") {
  //         navigation.navigate('The_fellows_house');
  //       } else if (Travels == 'LATEST TRAVEL NEWS') {
  //         navigation.navigate('LatestTravelNews');
  //       } else if (
  //         Travels ==
  //         "'CELEBRATING A MONTH OF LOVE AT SHANGRI-LA THE SHARD, LONDON'"
  //       ) {
  //         navigation.navigate('CelevratingMonth_Lndon');
  //       } else if (Travels == 'MINI BREAKS') {
  //         navigation.navigate('MiniBreaks');
  //       } else if (Travels == 'CRUISES') {
  //         navigation.navigate('cruises');
  //       }
  //     }
  //   }
  // }, [isDropdownOpen, Travels]);

  return (
    <View>
      <DropDownPicker

onSelectItem={item => {
  console.log('....onselected', item.value);
  if (item.value == 'TRAVEL DESTINATIONS') {
    navigation.navigate('TravelANDdestinations');
  } else if (item.value == 'TRAVEL') {
    navigation.navigate('Travel');
  } else if (item.value == 'TRAVEL REVIEWS') {
    navigation.navigate('TravelAndReviews');
  } else if (item.value == "'THE FELLOWS HOUSE – A CULTIVATED RETREAT'") {
    navigation.navigate('The_fellows_house');
  } else if (item.value == 'LATEST TRAVEL NEWS') {
    navigation.navigate('LatestTravelNews');
  } else if (
    item.value ==
    "'CELEBRATING A MONTH OF LOVE AT SHANGRI-LA THE SHARD, LONDON'"
  ) {
    navigation.navigate('CelevratingMonth_Lndon');
  } else if (item.value == 'MINI BREAKS') {
    navigation.navigate('MiniBreaks');
  } else if (item.value == 'CRUISES') {
    navigation.navigate('cruises');
  }
  
 
}}

        listItemContainerStyle={{
          height: 'auto',
          marginVertical: 5,
        }}
        dropDownContainerStyle={{
          borderWidth: 0,
          shadowColor: '#000',
        }}
        containerStyle={{
          borderWidth: 0, // Hide the container border
          justifyContent: 'flex-end',
          gap: wp(15),
        }}
        containerProps={{
          style: {
            height: isDropdownOpen === true ? hp(35) : null,
          },
        }}
        style={{
          width: '100%',
          borderWidth: 0,
          marginVertical: 0,
          marginHorizontal: 0,
          paddingVertical: 0,
          paddingHorizontal: 0,
          justifyContent: 'space-between',
          gap: wp(2),
        }}
        labelStyle={{
          flex: 0,
          fontWeight: 600,
          fontSize: 18,
          fontFamily: 'Oswald-Regular',
          letterSpacing: 2,
          color: isDropdownOpen ? 'rgb(199,167,112)' : 'black',
          opacity: 0.9,
        }}
        itemStyle={{
          fontSize: 18,
        }}
        textStyle={{
          width: 200,
          fontSize: 18,
          fontFamily: 'Oswald-Regular',
          letterSpacing: 2,
          color: 'black',
          opacity: 0.9,
        }}
        open={isDropdownOpen}
        setOpen={setIsDropdownOpen}
        items={dropdownItems}
        setItems={setDropdownItems}
        value={Travels}
        setValue={setTravels}
      />
    </View>
  );
};

export default Travel;
