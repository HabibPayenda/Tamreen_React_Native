export default (state = [], action) => {
    switch (action.type) {
      case "getAllHealthTopics":
        return action.payload;
  
      default:
        return state;
    }
  };
  