export default (state = {}, action) => {
  switch (action.type) {
    case "pashto":
      return action.payload;
    case "dari":
      return action.payload;
    case "english":
      return action.payload;

    default:
      return state;
  }
};
