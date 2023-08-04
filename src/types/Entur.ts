export interface PostResponse {
    stopPlace: StopPlace;
}

export interface StopPlace {
    name: string;
    id: string;
    estimatedCalls: EstimatedDeparture[];
}

export interface EstimatedDeparture {
    expectedDepartureTime: string;
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
    publicCode: string;
    transportMode: 'bus' | 'metro' | 'tram';
}

interface DestinationDisplay {
    frontText: string;
}