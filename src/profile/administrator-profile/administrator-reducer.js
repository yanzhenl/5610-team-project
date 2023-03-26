import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  administrator: {
    firstName: "Jose",
    lastName: "Annunziato",
    handle: "@jannunzi",
    tweets: "6,114 Tweets",
    profilePicture: "../images/jose.jpeg",
    bannerPicture: "../images/farmer-banner.jpeg",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "April 2009",
    followingCount: 340,
    followersCount: 223,
    editing: false,
  },
};

const administratorSlice = createSlice({
  name: "farmer",
  initialState,
  reducers: {},
});

export default administratorSlice.reducer;
