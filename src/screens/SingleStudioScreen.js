import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "./../utils/colors";
import MainTitle from "./../components/MainTitle";

const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const TopContainer = styled.View`
  position: relative;
  height: ${hp(40)}px;
  margin-bottom: ${hp(8)}px;
`;

const ImageContainer = styled.View`
  height: ${hp(40)}px;
  width: ${wp(100)}px;
  background-color: ${colors.primary};
  border-bottom-right-radius: ${wp(10)}px;
  overflow: hidden;
`;

const ImageSubContainer = styled.View`
  height: ${hp(18)}px;
  width: ${wp(25)}px;
  background-color: ${colors.primary};
  position: absolute;
  bottom: ${hp(-8)}px;
  left: ${wp(10)}px;
  border-top-left-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const SubscribeButton = styled.View`
  height: ${hp(6.5)}px;
  width: ${wp(40)}px;
  padding: ${wp(5)}px;
  background-color: ${colors.pink};
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: ${hp(3)}px;
  border-top-left-radius: ${wp(3)}px;
  border-bottom-right-radius: ${wp(3)}px;
`;

const StudioDetailsContainer = styled.View`
  flex-direction: row;
  height: ${hp(10)}px;
  width: ${wp(50)}px;
  background-color: ${colors.white};
  align-self: flex-end;
  margin-right: ${wp(10)}px;
  align-items: center;
  justify-content: space-around;
  margin-top: ${hp(1)}px;
`;

const StudioDetailsItem = styled.View`
  height: 80%;
  width: ${wp(15)}px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  elevation: 2;
  border-top-left-radius: ${wp(2)}px;
  border-bottom-right-radius: ${wp(2)}px;
`;

function SingleStudioScreen({ navigation }) {
  return (
    <MainContainer>
      <TopContainer>
        <ImageSubContainer>
          <Text style={{ color: colors.white, fontSize: 26 }}>4.7</Text>
          <Text style={{ color: colors.white, fontWeight: "bold" }}>
            Rating
          </Text>
        </ImageSubContainer>
        <ImageContainer>
          <Image style={styles.image} source={require("./../img/pic.jpg")} />
        </ImageContainer>
        <StudioDetailsContainer>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("StudioLocation")}
          >
            <StudioDetailsItem>
              <Entypo name="location" size={22} color={colors.primary} />
              <Text style={{ fontSize: 10, color: colors.dark }}>Location</Text>
            </StudioDetailsItem>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("StudioTime")}
          >
            <StudioDetailsItem>
              <AntDesign name="clockcircleo" size={22} color={colors.primary} />
              <Text style={{ fontSize: 10, color: colors.dark }}>Time</Text>
            </StudioDetailsItem>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("StudioSports")}
          >
            <StudioDetailsItem>
              <MaterialIcons
                name="sports-basketball"
                size={22}
                color={colors.primary}
              />
              <Text style={{ fontSize: 10, color: colors.dark }}>Sports</Text>
            </StudioDetailsItem>
          </TouchableWithoutFeedback>
        </StudioDetailsContainer>
      </TopContainer>
      <View style={{ marginLeft: wp(7.5) }}>
        <MainTitle title="New Studio" />
      </View>
      <View>
        <Text style={{ marginHorizontal: 10, color: colors.dark }}>
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
          ut aliquip
        </Text>
      </View>
      <SubscribeButton>
        <Text style={{ color: colors.white, fontSize: 18 }}>Subscribe</Text>
      </SubscribeButton>
    </MainContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    height: hp(40),
    width: "100%",
    resizeMode: "cover",
  },
});
export default SingleStudioScreen;
