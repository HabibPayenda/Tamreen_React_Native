export default (state = true, action) => {
  switch (action.type) {
    case "loading":
      return action.payload;

    default:
      return state;
  }
};
