const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return action.token;
    case "DELETE":
      return "";
    default:
      return state;
  }
};

export default reducer;
