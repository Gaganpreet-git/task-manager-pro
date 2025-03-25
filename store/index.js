import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import taskSlice from "./taskSlice";
import weatherSlice from "./weatherSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tasks: taskSlice,
    weather: weatherSlice,
  },
});

export default store;
