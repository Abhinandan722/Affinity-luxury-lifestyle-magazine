import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
const Lifestyle = ({Travels, setTravels}) => {
  const navigation = useNavigation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    {label: 'LIFESTYLE', value: 'LIFESTYLE'},
    {label: 'HEALTH AND WELLBEING', value: 'HEALTH AND WELLBEING'},
    {label: 'LEARNING NOT TO SETTLE', value: 'LEARNING NOT TO SETTLE'},
    {label: 'INTERIORS', value: 'INTERIORS'},
    {label: 'MEN AND MOTORS', value: 'MEN AND MOTORS'},
    {label: 'ENTERTAINMENT', value: 'ENTERTAINMENT'},
    {
      label: "'JERSEY BOYS ARE BEGGIN’ TO ENTERTAIN US'",
      value: "'JERSEY BOYS ARE BEGGIN’ TO ENTERTAIN US'",
    },
    {
      label: "'TOM JONES COMES TO AUDLEY END HOUSE & GARDENS'",
      value: "'TOM JONES COMES TO AUDLEY END HOUSE & GARDENS'",
    },
    {label: 'LATEST NEWS', value: 'LATEST NEWS'},
    {label: 'CHRISTMAS', value: 'CHRISTMAS'},
  ]);


  return (
    <View>
      <DropDownPicker
        hideSelectedItemIcon={true}
        onSelectItem={item => {
          console.log('....onselected', item.value);
          if (item.value == 'LIFESTYLE') {
            navigation.navigate('Lifestyle');
          } else if (item.value == 'HEALTH AND WELLBEING') {
            navigation.navigate('Healthandwellbeing');
          } else if (item.value == 'LEARNING NOT TO SETTLE') {
            navigation.navigate('LearningNotToSettle');
          } else if (item.value == 'INTERIORS') {
            navigation.navigate('Interiors');
          } else if (item.value == 'MEN AND MOTORS') {
            navigation.navigate('MenandMotors');
          } else if (item.value == 'ENTERTAINMENT') {
            navigation.navigate('Entertainment');
          } else if (
            item.value == "'JERSEY BOYS ARE BEGGIN’ TO ENTERTAIN US'"
          ) {
            navigation.navigate('JerseyBoysAreBeggin');
          } else if (
            item.value == "'TOM JONES COMES TO AUDLEY END HOUSE & GARDENS'"
          ) {
            navigation.navigate('TomJones_comes_gardens');
          } else if (item.value == 'LATEST NEWS') {
            navigation.navigate('LatestNews');
          } else if (item.value == 'CHRISTMAS') {
            navigation.navigate('Cristmas');
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
          gap: wp(18),
        }}
        containerProps={{
          style: {
            height: isDropdownOpen === true ? hp(38) : null,
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

export default Lifestyle;
