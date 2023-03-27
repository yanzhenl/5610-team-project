import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  farmer: {
    firstName: "Mark",
    lastName: "Thompson",
    handle: "@markthompson",
    profilePicture: "../images/farmer.jpeg",
    bannerPicture: "../images/farmer-banner.jpeg",
    bio: "I'm a third-generation farmer from the Midwest. I'm dedicated to producing high-quality crops using sustainable practices and supporting my local community. ",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "April 2010",
    followingCount: 26,
    followersCount: 562,
    editing: false,
    storeName: "Thompson Farms",
    storeDescription: "New England's premier farm-to-table produce market.",
    storePicture: "../images/store.png",
  },
};

const farmerSlice = createSlice({
  name: "farmer",
  initialState,
  reducers: {},
});

export default farmerSlice.reducer;
