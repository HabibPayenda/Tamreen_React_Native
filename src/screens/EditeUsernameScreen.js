import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppScreen from "../components/AppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { FastField, Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Header } from "react-native-elements";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AwesomeAlert from "react-native-awesome-alerts";

import { connect } from "react-redux";
import { auth } from "../store/actions";
const { updateUser } = auth;

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";
import CheckMark from "../components/CheckMark";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(24).min(4).label("Name"),
});

function EditeUsernameScreen({ navigation, updateUser, user, language }) {
  const submitForm = (values) => {
    const name = values.name;
    const id = user.id;
    updateUser(values, id);
  };

  const [showAlert, setShowAlert] = useState(false);
  const [animVisible, setAnimVisible] = useState(false);

  const showAlertBox = () => {
    setShowAlert(true);
  };

  const hideAlertBox = () => {
    setShowAlert(false);
  };
  const showAnimation = () => {
    setAnimVisible(true);
    setTimeout(() => {
      setAnimVisible(false);
    }, 1200);
  };

  if (!animVisible) {
    return (
      <>
        <View style={styles.mainContainer}>
          <Header
            backgroundColor={colors.primary}
            leftComponent={<HeaderLeftComponent navigation={navigation} />}
            centerComponent={{
              text: language.changeUserName,
              style: { color: "#fff" },
            }}
            rightComponent={<HeaderRightComponent navigation={navigation} />}
          />

          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={(values) => submitForm(values)}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <Input
                  label={language.newUserName}
                  inputContainerStyle={styles.inputContainer}
                  style={styles.input}
                  placeholder={language.newUsername}
                  onChangeText={handleChange("name")}
                  onBlur={() => setFieldTouched("name")}
                  leftIcon={
                    <Icon
                      name="user"
                      size={24}
                      color={colors.primary}
                      style={{ marginRight: 20 }}
                    />
                  }
                  errorStyle={{ color: "red" }}
                  errorMessage={touched.name ? errors.name : null}
                />

                <Button
                  containerStyle={styles.button}
                  onPress={() => showAlertBox()}
                  icon={{
                    name: "arrow-right",
                    size: 30,
                    color: colors.primary,
                  }}
                  title={language.change}
                  type="outline"
                  color={colors.primary}
                  titleStyle={{ color: colors.primary }}
                  buttonStyle={{
                    borderColor: colors.primary,
                    borderWidth: 1,
                    width: 200,
                  }}
                  iconContainerStyle={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                />
                <AwesomeAlert
                  contentContainerStyle={{ backgroundColor: colors.primary }}
                  titleStyle={{ color: colors.light }}
                  messageStyle={{ color: colors.light }}
                  show={showAlert}
                  showProgress={false}
                  title={language.changingUserName}
                  message={language.areYouSure}
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showCancelButton={true}
                  showConfirmButton={true}
                  cancelText={language.noCancel}
                  confirmText={language.yesIAmSure}
                  confirmButtonColor={colors.light}
                  cancelButtonColor={colors.light}
                  confirmButtonTextStyle={{ color: colors.primary }}
                  cancelButtonTextStyle={{ color: colors.red }}
                  onCancelPressed={() => {
                    hideAlertBox();
                  }}
                  onConfirmPressed={() => {
                    handleSubmit();
                    hideAlertBox();
                    showAnimation();
                  }}
                />
              </>
            )}
          </Formik>
        </View>
      </>
    );
  } else {
    return (
      <AppScreen>
        <CheckMark show={animVisible} />
      </AppScreen>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(5),
  },
  logo: {
    height: hp(18),
    width: wp(42),
    marginBottom: hp(5),
  },
  option: {
    marginTop: hp(3),
    color: colors.primary,
  },
  input: {
    height: hp(1),
  },
  inputContainer: {
    marginTop: hp(0),
  },
  button: {
    paddingTop: hp(0),
  },
});

const mapStateToProps = ({ user, language }) => {
  return { user, language };
};
export default connect(mapStateToProps, { updateUser })(EditeUsernameScreen);
