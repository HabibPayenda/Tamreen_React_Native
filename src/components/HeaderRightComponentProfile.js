import React from "react";
import { StyleSheet, TouchableOpacity , Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DrawerActions } from "@react-navigation/native";
import { connect } from "react-redux";

import colors from "../utils/colors";

function HeaderRightComponentProfile({ navigation, themeDark, user }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Image source={{uri: user ? user.photo : null}}  style={{height: 60, width: 60, borderRadius: 30}}/>
    </TouchableOpacity>
  );
}

const mapStateToProps = ({ themeDark, user }) => {
  return { themeDark, user };
};

export default connect(mapStateToProps)(HeaderRightComponentProfile);
