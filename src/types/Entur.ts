export interface PostResponse {
    stopPlace: StopPlace;
}

export interface StopPlace {
    name: string;
    id: string;
    estimatedCalls: EstimatedDeparture[];
}

export interface EstimatedDeparture {
    realtime: boolean;
    aimedArrivalTime: string;
    expectedArrivalTime: string;
    expectedDepartureTime: string;
    actualArrivalTime: string | null;
    actualDepartureTime: string | null;
    forBoarding: boolean;
    forAlighting: boolean;
    date: string;
    aimedDepartureTime: string;
    destinationDisplay: DestinationDisplay;
    serviceJourney: ServiceJourney;
    quay: Quay
}

interface ServiceJourney {
    line: Line;
}

interface Quay {
    id: string;
    publicCode: string;
}

interface Line {
    id: string;
    publicCode: string;
    transportMode: 'bus' | 'metro' | 'tram';
}

interface DestinationDisplay {
    frontText: string;
}


const test: StopPlace = {


    "name": "Carl Berners plass",
    "id": "NSR:StopPlace:58189",
    "estimatedCalls": [
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:51:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:51:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:51:16+02:00",
            "expectedDepartureTime": "2023-08-07T09:51:16+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Fornebu"
            },
            "quay": {
                "id": "NSR:Quay:11048",
                "publicCode": "H"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:28",
                    "publicCode": "28",
                    "transportMode": "bus"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:50:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:50:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:51:27+02:00",
            "expectedDepartureTime": "2023-08-07T09:51:27+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Sinsen-Grefsen st."
            },
            "quay": {
                "id": "NSR:Quay:11043",
                "publicCode": "D"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:17",
                    "publicCode": "17",
                    "transportMode": "tram"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:51:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:51:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:52:54+02:00",
            "expectedDepartureTime": "2023-08-07T09:52:54+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Skøyen"
            },
            "quay": {
                "id": "NSR:Quay:11048",
                "publicCode": "H"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:20",
                    "publicCode": "20",
                    "transportMode": "bus"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:52:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:52:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:53:24+02:00",
            "expectedDepartureTime": "2023-08-07T09:53:24+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Rikshospitalet"
            },
            "quay": {
                "id": "NSR:Quay:11044",
                "publicCode": "E"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:17",
                    "publicCode": "17",
                    "transportMode": "tram"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:53:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:53:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:54:14+02:00",
            "expectedDepartureTime": "2023-08-07T09:54:14+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Vestli"
            },
            "quay": {
                "id": "NSR:Quay:11026",
                "publicCode": "1"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:5",
                    "publicCode": "5",
                    "transportMode": "metro"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:53:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:53:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:54:25+02:00",
            "expectedDepartureTime": "2023-08-07T09:54:25+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Økern"
            },
            "quay": {
                "id": "NSR:Quay:11049",
                "publicCode": "J"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:28",
                    "publicCode": "28",
                    "transportMode": "bus"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:51:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:51:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:54:27+02:00",
            "expectedDepartureTime": "2023-08-07T09:54:27+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Galgeberg"
            },
            "quay": {
                "id": "NSR:Quay:11049",
                "publicCode": "J"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:20",
                    "publicCode": "20",
                    "transportMode": "bus"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:54:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:54:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:55:25+02:00",
            "expectedDepartureTime": "2023-08-07T09:55:25+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Økern"
            },
            "quay": {
                "id": "NSR:Quay:11090",
                "publicCode": "A"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:28",
                    "publicCode": "28",
                    "transportMode": "bus"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:53:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:53:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:55:31+02:00",
            "expectedDepartureTime": "2023-08-07T09:55:31+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Snarøya"
            },
            "quay": {
                "id": "NSR:Quay:11036",
                "publicCode": "F"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:31",
                    "publicCode": "31",
                    "transportMode": "bus"
                }
            }
        },
        {
            "realtime": true,
            "aimedArrivalTime": "2023-08-07T09:52:00+02:00",
            "aimedDepartureTime": "2023-08-07T09:52:00+02:00",
            "expectedArrivalTime": "2023-08-07T09:55:41+02:00",
            "expectedDepartureTime": "2023-08-07T09:55:41+02:00",
            "actualArrivalTime": null,
            "actualDepartureTime": null,
            "date": "2023-08-07",
            "forBoarding": true,
            "forAlighting": true,
            "destinationDisplay": {
                "frontText": "Helsfyr"
            },
            "quay": {
                "id": "NSR:Quay:11049",
                "publicCode": "J"
            },
            "serviceJourney": {
                "line": {
                    "id": "RUT:Line:21",
                    "publicCode": "21",
                    "transportMode": "bus"
                }
            }
        }
    ]
}
console.log(test);
