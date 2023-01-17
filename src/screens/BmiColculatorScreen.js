import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  ListItem,
  Divider,
  Image,
  Header,
  Text,
  Input,
  Button,
  CheckBox,
} from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";

import colors from "../utils/colors";
import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";
const validationSchema = Yup.object().shape({
  weight: Yup.number().required().label("Weight"),
  height: Yup.number().required().label("Height"),
});

function BmiColculatroScreen({ navigation, language }) {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [result, setResult] = useState(null);
  const [bmi, setBmi] = useState(0);
  const [gender, setGender] = useState(null);

  function countBmi({ age, height, weight }) {
    var p = [age, height, weight];
    if (male) {
      p.push("male");
      setGender("male");
    } else if (female) {
      setGender("female");
      p.push("female");
    }
    checkGender();
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    setBmi(Math.round(bmi));

    let result = "";
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "Obese";
    } else if (35 <= bmi) {
      result = "Extremely obese";
    }

    if (result === "Underweight" && language.bmiSentence == "pashto") {
      result = "لږ";
    } else if (result === "Healthy" && language.bmiSentence == "pashto") {
      result = "سالم";
    } else if (result === "Overweight" && language.bmiSentence == "pashto") {
      result = "زیات";
    } else if (result === "Obese" && language.bmiSentence == "pashto") {
      result = "ډېر زیات";
    } else if (
      result === "Extremely obese" &&
      language.bmiSentence == "pashto"
    ) {
      result = "تر اندازې وتلی";
    } else if (result === "Underweight" && language.bmiSentence == "dari") {
      result = "کم";
    } else if (result === "Healthy" && language.bmiSentence == "dari") {
      result = "سالم";
    } else if (result === "Overweight" && language.bmiSentence == "dari") {
      result = "اضافه";
    } else if (result === "Obese" && language.bmiSentence == "dari") {
      result = "خیلی اضافه";
    } else if (result === "Extremely obese" && language.bmiSentence == "dari") {
      result = "از حد نارمل ګذشته ";
    } else {
      result = result;
    }

    setResult(result);
  }

  const checkGender = () => {
    if (gender) {
      if (gender && gender === "male" && language.bmiSentence === "english") {
        setGender(gender);
      } else if (
        gender &&
        gender === "female" &&
        language.bmiSentence === "english"
      ) {
        setGender(gender);
      } else if (
        gender &&
        gender === "male" &&
        language.bmiSentence === "pashto"
      ) {
        setGender("نارینه");
      } else if (
        gender &&
        gender === "female" &&
        language.bmiSentence === "pashto"
      ) {
        setGender("ښځینه");
      } else if (
        gender &&
        gender === "male" &&
        language.bmiSentence === "dari"
      ) {
        setGender("مرد");
      } else if (
        gender &&
        gender === "female" &&
        language.bmiSentence === "dari"
      ) {
        setGender("خانم");
      } else {
        setGender(gender);
      }
    }
  };

  let resultSentence = ``;
  if (result && language.bmiSentence === "english") {
    resultSentence = `Your MBI is ${bmi}, and it's ${result} for a ${gender}`;
  } else if (result && language.bmiSentence === "pashto") {
    resultSentence = `ستاسو وزن ${result} دی.`;
  } else if (language.bmiSentence === "dari") {
    resultSentence = `وزن شما ${result} است.`;
  }

  return (
    <View style={styles.mainContainer}>
      <Header
        backgroundColor={colors.primary}
        leftComponent={<HeaderLeftComponent navigation={navigation} />}
        centerComponent={{
          text: language.bmiCalculator,
          style: { color: colors.light, fontWeight: "bold", fontSize: hp(2.8) },
        }}
        rightComponent={<HeaderRightComponent navigation={navigation} />}
      />
      <Formik
        initialValues={{ height: 0, weight: 0 }}
        onSubmit={(values) => countBmi(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerText}>Weight:</Text>
              <Input
                containerStyle={{ width: wp(30), height: hp(13) }}
                placeholder="Weight"
                onChangeText={handleChange("weight")}
                onBlur={() => setFieldTouched("weight")}
                errorStyle={{ color: "red" }}
                errorMessage={touched.weight ? errors.weight : null}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerText}>Height:</Text>

              <Input
                containerStyle={{ width: wp(30), height: hp(13) }}
                placeholder="Height"
                onChangeText={handleChange("height")}
                onBlur={() => setFieldTouched("height")}
                errorStyle={{ color: "red" }}
                errorMessage={touched.height ? errors.height : null}
              />
            </View>

            <CheckBox
              containerStyle={{ width: wp(40) }}
              center
              title="male"
              iconRight
              iconType="material"
              checkedIcon="done"
              uncheckedIcon="check"
              checkedColor={colors.primary}
              checked={male}
              onPress={() => {
                setMale(!male);
                setFemale(false);
              }}
            />
            <CheckBox
              containerStyle={{ width: wp(40) }}
              center
              title="female"
              iconRight
              iconType="material"
              checkedIcon="done"
              uncheckedIcon="check"
              checkedColor={colors.primary}
              checked={female}
              onPress={() => {
                setFemale(!female);
                setMale(false);
              }}
            />
            <Button
              onPress={handleSubmit}
              containerStyle={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.primary,
                marginTop: hp(4),
              }}
              style={{ backgroundColor: colors.primary }}
              title={language.check}
              type="solid"
              color={colors.primary}
              titleStyle={{ color: colors.light }}
              buttonStyle={{
                borderColor: colors.primary,
                borderWidth: 1,
                width: wp(30),
              }}
              iconContainerStyle={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            />
          </>
        )}
      </Formik>

      <View>
        <Text style={styles.option}>
          {resultSentence ? resultSentence : null}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  option: {
    marginTop: hp(5),
    color: colors.primary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: hp(3),
  },
});

const mapStateTopProps = ({ language }) => {
  return { language };
};

export default connect(mapStateTopProps)(BmiColculatroScreen);
