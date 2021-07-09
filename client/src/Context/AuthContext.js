import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "60e19bb51feedadb33aed0fb",
    profilePicture: "1.png",
    coverPicture: "17.png",
    followers: [],
    following: [],
    isAdmin: false,
    username: "following",
    email: "user4@gmail.com",
    password: "$2b$10$RmFWEkag4p/4pSPIAer6duMid5chamZ0ET5DvwQrhWdyn2MInWXwS",
    createdAt: { $date: "2021-07-04T11:29:57.565Z" },
    updatedAt: { $date: "2021-07-04T11:39:18.786Z" },
    __v: 0,
    city: "godhra",
    relationship: "1",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
