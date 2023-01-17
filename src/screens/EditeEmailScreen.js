import React from "react";
import { StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Header } from "react-native-elements";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { connect } from "react-redux";
import { updateUser } from "../store/actions/authActions";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("email").email(),
});

function EditeEmailScreen({ navigation, user, updateUser, language }) {
  const submitForm = (values) => {
    const id = user.id;
    updateUser(values, id);
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <Header
          backgroundColor={colors.primary}
          leftComponent={<HeaderLeftComponent navigation={navigation} />}
          centerComponent={{
            text: language.changeEmail,
            style: { color: "#fff" },
          }}
          rightComponent={<HeaderRightComponent navigation={navigation} />}
        />

        <Formik
          initialValues={{
            email: "",
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
                inputContainerStyle={styles.inputContainer}
                style={styles.input}
                placeholder={language.newEmail}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                leftIcon={
                  <Icon
                    name="envelope"
                    size={24}
                    color={colors.primary}
                    style={{ marginRight: 20 }}
                  />
                }
                errorStyle={{ color: "red" }}
                errorMessage={touched.email ? errors.email : null}
              />

              <Button
                containerStyle={styles.button}
                onPress={handleSubmit}
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
            </>
          )}
        </Formik>
      </View>
    </>
  );
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
    height: hp(7),
  },
  inputContainer: {
    marginTop: hp(10),
  },
  button: {
    paddingTop: hp(0),
  },
});

const mapStateToProps = ({ user, language }) => {
  return { user, language };
};
export default connect(mapStateToProps, { updateUser })(EditeEmailScreen);
