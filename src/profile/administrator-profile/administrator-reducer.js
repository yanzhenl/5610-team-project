import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  administrator: {
    firstName: "William",
    lastName: "Lee",
    handle: "@williamlee",
    profilePicture: "../../images/administrator.jpeg",
    bannerPicture: "../../images/market-banner.jpeg",
    bio: "Passionate about connecting farmers with their community and providing consumers with access to fresh, locally grown produce. ",
    location: "Seattle, WA",
    dateOfBirth: "11/12/1989",
    dateJoined: "October 2012",
    followingCount: 110,
    followersCount: 58,
    editing: false,
    manageStoreName1: "Thompson Farms",
    manageStoreDescription1: "New England's premier farm-to-table produce market.",
    manageStorePicture1: "../images/store.png",
    manageStoreClosed1: false,
    manageStoreName2: "Harvest House Market",
    manageStoreDescription2: "Harvest House Market is a retail store that offers a variety of fresh, locally-sourced farm products. You can find a range of high-quality fruits, vegetables, meats, and other food items, all of which are grown or produced by local farmers.",
    manageStorePicture2: "../images/local-food.jpeg",
    manageStoreClosed2: false,
    manageStoreName3: "Farmer John",
    manageStoreDescription3: "Start with a town that has an appetite for eating adventurously, season it with every culture in the world, and roast it in 365 days of absolutely perfect grilling weather, and voila! You have the story of Farmer John, a local Southern California company.",
    manageStorePicture3: "../images/farmer-john.png",
    manageStoreClosed3: false,
  },
};

const administratorSlice = createSlice({
  name: "administrator",
  initialState,
  reducers: {
    editProfile: (state, action) => {
      state.farmer = action.payload;
    }
  },
});

export default administratorSlice.reducer;
export const { editProfile } = administratorSlice.actions;