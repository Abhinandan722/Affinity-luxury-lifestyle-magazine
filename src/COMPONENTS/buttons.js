import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBTN from './customBTN'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Mybuttons = () => {
  return (
  
    <View
      style={{marginTop: hp(3), flexDirection:'row', flexWrap:'wrap', justifyContent:'center',gap:wp(4)}}
      className=" mb-14">
      <CustomBTN
        height={3}
        width={5}
        image={require('../img/facebook-app-symbol.png')}
        // url={'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Faffinitymag.co.uk%252Fa-landmark-of-luxury-at-the-emory-london%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB'}
      />
      <CustomBTN
        height={3}
        width={6}
        image={require('../img/twitter.png')}
      //  url={'https://x.com/?logout=1720687055010'}
      />
      <CustomBTN
        height={3}
        width={6}
        image={require('../img/google-plus-logo.png')}
      // url={'https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html'}
      />
      <CustomBTN
        height={3}
        width={5}
        image={require('../img/linkedin.png')}
      //  url={'https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%3A%2F%2Faffinitymag.co.uk%2Fa-landmark-of-luxury-at-the-emory-london%2F%26title%3DA%2520Landmark%2520of%2520Luxury%2520at%2520The%2520Emory%2C%2520London'}
      />
       <CustomBTN
      self={'center'}
      height={3}
      width={5}
      image={require('../img/tumblr.png')}
    //  url={'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Faffinitymag.co.uk%2Fa-landmark-of-luxury-at-the-emory-london%2F&posttype=link&title=A+Landmark+of+Luxury+at+The+Emory%2C+London&caption=&content=https%3A%2F%2Faffinitymag.co.uk%2Fa-landmark-of-luxury-at-the-emory-london%2F'}
    />
     
   
    </View>
   

  )
}

export default Mybuttons

const styles = StyleSheet.create({})