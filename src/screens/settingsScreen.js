import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import AppScreen from "../components/AppScreen";
import { ListItem, Divider, Image, Header } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { language } from "../store/actions";
const { changeToDari, changeToPashto, changeToEnglish } = language;
import { pashto, dari, english } from "../utils/language";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";

function settingsScreen({
  navigation,
  language,
  changeToDari,
  changeToPashto,
  changeToEnglish,
  themeDark,
  user,
}) {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "پښتو", value: "pashto" },
    { label: "دری", value: "dari" },
    { label: "English", value: "english" },
  ]);

  const [apiRespose, setApiResponse] = useState(null);

  const selectImage = async () => {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let response = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(`Response in the Select Image is : ${response}`);
    if (response.cancelled) {
      return;
    }

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = response.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // // Assume "photo" is the name of the form field the server expects
    formData.append("photo", { uri: localUri, name: filename, type });

    try {
      const token = await AsyncStorage.getItem("token");
      console.log(user.id);

      return await fetch(
        `http://192.168.43.211:8000/api/photos/${user.user.id}`,
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      setApiResponse(response.data);
    } catch (error) {
      console.log(`Error in Fetching: ${error.message}`);
    }
  };

  const checkLanguage = async () => {
    try {
      const language = await AsyncStorage.getItem("language");
      setValue(language);
    } catch (error) {
      console.log(`Error in checkLanguage in settings is: ${error}`);
    }
  };

  useEffect(() => {
    checkLanguage();

    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, [language]);

  const changeLanguage = (value) => {
    setValue(value);
    switch (value) {
      case "pashto":
        changeToPashto(pashto);
        break;
      case "dari":
        changeToDari(dari);
        break;
      case "english":
        changeToEnglish(english);
        break;

      default:
        changeToEnglish(english);
    }
  };
  return (
    <View
      style={{
        backgroundColor: themeDark ? colors.themeDark : colors.light,
        flex: 1,
      }}
    >
      <Header
        backgroundColor={themeDark ? colors.themeDark4 : colors.primary}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        centerComponent={{
          text: language.settings,
          style: {
            color: themeDark ? colors.light : colors.light,
            fontWeight: "bold",
            fontSize: hp(2.8),
          },
        }}
        rightComponent={<HeaderRightComponent navigation={navigation} />}
      />
      <TouchableOpacity onPress={selectImage}>
        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: themeDark ? colors.themeDark2 : colors.white,
          }}
        >
          <Icon
            name="picture-o"
            color={themeDark ? colors.secondary : colors.primary}
            size={25}
          />
          <ListItem.Content>
            <ListItem.Title
              style={[
                styles.title,
                { color: themeDark ? colors.light : colors.dark },
              ]}
            >
              {language.changeProfilePicture}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EditeUsername")}>
        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: themeDark ? colors.themeDark2 : colors.white,
          }}
        >
          <Icon
            name="user"
            color={themeDark ? colors.secondary : colors.primary}
            size={25}
          />
          <ListItem.Content>
            <ListItem.Title
              style={[
                styles.title,
                { color: themeDark ? colors.light : colors.dark },
              ]}
            >
              {language.changeUserName}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EditeEmail")}>
        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: themeDark ? colors.themeDark2 : colors.white,
          }}
        >
          <Icon
            name="envelope"
            color={themeDark ? colors.secondary : colors.primary}
            size={25}
          />
          <ListItem.Content>
            <ListItem.Title
              style={[
                styles.title,
                { color: themeDark ? colors.light : colors.dark },
              ]}
            >
              {language.changeEmail}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EditeFacebookId")}>
        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: themeDark ? colors.themeDark2 : colors.white,
          }}
        >
          <Icon
            name="facebook"
            color={themeDark ? colors.secondary : colors.primary}
            size={25}
          />
          <ListItem.Content>
            <ListItem.Title
              style={[
                styles.title,
                { color: themeDark ? colors.light : colors.dark },
              ]}
            >
              {language.changeFacebookId}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EditeSportsType")}>
        <ListItem
          bottomDivider
          containerStyle={{
            backgroundColor: themeDark ? colors.themeDark2 : colors.white,
          }}
        >
          <Icon
            name="th"
            color={themeDark ? colors.secondary : colors.primary}
            size={25}
          />
          <ListItem.Content>
            <ListItem.Title
              style={[
                styles.title,
                { color: themeDark ? colors.light : colors.dark },
              ]}
            >
              {language.changeSportType}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      <DropDownPicker
        style={{
          borderWidth: 0,
          backgroundColor: themeDark ? colors.themeDark3 : colors.white,
          borderRadius: 0,
        }}
        addCustomItem={
          <Icon
            name="map-marker"
            color={themeDark ? colors.secondary : colors.primary}
            size={25}
          />
        }
        arrowIconStyle={{
          backgroundColor: themeDark ? colors.secondary : colors.white,
        }}
        tickIconStyle={{
          backgroundColor: themeDark ? colors.secondary : colors.light,
        }}
        textStyle={{ color: themeDark ? colors.light : colors.dark }}
        placeholderStyle={{ color: themeDark ? colors.light : colors.dark }}
        arrowIconContainerStyle={{
          borderColor: themeDark ? colors.secondary : colors.dark,
        }}
        modalContentContainerStyle={{
          backgroundColor: themeDark ? colors.themeDark3 : colors.light,
        }}
        dropDownContainerStyle={{
          backgroundColor: themeDark ? colors.themeDark3 : colors.light,
        }}
        showTickIcon
        showBadgeDot
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(value) => changeLanguage(value)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("EditeLocation")}>
        <ListItem
          topDivider
          containerStyle={{
            backgroundColor: themeDark ? colors.themeDark2 : colors.white,
          }}
        >
          <Icon
            name="map-marker"
            color={themeDark ? colors.secondary : colors.primary}
            size={25}
          />
          <ListItem.Content>
            <ListItem.Title
              style={[
                styles.title,
                { color: themeDark ? colors.light : colors.dark },
              ]}
            >
              {language.changeLocation}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({});

const mapStateToProps = ({ language, themeDark, user }) => {
  return { language, themeDark, user };
};

export default connect(mapStateToProps, {
  changeToDari,
  changeToPashto,
  changeToEnglish,
})(settingsScreen);
