import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import colors from "./../utils/colors";

const MainContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: ${wp(2)}px;
`;

const Message = styled.Text`
  color: ${colors.pink};
  font-size: ${wp(5)}px;
  font-weight: bold;
`;

function MainTitle({ title }) {
  return (
    <MainContainer>
      <Message>{title ? title : "Title"}</Message>
    </MainContainer>
  );
}

export default MainTitle;
