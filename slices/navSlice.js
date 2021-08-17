import { createSlice } from "@reduxjs/toolkit";

//setup data layer
const initialState = {
  origin: {
    location: {
      latitude: 10.828315624028688,
      longitude: 106.77810365732711,
    },
    desc: "Vinhome",
  },
  destination: {
    location: {
      latitude: 10.792459356405814,
      longitude: 106.76095244012551,
    },
    desc: "Na's house",
  },
  travelTimeInformation: {
    distance: {
      text: "15 kilometers",
    },
    duration: {
      text: "25 minutes",
      value: "1500000",
    },
  },
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//action push something to datalayer
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//grab it from datalayer ==> Selector
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export default navSlice.reducer;
