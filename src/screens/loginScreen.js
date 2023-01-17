import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { connect } from "react-redux";
import { auth } from "../store/actions";

import AppScreen from "../components/AppScreen";
import colors from "../utils/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const { login } = auth;

function loginScreen({ navigation, login }) {
  const submitForm = (values) => {
    console.log(values);
    login(values);
  };
  return (
    <AppScreen style={styles.mainContainer}>
      <Image style={styles.logo} source={require("../img/Logo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => submitForm(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <Input
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
            <Button
              onPress={handleSubmit}
              icon={{
                name: "arrow-right",
                size: 30,
                color: colors.primary,
              }}
              title="Sign In"
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
      <TouchableOpacity onPress={() => navigation.navigate("signup")}>
        <View>
          <Text style={styles.option}>Create a new account!</Text>
        </View>
      </TouchableOpacity>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(10),
  },
  logo: {
    height: 120,
    width: 155,
    marginBottom: hp(4),
  },
  option: {
    marginTop: hp(5),
    color: colors.primary,
  },
});
export default connect(null, { login })(loginScreen);
