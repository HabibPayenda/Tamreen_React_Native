import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppScreen from "../components/AppScreen";
import { ListItem, Divider, Image, Header, Text } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";
import SVGImage from "react-native-svg-image";

import { connect } from "react-redux";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";

const TopContainer = styled.View`
  height: ${hp(20)}px;
  width: 100%;
  background-color: ${colors.secondary};
  margin-bottom: ${hp(10)}px;
  elevation: 1;
`;

const TopBottomContainer = styled.View`
  height: ${hp(8)}px;
  width: ${wp(80)}px;
  border-top-left-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  background-color: ${colors.white};
  position: absolute;
  bottom: ${hp(-5)}px;
  align-self: center;
  elevation: 2;
`;

const ProfilePicContainer = styled.View`
  height: ${hp(15)}px;
  width: ${wp(30)}px;
  background-color: ${colors.white};
  position: absolute;
  top: ${hp(-5)}px;
  border-top-left-radius: ${wp(5)}px;
  overflow: hidden;
  elevation: 5;
`;

const UserDetailsContainer = styled.View`
  height: 100%;
  width: ${wp(50)}px;
  background-color: ${colors.white};
  align-self: flex-end;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${wp(3)}px;
  border-bottom-right-radius: ${wp(5)}px;
  border-top-right-radius: ${wp(5)}px;
`;

const UserName = styled.Text`
  font-size: 18px;
  color: ${colors.dark};
  margin-top: ${hp(0)}px;
  font-weight: bold;
`;

const UserEmail = styled.Text`
  font-size: 11px;
  color: ${colors.mid};
  margin-top: ${hp(0)}px;
`;

const QrCodeContainer = styled.View`
  height: ${hp(30)}px;
  width: ${wp(60)}px;
  padding: ${wp(5)}px;
  background-color: ${colors.white};
  border-top-left-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  align-self: center;
  margin-top: ${hp(1)}px;
  margin-bottom: ${hp(1)}px;
  elevation: 3;
`;

function profileScreen({ navigation, user, language }) {
  // console.log(`User in profile screen is: ${user}`);
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <TopContainer>
        <TopBottomContainer>
          <UserDetailsContainer>
            <UserName>{user ? user.user.name.toUpperCase() : null}</UserName>
            <UserEmail>{user ? user.user.email.toLowerCase() : null}</UserEmail>
          </UserDetailsContainer>
          <ProfilePicContainer>
            <Image
              style={styles.image}
              source={{ uri: user ? user.photo : null }}
            />
          </ProfilePicContainer>
        </TopBottomContainer>
      </TopContainer>

      <Divider style={{ height: hp(1), backgroundColor: colors.light }} />

      <QrCodeContainer>
        <SVGImage
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: `http://192.168.43.211:8000/photos/${user.user.qrCode}`,
          }}
        />
      </QrCodeContainer>

      <TouchableOpacity onPress={() => navigation.navigate("Subscription")}>
        <ListItem bottomDivider>
          <Icon name="file" color={colors.primary} size={25} />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {language.subscription}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: colors.primary,
    marginTop: hp(0.5),
  },
  title: {
    fontSize: hp(2.4),
    color: colors.dark,
  },
  profile: {
    height: hp(20),
    width: wp(40),
    alignSelf: "center",
    marginTop: hp(3),
    marginBottom: hp(1),
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    height: hp(20),
    width: hp(20),
    borderRadius: hp(80),
  },
  image: {
    height: hp(15),
    width: "100%",
    resizeMode: "cover",
  },
});

const mapStateToProps = ({ user, language }) => {
  return { user, language };
};
export default connect(mapStateToProps)(profileScreen);
