import React from "react";
import { StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import colors from "./../utils/colors";

const MainContainer = styled.View`
  height: ${hp(23)}px;
  width: ${wp(80)}px;
  background-color: ${colors.light};
  margin-left: ${wp(2)}px;
  margin-right: ${wp(1)}px;
  border-top-left-radius: ${wp(10)}px;
  border-bottom-right-radius: ${wp(10)}px;
  overflow: hidden;
  elevation: 3;
`;

const TopContainer = styled.View`
  position: absolute;
  height: ${hp(5)}px;
  width: 80%;
  background-color: ${colors.secondary};
  border-bottom-right-radius: ${wp(1)}px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const Title = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
`;

function LargCard({ name }) {
  return (
    <MainContainer>
      <TopContainer>
        <Title>{name} </Title>
      </TopContainer>
      <Image style={styles.image} source={require("./../img/health.jpg")} />
    </MainContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    height: hp(23),
    width: "100%",
    resizeMode: "cover",
  },
});
export default LargCard;
