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