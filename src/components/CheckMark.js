import React from "react";
import LottieView from "lottie-react-native";

function CheckMark({ show = false }) {
  if (!show) return null;
  return <LottieView autoPlay source={require("../animations/check.json")} />;
}

export default CheckMark;
