import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

export const roomApi = createApi({
    reducerPath: 'roomApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://192.168.0.1/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})