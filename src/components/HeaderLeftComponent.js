import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

import colors from "../utils/colors";

function HeaderLeftComponent({ navigation, themeDark }) {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Icon
        name="bars"
        size={22}
        color={themeDark ? colors.light : colors.primary}
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

const mapStateToProps = ({ themeDark }) => {
  return { themeDark };
};
export default connect(mapStateToProps)(HeaderLeftComponent);
