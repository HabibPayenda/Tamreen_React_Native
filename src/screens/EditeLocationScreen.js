import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Divider, Image, Header } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";
import MapView from "../components/MapView";

function EditeLocationScreen({ navigation, userLocation }) {
  console.log(userLocation.lat);
  return (
    <View>
      <Header
        backgroundColor={colors.primary}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        centerComponent={{
          text: "Settings",
          style: { color: colors.light, fontWeight: "bold", fontSize: hp(2.8) },
        }}
        rightComponent={<HeaderRightComponent navigation={navigation} />}
      />
      <MapView
        latitude={userLocation ? userLocation.lat : 0}
        longitude={userLocation ? userLocation.long : 0}
        latitudeDelta={0.0922}
        longitudeDelta={0.0421}
      />
    </View>
  );
}
const styles = StyleSheet.create({});

const mapStateTopProps = ({ userLocation }) => {
  return { userLocation };
};
export default connect(mapStateTopProps)(EditeLocationScreen);
