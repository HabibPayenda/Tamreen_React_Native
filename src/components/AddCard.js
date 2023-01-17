import React from "react";
import { StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SliderBox } from "react-native-image-slider-box";

import colors from "./../utils/colors";

const MainContainer = styled.View`
  background-color: ${colors.light};
  height: ${hp(20)}px;
  width: ${wp(99)}px;
  margin-top: ${hp(3)}px;
  border-top-left-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  overflow: hidden;
  align-self: center;
`;

const images = [
  require("./../img/img1.jpg"), // Network image
  require("./../img/img2.jpg"), // Network image
  require("./../img/img3.jpg"), // Network image
  require("./../img/img4.jpg"), // Network image
  require("./../img/add.jpg"), // Local image
];
function AddCard(props) {
  return (
    <MainContainer>
      <SliderBox
        dotColor={colors.primary}
        inactiveDotColor={colors.secondary}
        images={images}
        autoplay={true}
        circleLoop={true}
        resizeMode={"cover"}
        disableOnPress={true}
        dotStyle={{ height: 0, width: 0 }}
      />
    </MainContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    height: hp(20),
    width: "100%",
    resizeMode: "cover",
  },
});
export default AddCard;
