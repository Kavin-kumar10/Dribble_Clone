import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import logger from "redux-logger";
import AuthSlice from "./AuthSlice";
import PopSlice from "./PopSlice";

export const store = configureStore({
    reducer: {
        Data: DataSlice,
        Auth:AuthSlice,
        Pop: PopSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})