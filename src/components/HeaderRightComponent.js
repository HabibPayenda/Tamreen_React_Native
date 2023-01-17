import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DrawerActions } from "@react-navigation/native";
import { connect } from "react-redux";

import colors from "../utils/colors";

function HeaderRightComponent({ navigation, themeDark, user }) {

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.jumpTo("Main"))}
    >
      <Icon
        name="home"
        size={22}
        color={themeDark ? colors.light : colors.light}
        style={{ marginRight: 20, elevation: 15 }}
      />
    </TouchableOpacity>
  );
}

const mapStateTopProps = ({ themeDark, user }) => {
  return { themeDark, user };
};

export default connect(mapStateTopProps)(HeaderRightComponent);
