const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        erroe: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        erroe: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        erroe: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
