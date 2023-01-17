import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import TextTransition from "react-text-transition";
import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import colors from "./../utils/colors";
import { NativeModules } from "react-native";

const MainContainer = styled.View`
  margin-left: ${wp(2)}px;
`;

const Message = styled.Text`
  color: ${colors.primary};
  font-size: ${wp(8)}px;
`;
const names = ["Tamreen", "Sports", "Health"];

function WelcomeMessage(props) {
  const [index, setIndex] = useState(0);
  const [newName, setNewName] = useState("Tamreen");
  const [final, setFinal] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setNewName(names[index]);

    setFinal(newName.substr(2));
  });

  useEffect(() => {
    const intervalId = setInterval(shuffle, 4000);
    return () => clearInterval(intervalId);
  }, [shuffle]);
  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     3000 // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
    <MainContainer>
      <Message>Wellcome to {newName}</Message>
    </MainContainer>
  );
}

export default WelcomeMessage;
