import React from "react";
import { StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button } from "react-native-elements";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import colors from "../utils/colors";

const validationSchema = Yup.object().shape({
  randToken: Yup.string().required().max(4).min(4).label("Code"),
});

function EamilConfirmationScreen(props) {
  return (
    <>
      <AppScreen>
        <Formik
          initialValues={{
            randToken: "",
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
                style={styles.input}
                placeholder="User Name"
                onChangeText={handleChange("randToken")}
                onBlur={() => setFieldTouched("randToken")}
                leftIcon={
                  <Icon
                    name="user"
                    size={24}
                    color={colors.primary}
                    style={{ marginRight: 20 }}
                  />
                }
                errorStyle={{ color: "red" }}
                errorMessage={touched.randToken ? errors.randToken : null}
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
      </AppScreen>
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
});
export default EamilConfirmationScreen;
