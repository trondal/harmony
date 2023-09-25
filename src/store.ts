import { configureStore } from "@reduxjs/toolkit";
import { transportApi } from "./services/EnTurService";
import { adaxApi } from "./services/AdaxService";
import { pokemonApi } from "./services/PokemonService";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [transportApi.reducerPath]: transportApi.reducer,
        [adaxApi.reducerPath]: adaxApi.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        // eslint-disable-next-line unicorn/prefer-spread
        getDefaultMiddleware().concat([
            transportApi.middleware,
            adaxApi.middleware,
            pokemonApi.middleware
        ])
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch