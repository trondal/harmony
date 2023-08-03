
export class EnTurService {

  private url: string;
  private clientName: string;
  private stopName: string;

  constructor(url: string, clientName: string, stopName: string) {
    this.url = url;
    this.clientName = clientName;
    this.stopName = stopName;
  }

  getRoutes = async () => {
    const query = this.getQuery();
    await fetch(this.url, {
      method: 'POST',
      headers: {
        'ET-Client-Name': this.clientName,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query }),
    })
      .then(res => res.json())
      .then(stopPlaceData => console.log(stopPlaceData))
  }

  private getQuery = () => {
    return `{
            stopPlace(id:"${this.stopName}") {
              name
              id
              estimatedCalls(numberOfDepartures: 20) {
                expectedDepartureTime
                aimedDepartureTime
                destinationDisplay {
                  frontText
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
          `;
  }

}


