import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  farmer: {
    firstName: "Mark",
    lastName: "Thompson",
    handle: "@markthompson",
    tweets: "6,114 Tweets",
    profilePicture: "../images/jose.jpeg",
    bannerPicture: "../images/farmer-banner.jpeg",
    bio: "I'm a third-generation farmer from the Midwest. I'm dedicated to producing high-quality crops using sustainable practices and supporting my local community. ",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "April 2009",
    followingCount: 340,
    followersCount: 223,
    editing: false,
  },
};

const farmerSlice = createSlice({
  name: "farmer",
  initialState,
  reducers: {},
});

export default farmerSlice.reducer;
