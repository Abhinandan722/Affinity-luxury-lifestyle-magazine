import React, {useEffect, useState} from 'react';
import {View, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const FashionandBeauty = ({FashionBeauty, setFashionBeauty}) => {
  const navigation = useNavigation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([
    {label: 'FASHION AND BEAUTY', value: 'FASHION AND BEAUTY'},
    {label: 'FASHION', value: 'FASHION'},
    {label: 'BEAUTY', value: 'BEAUTY'},
    {label: 'HAIR', value: 'HAIR'},
    {label: 'TREATMENTS', value: 'TREATMENTS'},
    {label: 'MEN’S GROOMING', value: 'MEN’S GROOMING'},
  ]);
  const [firstLoad, setFirstLoad] = useState(true); // Add state for first load

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false); // Set firstLoad to false after initial load
    }
  }, [FashionBeauty]);

  // useEffect(()=>{
  //   if(firstLoad){
  //     setFirstLoad(false);

  //   }
  //   else{
  //     if(isDropdownOpen==false){
  //       if(FashionBeauty=='FASHION')
  //        {
  //         navigation.navigate('fashion')
  //        }
  //        else if (FashionBeauty === 'FASHION AND BEAUTY') {
  //         navigation.navigate('fashion&beauty');
  //       } else if (FashionBeauty === 'BEAUTY') {
  //         navigation.navigate('beauty');
  //       } else if (FashionBeauty === 'HEAR') {
  //         navigation.navigate('hear');
  //       } else if (FashionBeauty === 'TREATMENTS') {
  //         navigation.navigate('treatments');
  //       } else if(FashionBeauty=='MEN’S GROOMING'){
  //        navigation.navigate('MENSGROOMING')
  //       }
         
         
  //     } 
      
  //   }
  //   console.log("...," ,isDropdownOpen)
 
  // },[isDropdownOpen])

  return (
    <View>
      <DropDownPicker

onSelectItem={(item) => {
  console.log("fashion and beauty",item.value);
  navigation.navigate('home',{categories:item.value})
  // if(item.value=='FASHION')
  //   {
  //    navigation.navigate('fashion')
  //   }
  //   else if (item.value === 'FASHION AND BEAUTY') {
  //    navigation.navigate('home',{categories:item.value});
  //  } else if (item.value === 'BEAUTY') {
  //    navigation.navigate('beauty');
  //  } else if (item.value === 'HEAR') {
  //    navigation.navigate('hear');
  //  } else if (item.value === 'TREATMENTS') {
  //    navigation.navigate('treatments');
  //  } else if(item.value=='MEN’S GROOMING'){
  //   navigation.navigate('MENSGROOMING')
  //  }

}}
        dropDownContainerStyle={{
          borderWidth: 0,

          shadowColor: '#000',
        }}
        containerStyle={{
          borderWidth: 0,
          justifyContent: 'flex-end',
          gap: wp(10),
          width: wp(50),
          
        }}
        containerProps={{
          style: {
            height: isDropdownOpen === true ? hp(33) : null,
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
        
        value={FashionBeauty}
        setValue={setFashionBeauty}
      />
    </View>
  );
};

export default FashionandBeauty;
