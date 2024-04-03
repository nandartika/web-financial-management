import { configureStore } from "@reduxjs/toolkit";
import personalsReduser from "./personals/reducer";

const store = configureStore({
  reducer: {
    personals: personalsReduser,
  },
});

export default store;
