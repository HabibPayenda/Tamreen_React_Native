import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import colors from "../utils/colors";

function AppMapView({ latitude, longitude }) {
  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
    zIndex: -10,
  },
});
export default AppMapView;
