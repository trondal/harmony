import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { ENV_VARIABLES } from '../environment';
import { PostResponse, StopPlace } from '../types/Entur';

interface FromTo {
  from: string;
  to: string;
}

export const transportApi = createApi({
  baseQuery: graphqlRequestBaseQuery({ url: ENV_VARIABLES.VITE_ENTUR_API }),
  endpoints: (builder) => ({
    getDeparturesFrom: builder.query<StopPlace, string>({
      query: (stopPlace) => ({
        method: 'POST',
        Headers: {
          'ET-Client-Name': ENV_VARIABLES.VITE_APP_NAME,
        },
        document: gql`
          {
                    stopPlace(id:"${stopPlace}") {
                      name
                      id
                      estimatedCalls(numberOfDepartures: 10) {
                        realtime
                        aimedArrivalTime
                        aimedDepartureTime
                        expectedArrivalTime
                        expectedDepartureTime
                        actualArrivalTime
                        actualDepartureTime
                        date
                        forBoarding
                        forAlighting
                        destinationDisplay {
                          frontText
                        }
                        quay {
                          id
                          publicCode
                        }
                        serviceJourney {
                          line {
                            id
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
    }),
    getDeparturesFromTo: builder.query<StopPlace, FromTo>({
      query: (arguments_) => ({
        method: 'POST',
        Headers: {
          'ET-Client-Name': ENV_VARIABLES.VITE_APP_NAME,
        },
        document: gql`
          {
                    stopPlace(id:"${arguments_.from}") {
                      name
                      id
                      estimatedCalls(numberOfDepartures: 10) {
                        realtime
                        aimedArrivalTime
                        aimedDepartureTime
                        expectedArrivalTime
                        expectedDepartureTime
                        actualArrivalTime
                        actualDepartureTime
                        date
                        forBoarding
                        forAlighting
                        destinationDisplay {
                          frontText
                        }
                        quay {
                          id
                          publicCode
                        }
                        serviceJourney {
                          line {
                            id
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

export const { useGetDeparturesFromQuery, useGetDeparturesFromToQuery } = transportApi

