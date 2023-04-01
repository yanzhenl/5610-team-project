import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  farmer: {
    _id: "123",
    firstName: "Mark",
    lastName: "Thompson",
    handle: "@markthompson",
    profilePicture: "../../images/farmer.jpeg",
    bannerPicture: "../../images/farmer-banner.jpeg",
    bio: "I'm a third-generation farmer from the Midwest. I'm dedicated to producing high-quality crops using sustainable practices and supporting my local community. ",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "April 2010",
    followingCount: 26,
    followersCount: 562,
    editing: false,
    closed: false,
    storeName: "Thompson Farms",
    storeDescription: "New England's premier farm-to-table produce market.",
    storePicture: "../images/store.png",
  },
};

const farmerSlice = createSlice({
  name: "farmer",
  initialState,
  reducers: {
    closeStore: (state, action) => {
        const farmer = state.farmer;
        farmer.closed = !farmer.closed;
    },
    editProfile: (state, action) => {
      state.farmer = action.payload;
    }
  }
});

export default farmerSlice.reducer;
export const { closeStore, editProfile } = farmerSlice.actions;
