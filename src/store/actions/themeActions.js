import AsyncStorage from "@react-native-async-storage/async-storage";

export const changeToDark = (action) => async (dispatch, getState) => {
  try {
    await AsyncStorage.setItem("theme", "dark");
    dispatch({ type: "changeToDark", payload: action });
  } catch (error) {
    console.log(`Error in changeToDark is: ${error}`);
  }
};
export const changeToLight = (action) => async (dispatch, getState) => {
  try {
    await AsyncStorage.setItem("theme", "dark");
    dispatch({ type: "changeToLight", payload: action });
  } catch (error) {
    console.log(`Error in changeToDark is: ${error}`);
  }
};
