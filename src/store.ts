import { configureStore } from "@reduxjs/toolkit";
import { transportApi } from "./services/EnTurService";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [transportApi.reducerPath]: transportApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(transportApi.middleware)
});