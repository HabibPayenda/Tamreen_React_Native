import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import signupScreen from "../screens/signupScreen";
import loginScreen from "../screens/loginScreen";
import EamilConfirmationScreen from "../screens/EamilConfirmationScreen";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="signup"
      component={signupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="login"
      component={loginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="confirmEmail"
      component={EamilConfirmationScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
