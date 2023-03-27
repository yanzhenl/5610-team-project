import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  administrator: {
    firstName: "William",
    lastName: "Lee",
    handle: "@williamlee",
    profilePicture: "../images/administrator.jpeg",
    bannerPicture: "../images/market-banner.jpeg",
    bio: "Passionate about connecting farmers with their community and providing consumers with access to fresh, locally grown produce. ",
    location: "Seattle, WA",
    dateOfBirth: "11/12/1989",
    dateJoined: "October 2012",
    followingCount: 110,
    followersCount: 58,
    editing: false,
  },
};

const administratorSlice = createSlice({
  name: "administrator",
  initialState,
  reducers: {},
});

export default administratorSlice.reducer;
