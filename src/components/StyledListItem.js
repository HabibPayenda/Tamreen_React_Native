import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "./../utils/colors";

const MainContainer = styled.View`
  height: ${hp(7)}px;
  width: ${wp(65)}px;
  background-color: ${colors.white};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${wp(4)}px;
  margin-top: ${hp(0)}px;
  margin-left: ${wp(1.5)}px;
`;

const Title = styled.Text`
  font-size: ${wp(3.8)}px;
  position: absolute;
  left: ${wp(14)}px;
`;

function StyledListItem({ title, icon, path, navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (navigation) {
          navigation.navigate(path);
        } else {
          return;
        }
      }}
    >
      <MainContainer>
        <FontAwesome5 name={icon} size={25} color={colors.primary} />
        <Title>{title}</Title>
        <Icon name="chevron-right" color={colors.secondary} size={10} />
      </MainContainer>
    </TouchableWithoutFeedback>
  );
}

export default StyledListItem;
