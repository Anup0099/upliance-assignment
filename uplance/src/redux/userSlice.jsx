import { jsx } from "@emotion/react";
import { createSlice } from "@reduxjs/toolkit";

const generateUserId = () => `USER-${Math.floor(1000 + Math.random() * 9000)}`;
const getInitialState = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser
    ? JSON.parse(storedUser)
    : {
        id: generateUserId(),
        name: "",
        email: "",
        phone: "",
        address: "",
        bio: "",
      };
};
const userSilce = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    setUserData: (state, action) => {
      // state.name = action.payload.name;
      // state.email = action.payload.email;
      // state.phone = action.payload.phone;
      // state.address = action.payload.address;
      Object.assign(state, action.payload);
      localStorage.setItem("user", JSON.stringify(state));
    },
    ressetUserData: () => {
      const newUser = {
        id: generateUserId(),
        name: "",
        email: "",
        phone: "",
        address: "",
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      return newUser;
    },
    setUserBio: (state, action) => {
      state.bio = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});
export const { setUserData, ressetUserData,setUserBio } = userSilce.actions;
export default userSilce.reducer;
