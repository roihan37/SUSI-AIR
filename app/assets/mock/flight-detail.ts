export interface FlightDetail {
  departure: {
    code: string
    airport: string
    city: string
    icao: string
  }

  arrival: {
    code: string
    airport: string
    city: string
    icao: string
  }

  aircraft: string

  flightNo: string

  departureTime: string

  duration: string
}

const flightDetail: FlightDetail = {
  departure: {
    code: "HLP",
    airport: "Halim Perdanakusuma",
    city: "Jakarta",
    icao: "WIHH"
  },

  arrival: {
    code: "CJN",
    airport: "Nusawiru",
    city: "Pangandaran",
    icao: "WICN"
  },

  aircraft: "C208B",

  flightNo: "SI 641",

  departureTime: "08:30 LT",

  duration: "01:25"
}

export default flightDetail