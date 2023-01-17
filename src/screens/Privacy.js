import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
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
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";

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
  justify-content: center;
  align-items: center;
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
  justify-content: center;
`;

const StudioDetailsContainer = styled.View`
  flex-direction: row;
  height: ${hp(13)}px;
  width: 100%;
  background-color: ${colors.white};
  position: absolute;
  bottom: 0px;
  justify-content: flex-start;
  align-items: center;
  margin-left: ${wp(4)}px;
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

const WhoWeAreText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.pink};
  margin-top: ${hp(5)}px;
`;

function Privacy({ navigation, language }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MainContainer>
        <TopContainer>
          <TopContainerBottom>
            <StudioName>WE VALUE YOUR PRIVACY</StudioName>
          </TopContainerBottom>
          <ProfileContainer>
            <Image style={styles.image} source={require("./../img/Logo.png")} />
          </ProfileContainer>
        </TopContainer>
        <StudioDetailsContainer>
          <WhoWeAreText> Be aware !</WhoWeAreText>
        </StudioDetailsContainer>
      </MainContainer>
      <ScrollView
        style={{
          margin: 5,
          borderRadius: wp(5),
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{ marginHorizontal: 10, marginTop: 10, color: colors.dark }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
          ut aliquip Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi. Lorem ipsum dolor sit amet sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
          wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: "88%",
    width: "100%",
    resizeMode: "cover",
  },
});

const mapStateTopProps = ({ language }) => {
  return { language };
};
export default connect(mapStateTopProps)(Privacy);
