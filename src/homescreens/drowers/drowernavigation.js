import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Customdrower from './customdrower';
import Home from '../Home';
import Fashion$beauty from '../../Fashion&Beauty/fashion$beauty';
import Fashion from '../../Fashion&Beauty/fashion';
import Beauty from '../../Fashion&Beauty/beauty';
import Hear from '../../Fashion&Beauty/hear';
import Treatment from '../../Fashion&Beauty/treatment';
import FashionBEAUTYDETIALPAGE from '../../Fashion&Beauty/fashionBEAUTYDETIALPAGE';
import MensGROOMING from '../../Fashion&Beauty/mensGROOMING';
import Travel from '../../travels/travel';
import TravelANDdestinations from '../../travels/travel&destinations';
import TravelAndReviews from '../../travels/travel&Reviews';
import LatestTravelNews from '../../travels/latestTravelNews';
import MiniBreaks from '../../travels/MiniBreaks';
import Cruises from '../../travels/Cruises';
import Competitions from '../../competitions/competitions';
import The_fellows_house from '../../travels/the_fellows_house';
import CelevratingMonth_Lndon from '../../travels/celevratingMonth_Lndon';
import Lifestyle from '../../lifestyle/lifestyle';
import Healthandwellbeing from '../../lifestyle/healthandwellbeing';
import LearningNotToSettle from '../../lifestyle/learningNotToSettle';
import Interiors from '../../lifestyle/interiors';
import MenandMotors from '../../lifestyle/menandMotors';
import Entertainment from '../../lifestyle/entairtenment';
import JerseyBoysAreBeggin from '../../lifestyle/jerseyBoysAreBeggin';
import TomJones_comes_gardens from '../../lifestyle/tomJones_comes&gardens';
import LatestNews from '../../lifestyle/latestNews';
import Cristmas from '../../lifestyle/cristmas';
import FoodANDdrink from '../../food&drink/food&drink';

import RacipesANDTips from '../../food&drink/racipesANDTips';
import No_Bake_cheesecake from '../../food&drink/no-Bake-cheesecake';
import Restaurant_reviews from '../../food&drink/restaurant_reviews';
import Cocktails from '../../food&drink/cocktails';
import LatestNewsofdrink_food from '../../food&drink/LatestNewsofdrink_food';
import WineANDspirit from '../../food&drink/wineANDspirit';
import Inspiration from '../../inspiration/inspiration';
import Inspiration_latestnews from '../../inspiration/inspiration_latestnews';
import Valentine_day_gift from '../../inspiration/valentine_day_gift';
import Contacts from '../../contacts/contacts';
import Advertise from '../../contacts/advertise';
import Randomthree from '../../COMPONENTS/randomthree';
import Randomtwo from '../../COMPONENTS/randomtwo';
import Randompost_Detail from '../randompost_Detail';
import Prev_Newer from '../../COMPONENTS/prev_Newer';
import PreviewsDetial from '../../COMPONENTS/previewsDetial';
import NewerDetial from '../../COMPONENTS/newerDetial';

import Escape_city_summerr from '../../RECENT_POST/escape_city_summerr';
import FashionDetialpage from '../../Fashion&Beauty/fashionDetialpage';
import An_Italian_Film_Weekend from '../../RECENT_POST/An_Italian_Film_Weekend';
import Almanac_Barcelona_launches from '../../RECENT_POST/Almanac_Barcelona_launches';
import The_Whispering_Angel_Terrace from '../../RECENT_POST/The_Whispering_Angel_Terrace';
import Opulence_In_The_Clifftops from '../../RECENT_POST/Opulence_In_The_Clifftops';
import Header from '../../COMPONENTS/headers/header';
import Detialpage from '../detialpage';


const Drowernavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={props => <Customdrower {...props} />}>
        <Drawer.Screen name="home" component={Home} />

        {/* ------------ fashion and beauty drower  start--------------------- */}
        <Drawer.Screen name="fashion&beauty" component={Fashion$beauty} />
        <Drawer.Screen component={Fashion} name="fashion" />
        <Drawer.Screen component={Beauty} name="beauty" />
        <Drawer.Screen component={Hear} name="hear" />
        <Drawer.Screen component={Treatment} name="treatments" />

        <Drawer.Screen
          component={FashionBEAUTYDETIALPAGE}
          name="FashionBEAUTYDETIALPAGE"
        />
        <Drawer.Screen component={MensGROOMING} name="MENSGROOMING" />
        {/* ------------ fashion and beauty drower end  --------------------- */}

        {/* ------------ TRAVEL start -------------------------------------- */}

        <Drawer.Screen component={Travel} name="Travel" />
        <Drawer.Screen
          component={TravelANDdestinations}
          name="TravelANDdestinations"
        />
        <Drawer.Screen component={TravelAndReviews} name="TravelAndReviews" />
        <Drawer.Screen component={LatestTravelNews} name="LatestTravelNews" />
        <Drawer.Screen component={MiniBreaks} name="MiniBreaks" />
        <Drawer.Screen component={Cruises} name="cruises" />
        <Drawer.Screen component={The_fellows_house} name="The_fellows_house" />
        <Drawer.Screen
          component={CelevratingMonth_Lndon}
          name="CelevratingMonth_Lndon"
        />
        {/* ------------ TRAVEL end   ----------------------------------- */}
        {/* ------------ lifestyle start -------------------------------------- */}

        <Drawer.Screen component={Lifestyle} name="Lifestyle" />
        <Drawer.Screen
          component={Healthandwellbeing}
          name="Healthandwellbeing"
        />
        <Drawer.Screen
          component={LearningNotToSettle}
          name="LearningNotToSettle"
        />
        <Drawer.Screen component={Interiors} name="Interiors" />
        <Drawer.Screen component={MenandMotors} name="MenandMotors" />
        <Drawer.Screen component={Entertainment} name="Entertainment" />
        <Drawer.Screen
          component={JerseyBoysAreBeggin}
          name="JerseyBoysAreBeggin"
        />

        <Drawer.Screen
          component={TomJones_comes_gardens}
          name="TomJones_comes_gardens"
        />
        <Drawer.Screen component={LatestNews} name="LatestNews" />
        <Drawer.Screen component={Cristmas} name="Cristmas" />
        {/* ------------ life style end   ----------------------------------- */}

        <Drawer.Screen component={Competitions} name="compatitions" />

        {/* ------------ food and drink start -------------------------------------- */}

        <Drawer.Screen component={FoodANDdrink} name="FoodANDdrink" />
        <Drawer.Screen
          component={LatestNewsofdrink_food}
          name="LatestNewsofdrink_food"
        />
        <Drawer.Screen component={RacipesANDTips} name="RacipesANDTips" />
        <Drawer.Screen
          component={No_Bake_cheesecake}
          name="No_Bake_cheesecake"
        />
        <Drawer.Screen
          component={Restaurant_reviews}
          name="Restaurant_reviews"
        />
        <Drawer.Screen component={Cocktails} name="Cocktails" />
        <Drawer.Screen component={WineANDspirit} name="wineANDspirit" />
        {/* ------------ food and drink end   ----------------------------------- */}

        {/* ------------ inspiration start   ----------------------------------- */}
        <Drawer.Screen component={Inspiration} name="Inspiration" />
        <Drawer.Screen
          component={Inspiration_latestnews}
          name="Inspiration_latestnews"
        />
        <Drawer.Screen
          component={Valentine_day_gift}
          name="Valentine_day_gift"
        />

        {/* ------------ inspiration end   ----------------------------------- */}

        {/* ------------ contact start   ----------------------------------- */}
        <Drawer.Screen component={Contacts} name="Contacts" />
        <Drawer.Screen component={Advertise} name="Advertise" />
        {/* ------------ contact end   ----------------------------------- */}

        <Drawer.Screen component={Randomtwo} name="randomtwo" />
        <Drawer.Screen component={Randomthree} name="randomthree" />
        <Drawer.Screen
          component={Randompost_Detail}
          name="randompost_detail"
          options={{headerShown: false}}
        />
        <Drawer.Screen 
          component={Prev_Newer}
          name='prev_newer'
          
         />
          <Drawer.Screen 
          component={PreviewsDetial}
          name='prevdetial'
          
         />
          <Drawer.Screen 
          component={NewerDetial}
          name='newerdetial'
          
         />
           <Drawer.Screen 
          component={Escape_city_summerr}
          name='Escape_city_summerr'
          
         />
           <Drawer.Screen 
          component={An_Italian_Film_Weekend}
          name='An_Italian_Film_Weekend'
          
         />
          <Drawer.Screen 
          component={Almanac_Barcelona_launches}
          name='Almanac_Barcelona_launches'
          
         />
          <Drawer.Screen 
          component={The_Whispering_Angel_Terrace}
          name='The_Whispering_Angel_Terrace'
          
         />
           <Drawer.Screen 
          component={Opulence_In_The_Clifftops}
          name='Opulence_In_The_Clifftops'
          
         />
           <Drawer.Screen 
          component={FashionDetialpage}
          name='FashionDetialpage'
          
         />
          <Drawer.Screen 
          component={Header}
          name='Header'
          
         />
         <Drawer.Screen 
          component={Detialpage}
          name='detialpage'
          
         />
         
      </Drawer.Navigator>
    </View>
  );
};

export default Drowernavigation;

const styles = StyleSheet.create({});
