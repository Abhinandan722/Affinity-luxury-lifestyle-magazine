import React, { useState } from "react";
import { View ,StyleSheet, Alert} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {widthPercentageToDP as wp,
    heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import { useNavigation } from "@react-navigation/native";
const Inspiration = ({Travels, setTravels}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    { label: "INSPIRATION", value: "INSPIRATION" },
    { label: "LATEST NEWS", value: "LATEST NEWS" },
   // {label: "VALENTINE’S DAY GIFT IDEAS FOR 2022", value: "VALENTINE’S DAY GIFT IDEAS FOR 2022"}
  
  ]);
  const navigation=useNavigation();

  return (
    <View>
    <DropDownPicker
      onSelectItem={(item)=>{
        if(item.value=="INSPIRATION"){
       navigation.navigate("Inspiration")
        }else if(item.value=="LATEST NEWS"){
          navigation.navigate("Inspiration_latestnews")
        }else if(item.value=="VALENTINE’S DAY GIFT IDEAS FOR 2022"){
          navigation.navigate("Valentine_day_gift")
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
          height: isDropdownOpen === true ? hp(18) : null,
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

const styles = StyleSheet.create({
  // container: {
  //   position: 'relative', // Add relative positioning to the container
  //   zIndex: 1, // Ensure the container is above other elements
  // },
});

export default Inspiration;
