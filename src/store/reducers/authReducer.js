export default (state = null, action) => {
  switch (action.type) {
    case "signUp":
      return action.payload;

    case "login":
      return action.payload;

    case "logout":
      return action.payload;

    case "loadUser":
      return action.payload;
    case "updateUser":
      return action.payload;

    case "confirmEmail":
      return { ...state, confirmed: action.payload };

    default:
      return state;
  }
};
