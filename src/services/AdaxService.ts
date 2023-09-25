import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
}

/* interface HomeResponse {
    homes: Array<Home>;
    rooms: Array<Room>;
    devices: Array<Device>;
} */

/* interface Home {
    id: number;
    name: string;
}

interface Room {
    id: number,
    homeId: number;
    name: string;
    heatingEnabled?: boolean;
    targetTemperature?: number
    temperature?: number;
}

interface Device {
    id: number;
    homeId: number;
    roomId: number;
    name: string;
    type: string;
    energyTime: number;
    energyWh: number;
} */

// const baseQuery = fetchBaseQuery({ baseUrl: 'https://api-1.adax.no/client-api' });

/* const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseQuery(`auth/token?grant_type=refresh_token&refresh_token=${token}&username=${CLIENT_ID}&password=${CLIENT_SECRET}`, api, extraOptions);
        if (refreshResult.data) {
            // store the new token
            api.dispatch(tokenReceived(refreshResult.data))
            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(loggedOut())
        }
    }
    return result;
} */

export interface Foo {
    grant_type: string;
    username: string;
    password: string;
}

const baseUrl = import.meta.env.VITE_BACKEND_URL as string;

export const adaxApi = createApi({
    reducerPath: 'adaxApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getToken: builder.query<AccessToken, void>({
            query: () => ({
                method: 'GET',
                url: `/token`,
            }),
        }),
        /*         refreshToken: builder.query<AccessToken, string>({
                    query: (token) => ({
                        url: `/refresh_token?refresh_token=${token}&username=${CLIENT_ID}&password=${CLIENT_SECRET}`,
                        method: 'GET',
                    })
                }), */
        /*         GetDefinition: builder.query<unknown, void>({
                    query: () => ({
                        url: `/openapi`,
                    })
                }), */
        /*         getHomesInfo: builder.query<HomeResponse, string>({
                    query: (token: string) => ({
                        url: `/rest/v1/content/?withEnergy=1`,
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                }), */
        /* getEnergyInfo: builder.query<AccessToken, ControlRoom>({
            query: ({ roomId, token }) => ({
                url: `/rest/v1/energy_log/${roomId}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                // mode: 'no-cors',
                // credentials: 'include'
            })
        }), */
        /* getRoomInfo: builder.query({
            query: (roomId: number) => ({
                url: `rest/v1/energy_log/${roomId}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: 'include'
            })
        }), */
        /* setTargetTemperature: builder.query({
            query: (token: string) => ({
                url: `rest/v1/control/`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: 'include'
            })
        }) */

    })
})



export const { useGetTokenQuery } = adaxApi;





