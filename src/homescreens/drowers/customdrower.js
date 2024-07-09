import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FashionandBeauty from './dropdown/fashion&beauty';
import Travel from './dropdown/Travel';
import Lifestyle from './dropdown/Lifestyle';
import Fooddrink from './dropdown/FoodDrink';
import Inspiration from './dropdown/Inspiration';
import Contact from './dropdown/Contact';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const [FashionBeauty, setFashionBeauty] = useState('FASHION AND BEAUTY');
  const [Travels, setTravels] = useState('TRAVEL');
  const [lifestyle, setLifestyle] = useState('LIFESTYLE');
  const [fooddrink, setFooddrink] = useState('FOOD AND DRINK');
  const [inspiration, setInspiration] = useState('INSPIRATION');
  const [contact, setContact] = useState('CONTACT');

  return (
    
    <View style={styles.container} className="pt-3">
      <Text
        onPress={() => navigation.navigate('home')}
        style={styles.text}
        className="text-xl ">
        HOME
      </Text>
      <FashionandBeauty
        FashionBeauty={FashionBeauty}
        setFashionBeauty={setFashionBeauty}
      />

      <Travel Travels={Travels} setTravels={setTravels} />
      <Lifestyle Travels={lifestyle} setTravels={setLifestyle} />
      <Fooddrink Travels={fooddrink} setTravels={setFooddrink} />
      <Text style={styles.text} className="text-xl my-3 " 
       onPress={()=>navigation.navigate('compatitions')}
       >
        COMPATITIONS
      </Text>
      <Inspiration Travels={inspiration} setTravels={setInspiration} />
      <Contact Travels={contact} setTravels={setContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  text: {
    fontFamily: 'Oswald-Regular',
    letterSpacing: 2,
    color: 'black',
    opacity: 0.9,
  },
});

export default CustomDrawer;
