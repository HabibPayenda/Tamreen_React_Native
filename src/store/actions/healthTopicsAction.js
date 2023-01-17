import tamreenApi from "../../api/tamreen";

export const getAllHealthTopics = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "loading", payload: true });
    const response = await tamreenApi.get(`/healthTopics`, {
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
    });
    dispatch({
      type: "getAllHealthTopics",
      payload: response.data.healthTopics,
    });
    dispatch({ type: "loading", payload: false });
  } catch (error) {
    console.log(`Error in getAllHealthTopics is : ${error}`);
  }
};

// export const deleteHealthTopic =
//   ({ healthtopic_id }) =>
//   async (dispatch, getState) => {
//     try {
//       const response = await tamreenApi.delete(
//         `/healthTopics/${healthtopic_id}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             // Accept: "application/json",
//           },
//         }
//       );
//       dispatch({ type: "deleteHealthTopic", payload: response.data.id });
//     } catch (error) {
//       console.log(`Error in deleteHealthTopic is ${error}`);
//     }
//   };
// export const login =
//   ({ email, password }) =>
//   async (dispatch, getState) => {
//     try {
//       const response = await tamreenApi.post(
//         `/employesLogin`,
//         { email: email, password: password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             // Accept: "application/json",
//           },
//         }
//       );
//       localStorage.setItem("token", response.data.token);
//       console.log(`Token in login is : ${response.data.token}`);
//       dispatch({ type: "loginEmploye", payload: response.data.employe });
//     } catch (error) {
//       console.log(`Error in LoginEmplyee is ${error}`);
//     }
//   };
// export const register =
//   ({ tazkira_Id, email, password }) =>
//   async (dispatch, getState) => {
//     try {
//       const response = await tamreenApi.post(
//         `/employesRegister`,
//         { email: email, password: password, tazkira_id: tazkira_Id },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             // Accept: "application/json",
//           },
//         }
//       );
//       localStorage.setItem("token", response.data.token);
//       dispatch({ type: "loginEmploye", payload: response.data.employe });
//     } catch (error) {
//       console.log(`Error in LoginEmplyee is ${error}`);
//     }
//   };
// export const logOut = () => async (dispatch, getState) => {
//   try {
//     localStorage.removeItem("token");
//     dispatch({ type: "loginEmploye", payload: {} });
//   } catch (error) {
//     console.log(`Error in LoginEmplyee is ${error}`);
//   }
// };
