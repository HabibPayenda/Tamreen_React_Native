import { Inter_100Thin } from "@expo-google-fonts/inter";
import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import Animated, {
  Extrapolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  diffClamp,
  interpolateNode,
  diff,
} from "react-native-reanimated";
import TypeWriter from "react-native-typewriter";

import { Card, ListItem } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

import * as Location from "expo-location";

import colors from "../utils/colors";
import styled from "styled-components/native";

import { auth, language, location } from "../store/actions";
const { loadUser } = auth;
const { changeToDari, changeToEnglish, changeToPashto } = language;
const { addLocation } = location;
import { pashto, dari, english } from "../utils/language";
import { getAllHealthTopics } from "../store/actions/healthTopicsAction";

import ProfileHeader from "./../components/ProfileHeader";
import HealthTopicCard from "../components/HealthTopicCard";
import WelcomeMessage from "../components/WelcomeMessage";
import MainTitle from "../components/MainTitle";
import SmallCard from "../components/SmallCard";
import AddCard from "../components/AddCard";
import LargCard from "../components/LargCard";
import MianScreenAnimations from "../animation/MianScreenAnimations";

const MainContainer = styled.View`
  background-color: ${colors.white};
  display: flex;
  flex: 1;
  padding-bottom: 5px;
`;
const HEADER_HEIGTH = hp(15);

function mainScreen({
  navigation,
  loadUser,
  themeDark,
  language,
  changeToDari,
  changeToEnglish,
  changeToPashto,
  user,
  addLocation,
  getAllHealthTopics,
  healthTopics,
  loading,
}) {
  ///////////  Ainmated Values
  const scrollY = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const prvS = useSharedValue(0);
  const curS = useSharedValue(0);
  // const headerY = Animated
  //   .interpolateNode
  //   // diffClamScrollY,
  //   // [0, HEADER_HEIGTH],
  //   // [0, -HEADER_HEIGTH]
  //   ();

  // const headerY = interpolate(scrollY.value, {
  //   inputRange: [0, HEADER_HEIGTH],
  //   outputRange: [0, -HEADER_HEIGTH],
  // });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e, ctx) => {
      scrollY.value = e.contentOffset.y;
      prvS.value = e.contentOffset.y;
    },
    onBeginDrag: (e, ctx) => {
      curS.value = e.contentOffset.y;
      prvS.value > curS.value ? (scrollY.value = 0) : e.contentOffset.y;

      console.log(`cruS.value is ${curS.value}`);
      console.log(`prvS.value is ${prvS.value}`);
    },

    onEndDrag: (e, ctx) => {
      isScrolling.value = false;
    },
  });

  const [id, setId] = useState(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [address, setAddress] = useState([]);
  console.log(address);

  //Getting user id from asyncStorage

  useLayoutEffect(() => {
    const getUserId = async () => {
      const aid = await AsyncStorage.getItem("userId");
      console.log(`id in from asyncStorage is ${aid}`);
      setId(aid);
    };
    getUserId();
  }, []);

  //Getting User Location

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let userLocation = await Location.getCurrentPositionAsync({
          accuracy: 100,
        });
        let address = await Location.reverseGeocodeAsync({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        });

        console.log(`Address is ${address}`);
        setAddress(address);
        setLat(userLocation.coords.latitude);
        setLong(userLocation.coords.longitude);
      } catch (error) {
        console.log(`Error in asyncFuncion in getLocation is: ${error}`);
      }
    })();
  }, [errorMsg, id, user]);

  // Checking User selected language

  useEffect(() => {
    const checkLanguage = async () => {
      try {
        const language = await AsyncStorage.getItem("language");

        switch (language) {
          case "pashto":
            changeToPashto(pashto);
            break;
          case "dari":
            changeToDari(dari);
            break;
          case "english":
            changeToEnglish(english);
            break;

          default:
            changeToEnglish(english);
        }
      } catch (error) {
        console.log(`Error in checklnguage is: ${error}`);
      }
    };

    checkLanguage();
  });

  //Sending user location to the server
  useEffect(() => {
    console.log(`lat is: ${lat}`);
    console.log(`long is: ${long}`);
    console.log(`user id  is: ${id}`);
    if (lat > 0 && long > 0 && id) {
      const values = { lat, long };
      addLocation(values, id);
    }
  }, [id, user]);

  //Getting User info from the server

  useEffect(() => {
    console.log(`User Id in Getting user info stage is : ${id}`);
    if (id) {
      loadUser(id, location);
    }
  }, [id]);

  useEffect(() => {
    getAllHealthTopics();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const users = [
    {
      name: "brynn",
      avatar: require("../img/habib.png"),
    },
  ];

  console.log(`healthTopics in main screen is ${healthTopics}`);

  const rStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, HEADER_HEIGTH],
      [0, -HEADER_HEIGTH],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY }],
    };
  });

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <MianScreenAnimations />
      </View>
    );
  } else {
    return (
      <MainContainer>
        <StatusBar hidden />
        <Animated.View style={[{ height: HEADER_HEIGTH }, rStyle]}>
          <ProfileHeader
            HEADER_HEIGTH={HEADER_HEIGTH}
            themeDark={themeDark}
            navigation={navigation}
            address={
              address[0]
                ? address[0].district || address[0].name
                : "Not Available"
            }
          />
        </Animated.View>

        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <WelcomeMessage />
          <MainTitle title="Nearby Studios" />
          <FlatList
            data={healthTopics}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            style={{ height: hp(31), flexGrow: 0 }}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("SingleStudio")}
              >
                <View>
                  <SmallCard name={item.title} />
                </View>
              </TouchableWithoutFeedback>
            )}
          />
          <AddCard />
          <MainTitle title="Health Topics" />
          <FlatList
            data={healthTopics}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            style={{ height: hp(24), flexGrow: 0 }}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("SingleHealth")}
              >
                <View>
                  <LargCard name={item.title} />
                </View>
              </TouchableWithoutFeedback>
            )}
          />
          <MainTitle title="Fittness Studios" />
          <FlatList
            data={healthTopics}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            style={{ height: hp(31), flexGrow: 0 }}
            renderItem={({ item }) => <SmallCard name={item.title} />}
          />
          <MainTitle title="Sports Events" />
          <FlatList
            data={healthTopics}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            style={{ height: hp(24), flexGrow: 0 }}
            renderItem={({ item }) => <LargCard name={item.title} />}
          />
          <MainTitle title="Boxing Studios" />
          <FlatList
            data={healthTopics}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            style={{ height: hp(31), flexGrow: 0 }}
            renderItem={({ item }) => <SmallCard name={item.title} />}
          />
          <AddCard />
        </Animated.ScrollView>
      </MainContainer>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: wp(80),
    height: hp(35),
    margin: hp(0.5),
    marginBottom: hp(0.5),
  },
  user: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: hp(20),
    width: wp(40),
  },
});

const mapStateToProps = ({
  themeDark,
  language,
  user,
  healthTopics,
  loading,
}) => {
  return { themeDark, language, user, healthTopics, loading };
};
export default connect(mapStateToProps, {
  loadUser,
  changeToDari,
  changeToPashto,
  changeToEnglish,
  addLocation,
  getAllHealthTopics,
})(mainScreen);
