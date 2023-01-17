import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AppScreen from "../components/AppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { auth } from "../store/actions";
import { Input, Button } from "react-native-elements";
import colors from "../utils/colors";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().max(24).min(4).label("Username"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  password_confirmation: Yup.string().required().label("Password Confirmation"),
});

const { signUp } = auth;

function signupScreen({ signUp, navigation }) {
  const submitForm = (values) => {
    console.log(values);
    signUp(values);
    // navigation.navigate("confirmEmail");
  };

  //   useEffect(() => {
  //     submitForm();
  //   }, []);
  return (
    <AppScreen style={styles.mainContainer}>
      <Image style={styles.logo} source={require("../img/Logo.png")} />

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        onSubmit={(values) => submitForm(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <Input
              style={styles.input}
              placeholder="User Name"
              onChangeText={handleChange("username")}
              onBlur={() => setFieldTouched("username")}
              leftIcon={
                <Icon
                  name="user"
                  size={24}
                  color={colors.primary}
                  style={{ marginRight: 20 }}
                />
              }
              errorStyle={{ color: "red" }}
              errorMessage={touched.username ? errors.username : null}
            />
            <Input
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              leftIcon={
                <Icon
                  name="envelope"
                  size={24}
                  color={colors.primary}
                  style={{ marginRight: 12 }}
                />
              }
              errorStyle={{ color: "red" }}
              errorMessage={touched.email ? errors.email : null}
            />
            <Input
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              secureTextEntry
              leftIcon={
                <Icon
                  name="lock"
                  size={24}
                  color={colors.primary}
                  style={{ marginRight: 22 }}
                />
              }
              errorStyle={{ color: "red" }}
              errorMessage={touched.password ? errors.password : null}
            />
            <Input
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={handleChange("password_confirmation")}
              onBlur={() => setFieldTouched("password_confirmation")}
              secureTextEntry
              leftIcon={
                <Icon
                  name="lock"
                  size={24}
                  color={colors.primary}
                  style={{ marginRight: 22 }}
                />
              }
              errorStyle={{ color: "red" }}
              errorMessage={
                touched.password_confirmation
                  ? errors.password_confirmation
                  : null
              }
            />
            <Button
              onPress={handleSubmit}
              icon={{
                name: "arrow-right",
                size: 30,
                color: colors.primary,
              }}
              title="Sign Up"
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
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <View>
          <Text style={styles.option}>Alredy have an account?</Text>
        </View>
      </TouchableOpacity>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(5),
  },
  logo: {
    height: 124,
    width: 160,
    marginBottom: hp(5),
    alignSelf: "center",
  },
  option: {
    marginTop: hp(5),
    color: colors.primary,
  },
  input: {
    height: hp(4),
  },
});
export default connect(null, { signUp })(signupScreen);
