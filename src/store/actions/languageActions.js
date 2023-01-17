import AsyncStorage from "@react-native-async-storage/async-storage";

export const changeToPashto = (pashto) => async (dispatch, getState) => {
  try {
    AsyncStorage.setItem("language", "pashto");
    dispatch({ type: "pashto", payload: pashto });
  } catch (error) {
    console.log(`Error in pashto action is: ${error}`);
  }
};
export const changeToDari = (dari) => async (dispatch, getState) => {
  try {
    AsyncStorage.setItem("language", "dari");

    dispatch({ type: "dari", payload: dari });
  } catch (error) {
    console.log(`Error in dari action is: ${error}`);
  }
};

export const changeToEnglish = (english) => async (dispatch, getState) => {
  try {
    AsyncStorage.setItem("language", "english");

    dispatch({ type: "english", payload: english });
  } catch (error) {
    console.log(`Error in dari action is: ${error}`);
  }
};
