import { combineReducers } from "redux";
import authReducer from "./authReducer";
import themeReducer from "./themeReducer";
import languageReducer from "./languageReducer";
import locationReducer from "./locationReducer";
import healthTopics from "./healthTopicsReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  user: authReducer,
  themeDark: themeReducer,
  language: languageReducer,
  userLocation: locationReducer,
  healthTopics: healthTopics,
  loading: loadingReducer,
});
