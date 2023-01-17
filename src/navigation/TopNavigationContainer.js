import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./mainNavigation";
import StackNavigator from "./authNavigation";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TopNavigationContainer({ token, confirmed }) {
  const [local, setLocal] = useState(false);
  const [isToken, setIsToken] = useState(null);
  const [auth, setAuth] = useState(false);
  const getToken = async () => {
    const localToken = await AsyncStorage.getItem("token");
    const dToken = localToken !== null ? true : false;
    dToken === true ? setLocal(true) : setLocal(false);
  };
  getToken();

  useEffect(() => {
    token ? setIsToken(token) : null;
  });
  if (local) {
    return (
      <NavigationContainer>
        <DrawerNavigator setLocal={setLocal} />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        {isToken ? <DrawerNavigator /> : <StackNavigator />}
      </NavigationContainer>
    );
  }
}
const mapStateToProps = ({ user }) => {
  const token = user ? user.token : null;
  const confirmed = user ? user.confirmed : null;
  return { token, confirmed };
};

export default connect(mapStateToProps)(TopNavigationContainer);
