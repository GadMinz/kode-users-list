import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/usersSlice";
import filters from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    users,
    filters,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
