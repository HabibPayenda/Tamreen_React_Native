import React from "react";
import { StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import { ListItem, Divider, Image, Header, Text } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";
function FeedBackScreen({ navigation, language }) {
  return (
    <AppScreen>
      <Header
        backgroundColor={colors.primary}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        centerComponent={{
          text: language.feedBack,
          style: { color: colors.light, fontWeight: "bold", fontSize: hp(2.8) },
        }}
        rightComponent={<HeaderRightComponent navigation={navigation} />}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({});

const mapStateTopProps = ({ language }) => {
  return { language };
};
export default connect(mapStateTopProps)(FeedBackScreen);
