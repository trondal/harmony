import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Pokemon {
    name: string;
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string>({
            query: (name) => ({
                method: 'GET',
                url: `pokemon/${name}`
            }),
        }),
    }),
})

export const { useGetPokemonByNameQuery } = pokemonApi;