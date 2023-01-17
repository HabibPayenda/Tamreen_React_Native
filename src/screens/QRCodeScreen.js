import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Header } from "react-native-elements";
import SVGImage from "react-native-svg-image";
import { WebView } from "react-native-webview";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { connect } from "react-redux";
import Svg, { Circle, Rect, Path, G } from "react-native-svg";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";

import tamreenPhoto from "../api/tamreenPhoto";
import { Inter_100Thin } from "@expo-google-fonts/inter";

function QRCodeScreen({ navigation, user }) {
  return (
    <View style={{ backgroundColor: colors.primary, flex: 1 }}>
      <Header
        backgroundColor={colors.primary}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        centerComponent={{
          text: "QR Code",
          style: { color: colors.light, fontWeight: "bold", fontSize: hp(2.8) },
        }}
        rightComponent={<HeaderRightComponent navigation={navigation} />}
      />

      <SVGImage
        style={{ width: wp(100), height: hp(100) }}
        source={{
          uri: `http://192.168.43.211:8000/photos/${user.user.qrCode}`,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({});

const mapStateTopProps = ({ user }) => {
  return { user };
};
export default connect(mapStateTopProps)(QRCodeScreen);
