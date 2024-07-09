import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Contact = ({Travels, setTravels}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    {label: 'CONTACT', value: 'CONTACT'},
    {label: 'ADVERTISE', value: 'ADVERTISE'},
  ]);
  const navigation=useNavigation();

  return (
    <View>
    <DropDownPicker
    onSelectItem={item => {
      console.log('....onselected', item.value);
      if (item.value == 'CONTACT') {
        navigation.navigate('Contacts');
      } else if (item.value == 'ADVERTISE') {
        navigation.navigate('Advertise');
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
    justifyContent: "flex-end",
    gap: wp(10),
    width:wp(50),
  


  }}
  //this is  maintain the gap between label and icon if 
  //this functon empty still work for gap
  containerProps={{
    style: {
      height: isDropdownOpen === true ? 150 : null,
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
      gap:wp(2),

  
      

    }}
    labelStyle={{
      flex: 0,
      fontWeight: 600,
      fontSize: 18,
      fontFamily:"Oswald-Regular",
      letterSpacing:2,
      color: isDropdownOpen ?'rgb(199,167,112)':'black',
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
const styles = StyleSheet.create({});

export default Contact;
