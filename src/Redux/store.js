import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        Data: DataSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})