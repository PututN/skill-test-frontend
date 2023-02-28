import { combineReducers } from "@reduxjs/toolkit";
import { toDoApi } from "../services/apiSlice";
const reducer = combineReducers({
  [toDoApi.reducerPath]: toDoApi.reducer,
});

export default reducer;
