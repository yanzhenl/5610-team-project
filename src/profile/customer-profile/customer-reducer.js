import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: {
    firstName: "Emily",
    lastName: "Brown",
    handle: "@emilybrown",
    profilePicture: "../images/emily.webp",
    bannerPicture: "../../images/emily-banner.jpeg",
    bio: "Love the fresh produce, unique goods, and sense of community that I find there.",
    location: "Los Angeles, CA",
    dateOfBirth: "10/12/1993",
    dateJoined: "March 2018",
    followingCount: 123,
    followersCount: 10,
    editing: false,
  },
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
});

export default customerSlice.reducer;
