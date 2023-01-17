import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { connect } from "react-redux";
import colors from "../utils/colors";
function AppScreen({ children, style, theme }) {
  return (
    <SafeAreaView
      style={[styles.container, style, { backgroundColor: colors.light }]}
    >
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    width: "100%",
  },
});
const mapStateToProps = ({ theme }) => {
  return { theme };
};
export default connect(mapStateToProps)(AppScreen);
