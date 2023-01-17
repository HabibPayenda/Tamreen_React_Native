import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";

const MainView = styled.View`
height: ${hp(10)}px;
width: ${wp(60)}px;

`;

const StyledImage = styled.Image`


`;

function HealthTopicCard({title, image_url}) {
    return (
        <MainView>
            <Text>{title}</Text>
            <StyledImage />
        </MainView>
    );
}
const styles = StyleSheet.create({
    
})
export default HealthTopicCard;