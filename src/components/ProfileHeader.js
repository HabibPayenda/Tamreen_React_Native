import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import Animated from "react-native-reanimated";

import { connect } from "react-redux";

import colors from "./../utils/colors";

const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${hp(15)}px;
  width: 100%;
  padding: 0px 20px;
  background-color: ${colors.white};
`;

const ProfilePic = styled.Image`
  height: ${wp(16)}px;
  width: ${wp(16)}px;
  border-top-left-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  border: solid 2px ${colors.white};
`;

function ProfileHeader({ user, themeDark, navigation, address }) {
  return (
    <MainContainer>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon
          name="bars"
          size={30}
          color={themeDark ? colors.light : colors.primary}
          style={{ marginRight: 20 }}
        />
      </TouchableOpacity>
      <Text style={{ color: colors.primary }}>{address}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <ProfilePic source={{ uri: user ? user.photo : null }} />
      </TouchableOpacity>
    </MainContainer>
  );
}
const styles = StyleSheet.create({});

const mapStateToProps = ({ user }) => {
  return { user };
};
export default connect(mapStateToProps)(ProfileHeader);
