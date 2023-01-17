import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem, Divider, Image, Header } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";

function EditeFacebookIdScreen({ navigation }) {
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
      <Text>Edite Facebook Id Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
export default EditeFacebookIdScreen;
