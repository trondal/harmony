import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { ENV_VARIABLES } from '../env';
import { PostResponse, StopPlace } from '../types/Entur';

export const transportApi = createApi({
  baseQuery: graphqlRequestBaseQuery({ url: ENV_VARIABLES.VITE_ENTUR_API }),
  endpoints: (builder) => ({
    getAll: builder.query<StopPlace, void>({
      query: () => ({
        method: 'POST',
        Headers: {
          'ET-Client-Name': ENV_VARIABLES.VITE_APP_NAME,
        },
        document: gql`{
          stopPlace(id:"NSR:StopPlace:58189") {
            name
            id
            estimatedCalls(numberOfDepartures: 10) {
              expectedDepartureTime
              aimedDepartureTime
              destinationDisplay {
                frontText
              }
              quay {
                id
                publicCode
              }
              serviceJourney {
                line {
                  publicCode
                  transportMode
                }
              }
            }
          }
        }
        `
      }),
      transformResponse: (response: PostResponse) => response.stopPlace
    })
  })
})

export const { useGetAllQuery } = transportApi

