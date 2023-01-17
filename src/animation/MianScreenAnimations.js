import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SkeletonContent from "react-native-skeleton-content";

import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const HeaderContainer = styled.View`
  width: 100%;
  height: ${hp(15)}px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const LocationText = styled.View`
  width: ${wp(30)}px;
  height: ${hp(2)}px;
`;

const ProfilePicture = styled.View`
  height: ${wp(15)}px;
  width: ${wp(15)}px;
  border-top-left-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  overflow: hidden;
`;

const HumbergerMenu = styled.View`
  height: ${wp(8)}px;
  width: ${wp(8)}px;
  margin-bottom: ${hp(5)}px;
  margin-top: ${hp(5)}px;
`;

const WelcomeMessage = styled.View`
  height: ${hp(7)}px;
  width: ${wp(80)}px;
  margin-bottom: ${hp(5)}px;
`;

const TitleText = styled.View`
  height: ${hp(2)}px;
  width: ${wp(40)}px;
  margin-bottom: ${hp(3)}px;
  margin-left: ${wp(5)}px;
`;

const SmallCardsContainer = styled.View`
  height: ${hp(31)}px;
  flex-direction: row;
`;

const SmallCard = styled.View`
  height: ${hp(30)}px;
  width: ${wp(45)}px;
  border-top-left-radius: ${wp(12)}px;
  border-bottom-right-radius: ${wp(12)}px;
  overflow: hidden;
  margin-left: ${wp(2)}px;
  margin-right: ${wp(1)}px;
`;

const AddContainer = styled.View`
  height: ${hp(20)}px;
  width: ${wp(99)}px;
  margin-top: ${hp(3)}px;
  border-top-left-radius: ${wp(5)}px;
  border-bottom-right-radius: ${wp(5)}px;
  overflow: hidden;
  align-self: center;
  margin-bottom: ${hp(3)}px;
`;

const LargCard = styled.View`
  height: ${hp(23)}px;
  width: ${wp(80)}px;
  margin-left: ${wp(2)}px;
  margin-right: ${wp(1)}px;
  border-top-left-radius: ${wp(10)}px;
  border-bottom-right-radius: ${wp(10)}px;
  overflow: hidden;
`;

function MianScreenAnimations(props) {
  return (
    <View style={{ width: wp(95), flex: 1 }}>
      <HeaderContainer>
        <HumbergerMenu>
          <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
            isLoading={true}
            animationDirection="horizontalRight"
            layout={[
              { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
            ]}
          />
        </HumbergerMenu>
        <LocationText>
          <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
            isLoading={true}
            animationDirection="horizontalRight"
            layout={[
              { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
            ]}
          />
        </LocationText>

        <ProfilePicture>
          <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
            isLoading={true}
            animationDirection="horizontalRight"
            layout={[
              { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
            ]}
          />
        </ProfilePicture>
      </HeaderContainer>

      <WelcomeMessage>
        <SkeletonContent
          containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
          isLoading={true}
          animationDirection="horizontalRight"
          layout={[
            { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
          ]}
        />
      </WelcomeMessage>
      <TitleText>
        <SkeletonContent
          containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
          isLoading={true}
          animationDirection="horizontalRight"
          layout={[
            { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
          ]}
        />
      </TitleText>

      <SmallCardsContainer>
        <SmallCard>
          <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
            isLoading={true}
            animationDirection="horizontalRight"
            layout={[
              { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
            ]}
          />
        </SmallCard>
        <SmallCard>
          <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
            isLoading={true}
            animationDirection="horizontalRight"
            layout={[
              { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
            ]}
          />
        </SmallCard>
      </SmallCardsContainer>
      <AddContainer>
        <SkeletonContent
          containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
          isLoading={true}
          animationDirection="horizontalRight"
          layout={[
            { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
          ]}
        />
      </AddContainer>
      <TitleText>
        <SkeletonContent
          containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
          isLoading={true}
          animationDirection="horizontalRight"
          layout={[
            { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
          ]}
        />
      </TitleText>
      <LargCard>
        <SkeletonContent
          containerStyle={{ flex: 1, width: "100%", margin: 0, padding: 0 }}
          isLoading={true}
          animationDirection="horizontalRight"
          layout={[
            { key: "someId", width: "100%", height: "100%", marginBottom: 6 },
          ]}
        />
      </LargCard>
    </View>
  );
}
const styles = StyleSheet.create({});
export default MianScreenAnimations;
