import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import logger from "redux-logger";
import AuthSlice from "./AuthSlice";

export const store = configureStore({
    reducer: {
        Data: DataSlice,
        Auth:AuthSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})