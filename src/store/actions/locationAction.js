import tamreenApi from "../../api/tamreen";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const addLocation = (values, id) => {
  return async (dispatch, getState) => {
    try {
      console.log(`values in addLocation action is ${values.lat}`);

      const response = await tamreenApi.post(
        `/location/user/${id}`,
        {
          lat: values.lat,
          long: values.long,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Accept: "application/json",
          },
        }
      );

      dispatch({ type: "addLocation", payload: response.data.location });
    } catch (error) {
      console.log(`Error in addLocation Action is ${error}`);
    }
  };
};
