import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import colors from "./../utils/colors";
import MainTitle from "./../components/MainTitle";

const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const TopContainer = styled.View`
  position: relative;
  height: ${hp(30)}px;
  margin-bottom: ${hp(3)}px;
`;

const ImageContainer = styled.View`
  height: ${hp(30)}px;
  width: ${wp(100)}px;
  background-color: ${colors.primary};
  border-bottom-right-radius: ${wp(10)}px;
  overflow: hidden;
`;

const ImageSubContainer = styled.View`
  height: ${hp(5)}px;
  width: ${wp(60)}px;
  background-color: ${colors.primary};
  position: absolute;
  bottom: ${hp(-2)}px;
  left: ${wp(4)}px;
  border-top-left-radius: ${wp(3)}px;
  border-bottom-right-radius: ${wp(3)}px;
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
  margin-top: ${hp(2)}px;
  border-top-left-radius: ${wp(3)}px;
  border-bottom-right-radius: ${wp(3)}px;
  position: absolute;
  bottom: ${hp(2)}px;
`;

const ButtonBack = styled.View`
  height: ${hp(10)}px;
  width: 100%;
  background-color: ${colors.white};
`;

function SingleHealthTopicScreen(props) {
  return (
    <MainContainer>
      <TopContainer>
        <ImageSubContainer>
          <Text style={{ color: colors.white, fontSize: 18 }}>
            Health Topic
          </Text>
        </ImageSubContainer>
        <ImageContainer>
          <Image style={styles.image} source={require("./../img/health.jpg")} />
        </ImageContainer>
      </TopContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{ marginHorizontal: 10, color: colors.dark }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
            nisl ut aliquip commodo consequat. Duis autem vel eum iriure dolor
            in hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip
          </Text>
        </View>
      </ScrollView>
      <ButtonBack />
      <SubscribeButton>
        <Text style={{ color: colors.white, fontSize: 18 }}>Save</Text>
      </SubscribeButton>
    </MainContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    height: hp(30),
    width: "100%",
    resizeMode: "cover",
  },
});
export default SingleHealthTopicScreen;
