import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import {toDoApi} from "./services/apiSlice"

export const store = configureStore({
  reducer,
  middleware: (existing) => existing().concat(toDoApi.middleware),
});
