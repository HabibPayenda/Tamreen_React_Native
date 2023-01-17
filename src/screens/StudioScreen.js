import React from "react";
import { StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import { ListItem, Divider, Image, Header, Text } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

import { connect } from "react-redux";

import colors from "../utils/colors";

import StyledListItem from "./../components/StyledListItem";

const MainContainer = styled.View`
  height: ${hp(50)}px;
  width: 100%;
  background-color: ${colors.white};
  elevation: 1;
  border-bottom-right-radius: ${wp(10)}px;
  border-bottom-left-radius: ${wp(10)}px;
  overflow: hidden;
`;

const TopContainer = styled.View`
  height: ${hp(30)}px;
  width: 100%;
  background-color: ${colors.secondary};
  border-bottom-right-radius: ${wp(10)}px;
  border-bottom-left-radius: ${wp(10)}px;
`;
const TopContainerTop = styled.View`
  height: ${hp(10)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${wp(5)}px;
`;

const QrContainer = styled.View`
  height: ${hp(6)}px;
  width: ${hp(6)}px;
  background-color: ${colors.white};
  border: solid 2px ${colors.white};
  elevation: 3;
  border-top-left-radius: ${wp(3)}px;
  border-bottom-right-radius: ${wp(3)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${hp(3)}px;
`;

const TopContainerBottom = styled.View`
  height: ${hp(10)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StudioName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
`;

const StudioSlogan = styled.Text`
  font-size: 10px;
  color: ${colors.light};
`;

const ProfileContainer = styled.View`
  height: ${wp(30)}px;
  width: ${wp(30)}px;
  background-color: ${colors.white};
  border-top-left-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  align-self: center;
  position: absolute;
  bottom: ${hp(-5)}px;
  border: solid 2.5px ${colors.white};
  elevation: 3;
  overflow: hidden;
`;

const StudioDetailsContainer = styled.View`
  flex-direction: row;
  height: ${hp(13)}px;
  width: 100%;
  background-color: ${colors.white};
  position: absolute;
  bottom: 0px;
`;

const StudioDetailsContainerSub = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const NubmerTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.pink};
`;

const DetailsTitle = styled.Text`
  font-size: 10px;
  color: ${colors.mid};
`;

function StudioScreen({ navigation, language }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainContainer>
        <TopContainer>
          <TopContainerTop>
            <QrContainer>
              <Icon name="qrcode" color={colors.primary} size={35} />
            </QrContainer>
          </TopContainerTop>
          <TopContainerBottom>
            <StudioName>THE FITTNESS CLUB</StudioName>
            <StudioSlogan>We are perfect in what we do</StudioSlogan>
          </TopContainerBottom>
          <ProfileContainer>
            <Image style={styles.image} source={require("./../img/pic.jpg")} />
          </ProfileContainer>
        </TopContainer>
        <StudioDetailsContainer>
          <StudioDetailsContainerSub>
            <NubmerTitle>33</NubmerTitle>
            <DetailsTitle>Visits</DetailsTitle>
          </StudioDetailsContainerSub>
          <StudioDetailsContainerSub>
            <NubmerTitle>33</NubmerTitle>
            <DetailsTitle>Earned</DetailsTitle>
          </StudioDetailsContainerSub>
        </StudioDetailsContainer>
      </MainContainer>
      <StyledListItem icon="users" title="Visitors" />
      <StyledListItem icon="cog" title="Settings" />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: wp(30),
    width: "100%",
    resizeMode: "cover",
  },
});

const mapStateTopProps = ({ language }) => {
  return { language };
};
export default connect(mapStateTopProps)(StudioScreen);
