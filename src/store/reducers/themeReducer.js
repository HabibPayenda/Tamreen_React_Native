export default (state = false, action) => {
  switch (action.type) {
    case "changeToDark":
      return action.payload;
    case "changeToLight":
      return action.payload;

    default:
      return state;
  }
};
