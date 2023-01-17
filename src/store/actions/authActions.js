import tamreenApi from "../../api/tamreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signUp = (values) => {
  return async (dispatch, getState) => {
    try {
      console.log(`values in signUp action is ${values.username}`);
      const response = await tamreenApi.post(
        "/users",
        {
          name: values.username,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Accept: "application/json",
          },
        }
      );

      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem(
        "userId",
        JSON.stringify(response.data.user.id)
      );
      await AsyncStorage.setItem(
        "randToken",
        JSON.stringify(response.data.randToken)
      );

      dispatch({ type: "signUp", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (values) => {
  return async (dispatch, getState) => {
    try {
      const response = await tamreenApi.post(
        "/users/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Accept: "application/json",
          },
        }
      );
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem(
        "userId",
        JSON.stringify(response.data.user.id)
      );
      dispatch({ type: "login", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const logOut = () => async (dispatch, getState) => {
  try {
    const response = await tamreenApi.post(
      "/users/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          // Accept: "application/json",
        },
      }
    );
    if (response.data.message === "LoggedOut") {
      console.log(`logOut response is : ${response.data.message}`);
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("userId");
      dispatch({ type: "logout", payload: null });
    }
    console.log(response.data.message);
  } catch (error) {
    console.log(`Error in logOut Action is : ${error.message}`);
  }
};

export const loadUser = (id) => async (dispatch, getState) => {
  try {
    const response = await tamreenApi.get(`/users/${id}`);

    // console.log(response.data.user);
    dispatch({ type: "loadUser", payload: response.data.user });
  } catch (error) {
    console.log(`Error in loadUser is: ${error}`);
  }
};

export const confirmEmail = (randToken) => async (dispatch, getState) => {
  try {
    const AsyncRandToken = await AsyncStorage.getItem("randToken");
    const confirmed = AsyncRandToken === JSON.stringify(randToken);
    dispatch({ type: "confirmEmail", payload: confirmed });
  } catch (error) {}
};

export const updateUser = (values, id) => async (dispatch, getState) => {
  try {
    const response = await tamreenApi.patch(
      `/users/${id}`,
      { ...values },
      {
        headers: {
          "Content-Type": "application/json",
          // Accept: "application/json",
        },
      }
    );
    console.log(response.data.user);
    dispatch({ type: "updateUser", payload: response.data.user });
  } catch (error) {
    console.log(`Error in updateUser Action is: ${error}`);
  }
};
