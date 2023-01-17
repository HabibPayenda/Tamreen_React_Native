export default (state = { lat: 0, long: 0 }, action) => {
  switch (action.type) {
    case "addLocation":
      return action.payload;

    default:
      return state;
  }
};
