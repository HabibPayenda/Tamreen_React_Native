import {
  signUp,
  login,
  logOut,
  loadUser,
  confirmEmail,
  updateUser,
} from "./authActions";
import { changeToDark, changeToLight } from "./themeActions";
import {
  changeToDari,
  changeToPashto,
  changeToEnglish,
} from "./languageActions";

import { addLocation } from "./locationAction";

export const auth = {
  signUp,
  login,
  logOut,
  loadUser,
  confirmEmail,
  updateUser,
};

export const theme = {
  changeToDark,
  changeToLight,
};

export const language = {
  changeToPashto,
  changeToDari,
  changeToEnglish,
};

export const location = {
  addLocation,
};
