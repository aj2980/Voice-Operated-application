
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
      prices: {
        "2A": 750,
        SL: 150,
      },
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
      prices: {
        "3A": 500,
        SL: 100,
      },
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
      prices: {
        "2A": 750,
        CC: 300,
      },
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
      prices: {
        SL: 80,
      },
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
      prices: {
        "2A": 600,
        "3A": 400,
        SL: 150,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [77.019769, 23.219640], // Hoshangabad Junction
        [76.556405, 23.055563], // Sehore Junction
      ],
    },
    properties: {
      third_ac: 0,
      arrival: "18:15:00",
      from_station_code: "HBD",
      name: "Hoshangabad - Sehore Passenger",
      zone: "WR",
      chair_car: 0,
      first_class: 0,
      duration_m: 30,
      sleeper: 1,
      from_station_name: "HOSHANGABAD JN",
      number: "55130",
      departure: "17:00:00",
      return_train: "55129",
      to_station_code: "SEH",
      second_ac: 0,
      classes: "SL",
      to_station_name: "SEHORE JN",
      duration_h: 1,
      type: "PASSENGER",
      first_ac: 0,
      distance: 90,
      prices: {
        SL: 50,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [75.847190, 23.005840], // Burhanpur Junction
        [76.054255, 22.667380], // Khandwa Junction
      ],
    },
    properties: {
      third_ac: 0,
      arrival: "12:15:00",
      from_station_code: "BURN",
      name: "Burhanpur - Khandwa Passenger",
      zone: "CR",
      chair_car: 0,
      first_class: 0,
      duration_m: 75,
      sleeper: 1,
      from_station_name: "BURHANPUR JN",
      number: "51149",
      departure: "10:00:00",
      return_train: "51150",
      to_station_code: "KNW",
      second_ac: 0,
      classes: "SL",
      to_station_name: "KHANDWA JN",
      duration_h: 1,
      type: "PASSENGER",
      first_ac: 0,
      distance: 65,
      prices: {
        SL: 40,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [77.142755, 23.050771], // Mandideep
        [77.412615, 23.259933], // Bhopal Junction
      ],
    },
    properties: {
      third_ac: 0,
      arrival: "09:30:00",
      from_station_code: "MDP",
      name: "Mandideep - Bhopal Passenger",
      zone: "WR",
      chair_car: 0,
      first_class: 0,
      duration_m: 20,
      sleeper: 0,
      from_station_name: "MANDIDEEP",
      number: "52571",
      departure: "09:10:00",
      return_train: "52572",
      to_station_code: "BPL",
      second_ac: 0,
      classes: "SL",
      to_station_name: "BHOPAL JN",
      duration_h: 0,
      type: "PASSENGER",
      first_ac: 0,
      distance: 25,
      prices: {
        SL: 20,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [76.756956, 22.301133], // Ujjain Junction
        [76.747816, 22.690117], // Dewas Junction
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "20:00:00",
      from_station_code: "UJN",
      name: "Ujjain - Dewas Passenger",
      zone: "WR",
      chair_car: 0,
      first_class: 0,
      duration_m: 30,
      sleeper: 1,
      from_station_name: "UJJAIN JN",
      number: "59341",
      departure: "19:00:00",
      return_train: "59342",
      to_station_code: "DEW",
      second_ac: 0,
      classes: "SL",
      to_station_name: "DEWAS JN",
      duration_h: 0,
      type: "PASSENGER",
      first_ac: 0,
      distance: 50,
      prices: {
        SL: 30,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [75.85034, 23.25949], // Bhopal Junction
        [77.3318, 23.3826], // Sagar Junction
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "18:45:00",
      from_station_code: "BPL",
      name: "Bhopal - Sagar Express",
      zone: "CR",
      chair_car: 0,
      first_class: 0,
      duration_m: 90,
      sleeper: 1,
      from_station_name: "BHOPAL JN",
      number: "11001",
      departure: "16:00:00",
      return_train: "11002",
      to_station_code: "SGR",
      second_ac: 1,
      classes: "2A, 3A, SL",
      to_station_name: "SAGAR JN",
      duration_h: 1,
      type: "EXPRESS",
      first_ac: 0,
      distance: 200,
      prices: {
        "2A": 700,
        "3A": 500,
        SL: 150,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [78.5781, 22.9511], // Katni Junction
        [76.5159, 23.0818], // Jabalpur Junction
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "15:10:00",
      from_station_code: "KTE",
      name: "Katni - Jabalpur Express",
      zone: "SECR",
      chair_car: 0,
      first_class: 0,
      duration_m: 55,
      sleeper: 1,
      from_station_name: "KATNI JN",
      number: "11012",
      departure: "13:15:00",
      return_train: "11011",
      to_station_code: "JBP",
      second_ac: 1,
      classes: "2A, SL",
      to_station_name: "JABALPUR JN",
      duration_h: 2,
      type: "EXPRESS",
      first_ac: 0,
      distance: 120,
      prices: {
        "2A": 600,
        SL: 100,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [78.124521, 24.029673], // Tikamgarh Junction
        [78.675274, 23.553107], // Chhatarpur Junction
      ],
    },
    properties: {
      third_ac: 0,
      arrival: "12:30:00",
      from_station_code: "TKMG",
      name: "Tikamgarh - Chhatarpur Passenger",
      zone: "NCR",
      chair_car: 0,
      first_class: 0,
      duration_m: 45,
      sleeper: 1,
      from_station_name: "TIKAMGARH JN",
      number: "51610",
      departure: "10:15:00",
      return_train: "51611",
      to_station_code: "CHTR",
      second_ac: 0,
      classes: "SL",
      to_station_name: "CHHATARPUR JN",
      duration_h: 2,
      type: "PASSENGER",
      first_ac: 0,
      distance: 80,
      prices: {
        SL: 50,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [78.201865, 23.838762], // Sagar Junction
        [79.195439, 23.707845], // Damoh Junction
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "15:45:00",
      from_station_code: "SGO",
      name: "Sagar - Damoh Express",
      zone: "WCR",
      chair_car: 0,
      first_class: 0,
      duration_m: 0,
      sleeper: 1,
      from_station_name: "SAGAR JN",
      number: "12422",
      departure: "13:00:00",
      return_train: "12423",
      to_station_code: "DMO",
      second_ac: 1,
      classes: "2A, 3A, SL",
      to_station_name: "DAMOH JN",
      duration_h: 3,
      type: "EXPRESS",
      first_ac: 0,
      distance: 98,
      prices: {
        "2A": 500,
        "3A": 350,
        SL: 120,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [78.177232, 23.981272], // Satna Junction
        [81.182956, 24.578258], // Rewa Junction
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "20:10:00",
      from_station_code: "STA",
      name: "Satna - Rewa Passenger",
      zone: "WCR",
      chair_car: 0,
      first_class: 0,
      duration_m: 0,
      sleeper: 1,
      from_station_name: "SATNA JN",
      number: "11608",
      departure: "17:30:00",
      return_train: "11609",
      to_station_code: "REWA",
      second_ac: 0,
      classes: "SL",
      to_station_name: "REWA JN",
      duration_h: 2,
      type: "PASSENGER",
      first_ac: 0,
      distance: 105,
      prices: {
        SL: 70,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [77.977035, 23.179301], // Vidisha Junction
        [78.105228, 24.585232], // Khajuraho Junction
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "18:45:00",
      from_station_code: "BHS",
      name: "Vidisha - Khajuraho Express",
      zone: "NCR",
      chair_car: 0,
      first_class: 0,
      duration_m: 30,
      sleeper: 1,
      from_station_name: "VIDISHA JN",
      number: "11812",
      departure: "15:00:00",
      return_train: "11813",
      to_station_code: "KURJ",
      second_ac: 1,
      classes: "2A, SL",
      to_station_name: "KHAJURAHO JN",
      duration_h: 3,
      type: "EXPRESS",
      first_ac: 0,
      distance: 235,
      prices: {
        "2A": 800,
        SL: 200,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [77.412794, 23.259933], // Bhopal Junction, MP
        [80.183941, 23.836058], // Jabalpur Junction, MP
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "05:45:00",
      from_station_code: "BPL",
      name: "Bhopal - Jabalpur Jan Shatabdi",
      zone: "WCR",
      chair_car: 1,
      first_class: 0,
      duration_m: 0,
      sleeper: 1,
      from_station_name: "BHOPAL JN",
      number: "12061",
      departure: "16:45:00",
      return_train: "12062",
      to_station_code: "JBP",
      second_ac: 0,
      classes: "CC, SL",
      to_station_name: "JABALPUR JN",
      duration_h: 13,
      type: "JANSHATABDI",
      first_ac: 0,
      distance: 310,
      prices: {
        CC: 400,
        SL: 150,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [80.183941, 23.836058], // Jabalpur Junction, MP
        [76.208617, 22.969818], // Indore Junction, MP
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "07:30:00",
      from_station_code: "JBP",
      name: "Jabalpur - Indore Overnight Express",
      zone: "WR",
      chair_car: 0,
      first_class: 0,
      duration_m: 45,
      sleeper: 1,
      from_station_name: "JABALPUR JN",
      number: "11471",
      departure: "20:30:00",
      return_train: "11472",
      to_station_code: "INDB",
      second_ac: 1,
      classes: "SL, 3A, 2A",
      to_station_name: "INDORE JN",
      duration_h: 10,
      type: "EXPRESS",
      first_ac: 0,
      distance: 552,
      prices: {
        "2A": 1000,
        "3A": 700,
        SL: 250,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [76.399423, 24.157401], // Neemuch Junction, MP
        [74.589229, 24.585445], // Ratlam Junction, MP
      ],
    },
    properties: {
      third_ac: 0,
      arrival: "22:10:00",
      from_station_code: "NMH",
      name: "Neemuch - Ratlam Passenger",
      zone: "WR",
      chair_car: 0,
      first_class: 0,
      duration_m: 20,
      sleeper: 1,
      from_station_name: "NEEMUCH JN",
      number: "59306",
      departure: "18:30:00",
      return_train: "59305",
      to_station_code: "RTM",
      second_ac: 0,
      classes: "SL",
      to_station_name: "RATLAM JN",
      duration_h: 4,
      type: "PASSENGER",
      first_ac: 0,
      distance: 135,
      prices: {
        SL: 90,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [76.832119, 23.203781], // Ujjain Junction, MP
        [75.788498, 22.719568], // Indore Junction, MP
      ],
    },
    properties: {
      third_ac: 0,
      arrival: "14:30:00",
      from_station_code: "UJN",
      name: "Ujjain - Indore Intercity",
      zone: "WR",
      chair_car: 1,
      first_class: 0,
      duration_m: 0,
      sleeper: 1,
      from_station_name: "UJJAIN JN",
      number: "22943",
      departure: "12:00:00",
      return_train: "22944",
      to_station_code: "INDB",
      second_ac: 0,
      classes: "CC, SL",
      to_station_name: "INDORE JN",
      duration_h: 2,
      type: "INTERCITY",
      first_ac: 0,
      distance: 55,
      prices: {
        CC: 150,
        SL: 50,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [78.111115, 26.218287], // Gwalior Junction, MP
        [76.399423, 24.157401], // Morena Junction, MP
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "06:50:00",
      from_station_code: "GWL",
      name: "Gwalior - Morena MEMU",
      zone: "NCR",
      chair_car: 0,
      first_class: 0,
      duration_m: 45,
      sleeper: 1,
      from_station_name: "GWALIOR JN",
      number: "51883",
      departure: "05:00:00",
      return_train: "51884",
      to_station_code: "MRA",
      second_ac: 0,
      classes: "SL",
      to_station_name: "MORENA JN",
      duration_h: 2,
      type: "MEMU",
      first_ac: 0,
      distance: 76,
      prices: {
        SL: 40,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [78.111115, 26.218287], // Gwalior Junction, MP
        [75.788498, 22.719568], // Indore Junction, MP
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "08:20:00",
      from_station_code: "GWL",
      name: "Gwalior - Indore Express",
      zone: "WR",
      chair_car: 1,
      first_class: 0,
      duration_m: 30,
      sleeper: 1,
      from_station_name: "GWALIOR JN",
      number: "11126",
      departure: "22:30:00",
      return_train: "11125",
      to_station_code: "INDB",
      second_ac: 1,
      classes: "SL, 3A, CC",
      to_station_name: "INDORE JN",
      duration_h: 10,
      type: "EXPRESS",
      first_ac: 0,
      distance: 560,
      prices: {
        "3A": 800,
        CC: 400,
        SL: 300,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [77.412794, 23.259933], // Bhopal Junction, MP
        [80.949208, 26.846708], // Lucknow Junction, UP
      ],
    },
    properties: {
      third_ac: 1,
      arrival: "06:45:00",
      from_station_code: "BPL",
      name: "Bhopal - Lucknow Superfast",
      zone: "NR",
      chair_car: 1,
      first_class: 0,
      duration_m: 15,
      sleeper: 1,
      from_station_name: "BHOPAL JN",
      number: "12594",
      departure: "18:00:00",
      return_train: "12593",
      to_station_code: "LKO",
      second_ac: 1,
      classes: "SL, 3A, 2A, CC",
      to_station_name: "LUCKNOW JN",
      duration_h: 12,
      type: "SUPERFAST",
      first_ac: 0,
      distance: 585,
      prices: {
        "2A": 1200,
        "3A": 900,
        CC: 500,
        SL: 350,
      },
    },
  },
  {
    geometry: {
      type: "LineString",
      coordinates: [
        [78.657559, 23.837586], // Katni Junction, MP
        [80.183941, 23.836058], // Jabalpur Junction, MP
      ],
    },
    properties: {
      third_ac: 0,
      arrival: "17:45:00",
      from_station_code: "KTE",
      name: "Katni - Jabalpur Passenger",
      zone: "WCR",
      chair_car: 0,
      first_class: 0,
      duration_m: 10,
      sleeper: 1,
      from_station_name: "KATNI JN",
      number: "51685",
      departure: "15:00:00",
      return_train: "51686",
      to_station_code: "JBP",
      second_ac: 0,
      classes: "SL",
      to_station_name: "JABALPUR JN",
      duration_h: 3,
      type: "PASSENGER",
      first_ac: 0,
      distance: 90,
      prices: {
        SL: 60,
      },
    },
  },
];

module.exports = mpTrainsData;
