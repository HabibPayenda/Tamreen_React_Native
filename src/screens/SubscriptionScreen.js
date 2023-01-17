import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";

function SubscriptionScreen({ navigation }) {
  return (
    <View>
      <Header
        backgroundColor={colors.primary}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        centerComponent={{
          text: "Subscription",
          style: { color: colors.light, fontWeight: "bold", fontSize: hp(2.8) },
        }}
        rightComponent={<HeaderRightComponent navigation={navigation} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
export default SubscriptionScreen;
