import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  ListItem,
  Avatar,
  Divider,
  Switch,
  Text,
  Image,
} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import styled from "styled-components/native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { connect } from "react-redux";

import { auth } from "../store/actions";
import AppScreen from "../components/AppScreen";
import colors, { darkTheme } from "../utils/colors";

import { theme } from "../store/actions";
import StyledListItem from "./../components/StyledListItem";

const { changeToDark, changeToLight } = theme;

const { logOut, loadUser } = auth;

const TopContainer = styled.View`
  height: ${hp(15)}px;
  width: 100%;
  margin-bottom: ${hp(2)}px;
  background-color: ${colors.secondary};
  z-index: 10;
`;

const TopBottomContainer = styled.View`
  height: ${hp(5)}px;
  width: ${wp(60)}px;
  border-top-left-radius: ${wp(5)}px;
  border-top-right-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  background-color: ${colors.secondary};
  position: absolute;
  bottom: ${hp(-5)}px;
  align-self: center;
  elevation: 2;
`;

const ProfilePicContainer = styled.View`
  height: ${hp(10)}px;
  width: ${wp(20)}px;
  background-color: ${colors.white};
  position: absolute;
  top: ${hp(-10)}px;
  border-top-left-radius: ${wp(4)}px;
  overflow: hidden;
  elevation: 5;
  border: solid 2px ${colors.white};
`;

const UserDetailsContainer = styled.View`
  height: 100%;
  width: ${wp(40)}px;
  background-color: ${colors.white};
  align-self: flex-end;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${wp(3)}px;
  border-bottom-right-radius: ${wp(5)}px;
`;

const UserName = styled.Text`
  font-size: 14px;
  color: ${colors.dark};
  margin-top: ${hp(0)}px;
  font-weight: bold;
`;

const UserEmail = styled.Text`
  font-size: 8px;
  color: ${colors.mid};
  margin-top: ${hp(0)}px;
`;

const DrawerContent = ({
  navigation,
  logOut,
  setLocal,
  themeDark,
  changeToDark,
  changeToLight,
  user,
  loadUser,
  language,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    if (!isDarkTheme) {
      setIsDarkTheme(true);
      changeToDark(true);
    } else {
      setIsDarkTheme(false);
      changeToLight(false);
    }
  };

  const stepCounter = {
    title: "Step Counter",
    icon: "road",
    screen: "StepCounter",
  };

  const setting = {
    title: "Settings",
    icon: "cog",
    screen: "Settings",
  };

  const list = [
    {
      title: language.aboutUs,
      icon: "cloud",
      screen: "AboutUs",
    },
    {
      title: language.privacyPolicy,
      icon: "user-secret",
      screen: "Privacy",
    },
    {
      title: language.rateThisApp,
      icon: "star",
      screen: "Privacy",
    },
    {
      title: language.feedBack,
      icon: "rss",
      screen: "FeedBack",
    },
  ];
  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: themeDark ? colors.themeDark : colors.white,
      }}
    >
      <View
        style={[
          styles.profileContainer,
          {
            backgroundColor: themeDark ? colors.themeDark1 : colors.white,
            flex: 1,
          },
        ]}
      >
        <TopContainer>
          <View style={{ marginTop: hp(10) }}>
            <TopBottomContainer>
              <UserDetailsContainer>
                <UserName>
                  {user ? user.user.name.toUpperCase() : null}
                </UserName>
                <UserEmail>
                  {user ? user.user.email.toLowerCase() : null}
                </UserEmail>
              </UserDetailsContainer>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <ProfilePicContainer>
                  <Image
                    style={styles.image}
                    source={{ uri: user ? user.photo : null }}
                  />
                </ProfilePicContainer>
              </TouchableOpacity>
            </TopBottomContainer>
          </View>
        </TopContainer>
      </View>

      <StyledListItem
        title="Studio"
        navigation={navigation}
        path="Studio"
        icon="dumbbell"
      />
      <StyledListItem
        title="BMI Calculator"
        navigation={navigation}
        path="Bmi"
        icon="calculator"
      />
      <StyledListItem
        title="Step Counter"
        navigation={navigation}
        path="StepCounter"
        icon="road"
      />

      <Divider style={{ height: hp(0.2), backgroundColor: colors.light }} />

      <StyledListItem
        title="About Us"
        navigation={navigation}
        path="AboutUs"
        icon="cloud"
      />
      <StyledListItem
        title="Privacy Policy"
        navigation={navigation}
        path="Privacy"
        icon="user-secret"
      />
      <StyledListItem
        title="Rate this App"
        navigation={navigation}
        path="Privacy"
        icon="star"
      />
      <StyledListItem
        title="Feedback"
        navigation={navigation}
        path="FeedBack"
        icon="rss"
      />

      <Divider
        style={{
          height: hp(0.2),
          backgroundColor: colors.light,
        }}
      />
      <ListItem
        bottomDivider
        containerStyle={{
          backgroundColor: themeDark ? colors.themeDark1 : colors.white,
        }}
      >
        <Icon
          name="moon-o"
          color={themeDark ? colors.secondary : colors.primary}
          size={25}
        />
        <ListItem.Content>
          <ListItem.Title
            style={[
              styles.title,
              { color: themeDark ? colors.light : colors.dark },
              ,
            ]}
          >
            <Text
              style={[
                styles.title,
                {
                  color: themeDark ? colors.light : colors.dark,
                },
              ]}
            >
              {language.darkMode}
            </Text>
          </ListItem.Title>
        </ListItem.Content>
        <Switch
          value={isDarkTheme}
          onValueChange={() => changeTheme()}
          color={themeDark ? colors.secondary : colors.primary}
        />
      </ListItem>
      <StyledListItem
        title="Settings"
        navigation={navigation}
        path="Settings"
        icon="cog"
      />
      <TouchableWithoutFeedback
        onPress={() => {
          logOut();
          setLocal(false);
        }}
      >
        <StyledListItem title="Log Out" icon="sign-out-alt" />
      </TouchableWithoutFeedback>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: wp(3.8),
  },
  profileContainer: {},
  profileMid: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  profile: {
    height: wp(15),
    width: wp(15),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp(2),
  },
  profileText: {
    fontSize: wp(4.5),
    marginLeft: wp(4),
  },
  profileSubText: {
    fontSize: wp(3),
    marginLeft: wp(4),
    marginBottom: wp(2),
    color: colors.mid,
  },
  profileImage: {
    height: wp(15),
    width: wp(15),
    borderRadius: wp(70),
  },
  image: {
    height: hp(10),
    width: "100%",
    resizeMode: "cover",
  },
});

const mapStateToProps = ({ themeDark, user, language }) => {
  return { themeDark, user, language };
};

export default connect(mapStateToProps, {
  logOut,
  changeToLight,
  changeToDark,
  loadUser,
})(DrawerContent);
