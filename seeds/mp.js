const mpTrainsData = [
    {
      geometry: {
        type: "LineString",
        coordinates: [
          [77.412615, 23.259933], // Bhopal Junction
          [75.837179, 22.719568], // Indore Junction
        ],
      },
      properties: {
        third_ac: 0,
        arrival: "09:00:00",
        from_station_code: "BPL",
        name: "Bhopal - Indore Express",
        zone: "WR",
        chair_car: 0,
        first_class: 0,
        duration_m: 30,
        sleeper: 1,
        from_station_name: "BHOPAL JN",
        number: "19314",
        departure: "06:00:00",
        return_train: "19313",
        to_station_code: "INDB",
        second_ac: 1,
        classes: "2A, SL",
        to_station_name: "INDORE JN",
        duration_h: 3,
        type: "EXPRESS",
        first_ac: 0,
        distance: 255,
      },
    },
    {
      geometry: {
        type: "LineString",
        coordinates: [
          [76.393049, 21.824482], // Khandwa Junction
          [75.568196, 22.724122], // Itarsi Junction
        ],
      },
      properties: {
        third_ac: 1,
        arrival: "14:30:00",
        from_station_code: "KNW",
        name: "Khandwa - Itarsi Passenger",
        zone: "CR",
        chair_car: 0,
        first_class: 0,
        duration_m: 45,
        sleeper: 1,
        from_station_name: "KHANDWA JN",
        number: "51157",
        departure: "10:30:00",
        return_train: "51158",
        to_station_code: "ET",
        second_ac: 0,
        classes: "SL, 3A",
        to_station_name: "ITARSI JN",
        duration_h: 4,
        type: "PASSENGER",
        first_ac: 0,
        distance: 145,
      },
    },
    {
      geometry: {
        type: "LineString",
        coordinates: [
          [75.856007, 22.693182], // Indore Junction
          [77.407358, 23.263854], // Bhopal Junction
        ],
      },
      properties: {
        third_ac: 0,
        arrival: "17:45:00",
        from_station_code: "INDB",
        name: "Indore - Bhopal Express",
        zone: "WR",
        chair_car: 1,
        first_class: 0,
        duration_m: 0,
        sleeper: 1,
        from_station_name: "INDORE JN",
        number: "19323",
        departure: "14:45:00",
        return_train: "19324",
        to_station_code: "BPL",
        second_ac: 1,
        classes: "2A, CC",
        to_station_name: "BHOPAL JN",
        duration_h: 3,
        type: "EXPRESS",
        first_ac: 0,
        distance: 255,
      },
    },
    {
      geometry: {
        type: "LineString",
        coordinates: [
          [76.469032, 23.838764], // Ujjain Junction
          [74.605456, 22.325788], // Ratlam Junction
        ],
      },
      properties: {
        third_ac: 0,
        arrival: "22:30:00",
        from_station_code: "UJN",
        name: "Ujjain - Ratlam Passenger",
        zone: "WR",
        chair_car: 0,
        first_class: 0,
        duration_m: 20,
        sleeper: 1,
        from_station_name: "UJJAIN JN",
        number: "59341",
        departure: "19:00:00",
        return_train: "59342",
        to_station_code: "RTM",
        second_ac: 0,
        classes: "SL",
        to_station_name: "RATLAM JN",
        duration_h: 3,
        type: "PASSENGER",
        first_ac: 0,
        distance: 120,
      },
    },
    {
      geometry: {
        type: "LineString",
        coordinates: [
          [77.664824, 23.835787], // Bina Junction
          [78.177238, 23.181467], // Katni Junction
        ],
      },
      properties: {
        third_ac: 1,
        arrival: "04:30:00",
        from_station_code: "BINA",
        name: "Bina - Katni Express",
        zone: "CR",
        chair_car: 0,
        first_class: 0,
        duration_m: 50,
        sleeper: 1,
        from_station_name: "BINA JN",
        number: "11015",
        departure: "01:15:00",
        return_train: "11016",
        to_station_code: "KTE",
        second_ac: 1,
        classes: "2A, 3A, SL",
        to_station_name: "KATNI JN",
        duration_h: 3,
        type: "EXPRESS",
        first_ac: 0,
        distance: 182,
      },
    },
  ];
  
module.exports = mpTrainsData;
  