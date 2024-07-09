import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Fooddrink = ({Travels, setTravels}) => {
  const navigation=useNavigation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    {label: 'FOOD AND DRINK', value: 'FOOD AND DRINK'},
    {label: 'LATEST NEWS', value: 'LATEST NEWS'},
    {label: 'RECIPES AND TIPS', value: 'RECIPES AND TIPS'},
    {
      label: 'NO-BAKE STRAWBERRY CHEESECAKE',
      value: 'NO-BAKE STRAWBERRY CHEESECAKE',
    },
    {label: 'RESTAURANT REVIEWS', value: 'RESTAURANT REVIEWS'},
    {label: 'COCKTAILS', value: 'COCKTAILS'},
    {label: 'WINE AND SPIRITS', value: 'WINE AND SPIRITS'},
  ]);

  return (
    <View>
      <DropDownPicker
        onSelectItem={item => {
          console.log('....onselected', item.value);
          if (item.value == 'FOOD AND DRINK') {
            navigation.navigate('FoodANDdrink');
          } else if (item.value == 'LATEST NEWS') {
            navigation.navigate('LatestNewsofdrink_food');
          } else if (item.value == 'RECIPES AND TIPS') {
            navigation.navigate('RacipesANDTips');
          } else if (item.value == 'NO-BAKE STRAWBERRY CHEESECAKE') {
            navigation.navigate('No_Bake_cheesecake');
          } else if (item.value == 'RESTAURANT REVIEWS') {
            navigation.navigate('Restaurant_reviews');
          } else if (item.value == 'COCKTAILS') {
            navigation.navigate('Cocktails');
          } else if (item.value == 'WINE AND SPIRITS') {
            navigation.navigate('wineANDspirit');
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
          gap: wp(10),
          width: wp(50),
        }}
        containerProps={{
          style: {
            height: isDropdownOpen === true ? hp(36) : null,
            backgroundColor: '#fff',
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

export default Fooddrink;
