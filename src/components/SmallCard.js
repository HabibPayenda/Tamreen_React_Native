import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import colors from "./../utils/colors";
import pic from "./../img/pic.jpg/";

const MainContainer = styled.View`
  height: ${hp(30)}px;
  width: ${wp(45)}px;
  background-color: ${colors.white};
  border-top-left-radius: ${wp(12)}px;
  border-bottom-right-radius: ${wp(12)}px;
  overflow: hidden;
  elevation: 3;
  margin-left: ${wp(2)}px;
  margin-right: ${wp(1)}px;
`;

const TopContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: ${hp(5)}px;
  background-color: ${colors.secondary};
  position: absolute;
  border-bottom-right-radius: ${wp(1)}px;
`;

const BottomContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  bottom: 0px;
  width: 80%;
  height: ${hp(5)}px;
  background-color: ${colors.white};
  border-top-left-radius: ${wp(1)}px;
`;

const Title = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
`;

const TitleSecondery = styled.Text`
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: bold;
`;

function SmallCard({ name, pic_url }) {
  return (
    <View style={{ backgroundColor: colors.white, elevation: 0 }}>
      <MainContainer>
        <Image source={require("./../img/pic.jpg")} style={styles.image} />
        <TopContainer>
          <Title>{name}</Title>
        </TopContainer>
        <BottomContainer>
          <TitleSecondery>1 Km</TitleSecondery>
        </BottomContainer>
      </MainContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: hp(30),
    width: wp(45),
    resizeMode: "cover",
  },
});

export default SmallCard;
