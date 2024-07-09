import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomBTN from '../COMPONENTS/customBTN';
import ConnectWithUs from '../COMPONENTS/connectWithUs';
import BottomView from '../COMPONENTS/BottomView';
import Icon from 'react-native-vector-icons/Entypo';
import Imgcomp from '../COMPONENTS/imgcomp';
import Randompost from '../homescreens/randompost';
import Prev_Newer from '../COMPONENTS/prev_Newer';
import Header from '../COMPONENTS/headers/header';

const JerseyBoysAreBeggin = () => {
  const drawer = createDrawerNavigator();
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [toggle, setToggle] = useState(0);

  const scrollToTop = () => {
    scrollViewRef.current.scrollTo({y: 0, animated: true, duration: 1000});
  };

  const opendrower = () => {
    navigation.openDrawer();
  };

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: wp(5), backgroundColor: 'white'}}>
        <Header category={'Jersey Boys Are Beggin’ To Entertain Us'}/>
       
          <View style={{marginTop: hp(2)}}>
            <View>
              <TouchableOpacity>
                <Imgcomp url={require('../img/jerseyboy1.jpg')} />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                   <View style={{flexDirection: "row", alignItems: "center", marginVertical: hp(1)}}>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 0.6,}} />
          <Text style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 22,
            fontWeight: '600',
            letterSpacing: 1.5,
            fontFamily: 'OpenSans_Condensed-Medium',
            marginHorizontal:wp(3)
          }}>- LIFESTYLE, ENTERTAINMENT</Text>
          <View style={{   backgroundColor: 'rgb(199, 167, 112)', height: 2, flex: 0.6}} />

</View>
                  
             
              </View>

              <Text
                style={{
                  alignItems: 'center',
                  color: 'black',
                  fontSize: 45,
                  fontFamily: 'PlayfairDisplay-Medium',
                  textAlign: 'center',
                }}>
                Jersey Boys are Beggin’ to Entertain Us
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 23,
                  color: 'rgb(170, 170, 170)',
                  fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
                  marginTop: hp(1),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 22,
                    color: 'rgb(199, 167, 112)',
                  }}>
                  Admin
                </Text>
                / January 31, 2022
              </Text>
              <Text
                style={[
                  styles.description,
                  {
                    marginTop: hp(4),
                    fontFamily: 'OpenSans_SemiCondensed-Italic',
                    letterSpacing: 1.5,
                    fontSize: 23,
                  },
                ]}>
                Jersey Boys are ‘working their way back’ to Milton Keynes this
                February and we were lucky enough to catch up with Michael
                Pickering (Frankie Valli), Lewis Griffiths (Nick Massi), Blair
                Gibson (Bob Gaudio), and Dalton Wood (Tommy DeVito) who talk
                nostalgia, gambling and Covid
              </Text>

              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                What can audiences expect when they come to see the show?
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Dalton:
                </Text>{' '}
                They’re in for a fun-filled night with amazing music, on top of
                which, there’s a true and gritty story. It’s all-round
                entertainment.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Michael:
                </Text>{' '}
                It’s one of those shows where if someone says ‘My husband won’t
                come see a musical’ this is the one you bring them to because
                they’re going to love musicals after seeing it. Sometimes men
                get dragged along to it and they leave going ‘Oh my God that was
                amazing’. It’s a wonderful night out
              </Text>
              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                Is it just what audiences are craving right now, after all the
                lockdowns and restrictions?
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Michael:
                </Text>
                Absolutely. It’s got such a great story, everyone loves the
                music, and it kind of relates to the world we’re living in at
                the moment because the Four Seasons went through such hard times
                yet they kept going. It’s an inspiring story and we all need
                that at the moment
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Lewis:
                </Text>
                With the greatest respect to Jersey Boys I think faithful
                theatre audiences are craving anything they can get their hands
                on. But Jersey Boys just happens to be one of those shows that
                puts life into perspective and makes you smile at the same time.
              </Text>
              <Imgcomp
                url={require('../img/jerseyboy2.jpg')}
                marginVertical={hp(7)}
              />

              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                Why do you think there’s still such nostalgia for the music?
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Michael:
                </Text>{' '}
                No-one has come close to touching it since. They had the
                four-part harmonies and Frankie’s unique falsetto, and they were
                a group – they were a team and a family, not some manufactured
                band. They loved what they did and they worked hard to get to
                the top
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Dalton:
                </Text>{' '}
                Frankie is still out there and still going strong, which helps
                keep the music alive as does the show. Beggin’ is a hit all over
                again, which is amazing, and all their music is just incredible.
                That’s why it keeps coming back round again and again.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Blair:
                </Text>{' '}
                The songs are classics. As Dalton says, Beggin’ is now one of
                the bestselling songs around the world and it originally came
                out in 1967. Their music is timeless.
              </Text>

              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                How would you describe your respective characters in the show?
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Michael:
                </Text>
                Frankie Valli has the biggest heart and a wonderful talent. What
                he lacks in stature he makes up for in heart and I think he
                falls on hard times because of how much he gives to his family
                and friends.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Lewis:
                </Text>
                Nick is the band’s bassist and arranger, a musical genius and
                the strong, silent type. He’s incredibly enigmatic, with his
                quirks and his isms, and he’s dealing with his demons – which
                really resonates in this day and age where there’s more
                awareness of mental health.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Blair:
                </Text>
                Bob is the composer who wrote all the songs for the Four Seasons
                as well as for other artists. He also had a role in the
                production side of things, especially later on in their careers.
                He’s very pragmatic and very logic-driven, which is what the
                group needed at the time, and it’s part of the reason they’re
                still big and still successful today.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Dalton:
                </Text>
                Tommy is the one who started the band. He has his issues; he’s a
                big gambler and gets into money troubles. But he’s the one that
                brought them all together and he’s such a big character to play
              </Text>
              <Imgcomp
                url={require('../img/jerseyboy3.jpg')}
                resizeMode={'cover'}
                marginVertical={hp(3)}
              />
              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                There are so many great songs in the show. Do you have any
                favourites to perform?
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Dalton:
                </Text>{' '}
                I love the big three, so that’s Sherry, Big Girls Don’t Cry and
                Walk Like a Man. Those were the group’s first big hits. We
                perform them one after another. The dance moves and the
                harmonies come out – they’re such fun to perform
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Michael:
                </Text>{' '}
                For me it’s Cry for Me, which comes quite early in the show. It
                shows the boys coming together one by one and it’s the first
                time they hit their harmonies and go ‘This is it’.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Lewis:
                </Text>{' '}
                Beggin’ is so infectious. It’s groovy but it’s dark and gritty.
                It’s an uplifting pop song but with a deep meaning to it in
                terms of the lyrics and where it falls in the story. I also love
                Stay because it comes after a really intense, explosive scene
                and it shows them lacing up their shoes, straightening their
                ties and stepping out in front of a crowd. It’s like ‘We’re
                still here, we’re thriving, and we love what we do’ and that’s
                kind of a metaphor for myself and people who are striving to
                work in the theatre industry at the moment. Kudos to anyone
                that’s doing it.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Blair:
                </Text>{' '}
                I love Let’s Hang On because it’s when they’ve come out of a
                period of darkness and angst and it’s all about the music again.
                We’re dancing around. [Laughs] The good old thigh slap.
              </Text>

              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                It’s not just a jukebox musical, is it?
              </Text>

              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Lewis:
                </Text>
                Absolutely not. It can easily, mistakenly be labelled a jukebox
                musical by people who aren’t familiar with the terminology but
                it’s actually a play. Jersey Boys has always been a play where
                this incredible back catalogue of music is interwoven through
                the story chronologically.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Dalton:
                </Text>
                It’s a play with songs because it tells their story. You get all
                the music everyone still loves and wants but you also get a
                gripping true story.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Blair:
                </Text>
                People come expecting the songs they know and love but they go
                away having learned something because not everyone knows the ins
                and outs of the plot. It’s almost like a documentary told by the
                band themselves. You get different points of view on the same
                story from these four people who are four very different guys.
                It’s a very dramatic narrative but also has that feel-good
                element. I feel good just doing it.
              </Text>

              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                How have audiences been so far?
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Lewis:
                </Text>
                It’s been such a pleasant surprise. Theatre has been a
                long-suffering victim of the pandemic and there’s some
                apprehension but they’re coming back to theatres in droves and
                loving it. They’re showing their approval by having a great
                time.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Dalton:
                </Text>
                We’ve had standing ovations every night so far and fingers
                crossed that carries on. The reaction has been so positive and
                for us as performers it’s just nice to be back out there again
                after so long.
              </Text>
              <Imgcomp
                url={require('../img/jerseyboy4.jpg')}
                resizeMode={'contain'}
                marginTop={hp(7)}
                marginVertical={hp(2)}
                height={hp(75)}
              />

              <Text style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                What do you hope people will feel when they leave the theatre?
              </Text>

              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Dalton:
                </Text>
                We end the show with such joyous numbers everyone knows, even if
                they weren’t around at the time they first came out. They’ll
                leave upbeat and happy. They’ll have had a fun, energising
                evening whilst learning a bit more about the Four Seasons’ story
                along the way.
              </Text>
              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Blair:
                </Text>
                It has peaks and valleys, with fun moments and some really
                dramatic ones. It gives you feel-good moments then brings you
                back down to earth before ending with Who Loves You – a song
                that everyone knows and which has everyone on their feet. I
                think they’ll leave feeling ecstatic but also surprised by what
                they’ve learned. We’ve had so many people say ‘We had no idea
                about the story, we just came for the music’. There’s a lot of
                appreciation, which is always nice to hear.
              </Text>

              <Text style={styles.description}>
                <Text
                  style={[styles.description, {fontFamily: 'OpenSans-Bold'}]}>
                  Jersey Boys is at Milton Keynes Theatre from
                </Text>{' '}
                Wednesday 23rd February to Saturday 5th March. For tickets,
                visit
              </Text>

              <Text
                style={[
                  styles.description,
                  {color: 'rgb(199, 167, 112)', marginVertical: hp(0),letterSpacing:1}
                ]}>
                www.atgtickets.com/Milton Keynes
              </Text>



              <View className="my-9">
                <View
                  style={{marginTop: hp(3)}}
                  className="flex-row justify-around">
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
                    width={6}
                    image={require('../img/google-plus-logo.png')}
                  />
                  <CustomBTN
                    height={3}
                    width={5}
                    image={require('../img/linkedin.png')}
                  />
                </View>
                <CustomBTN
                  self={'center'}
                  height={3}
                  width={5}
                  image={require('../img/tumblr.png')}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (toggle == 0) {
                    setToggle('1');
                  }
                  if (toggle == 1) {
                    setToggle('0');
                  }
                }}
                className="flex-row gap-1  border-[0.5px] w-16 h-10  justify-center items-center self-end mt-2 "
                style={{
                  borderColor:
                    toggle == 0 ? 'rgb(170, 170, 170)' : 'rgb(199, 167, 112)',
                }}>
                <Text
                  className="text-xl"
                  style={{
                    color:
                      toggle == 1 ? 'rgb(199, 167, 112)' : 'rgb(170, 170, 170)',
                  }}>
                  {toggle}
                </Text>
                {toggle == 0 ? (
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: 'rgb(170, 170, 170)',
                    }}
                    source={require('../img/star(2).png')}
                  />
                ) : (
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: 'rgb(199, 167, 112)',
                    }}
                    source={require('../img/star(1).png')}
                  />
                )}
              </TouchableOpacity>
              {/* this is a prev and next view  */}
              <Prev_Newer/>
              {/* random  post view */}
              <Randompost />
            </View>
          </View>

          <Image
            className="mt-32"
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

export default JerseyBoysAreBeggin;

const styles = StyleSheet.create({
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
  lineone: {
    height: 0.5,
    width: wp(6),
    backgroundColor: 'rgb(170, 170, 170)',
  },
  description: {
    color: 'black',
    fontSize: 22,
    lineHeight: hp(4),
    letterSpacing: 0,
    marginVertical: hp(1.5),
    fontFamily: 'OpenSans_Condensed-SemiBoldltalic',
    fontFamily: 'OpenSans-Regular',
  },
});
