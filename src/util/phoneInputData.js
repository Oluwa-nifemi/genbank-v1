const countriesWithISO = [
  {
    name: "Afghanistan",
    ISO: "+93",
    countryCode: "AF",
  },
  {
    name: "Åland Islands",
    ISO: "+358",
    countryCode: "AX",
  },
  {
    name: "Albania",
    ISO: "+355",
    countryCode: "AL",
  },
  {
    name: "Algeria",
    ISO: "+213",
    countryCode: "DZ",
  },
  {
    name: "American Samoa",
    ISO: "+1684",
    countryCode: "AS",
  },
  {
    name: "Andorra",
    ISO: "+376",
    countryCode: "AD",
  },
  {
    name: "Angola",
    ISO: "+244",
    countryCode: "AO",
  },
  {
    name: "Anguilla",
    ISO: "+1264",
    countryCode: "AI",
  },
  {
    name: "Antarctica",
    ISO: "+672",
    countryCode: "AQ",
  },
  {
    name: "Antigua and Barbuda",
    ISO: "+1268",
    countryCode: "AG",
  },
  {
    name: "Argentina",
    ISO: "+54",
    countryCode: "AR",
  },
  {
    name: "Armenia",
    ISO: "+374",
    countryCode: "AM",
  },
  {
    name: "Aruba",
    ISO: "+297",
    countryCode: "AW",
  },
  {
    name: "Australia",
    ISO: "+61",
    countryCode: "AU",
  },
  {
    name: "Austria",
    ISO: "+43",
    countryCode: "AT",
  },
  {
    name: "Azerbaijan",
    ISO: "+994",
    countryCode: "AZ",
  },
  {
    name: "Bahamas",
    ISO: "+1242",
    countryCode: "BS",
  },
  {
    name: "Bahrain",
    ISO: "+973",
    countryCode: "BH",
  },
  {
    name: "Bangladesh",
    ISO: "+880",
    countryCode: "BD",
  },
  {
    name: "Barbados",
    ISO: "+1246",
    countryCode: "BB",
  },
  {
    name: "Belarus",
    ISO: "+375",
    countryCode: "BY",
  },
  {
    name: "Belgium",
    ISO: "+32",
    countryCode: "BE",
  },
  {
    name: "Belize",
    ISO: "+501",
    countryCode: "BZ",
  },
  {
    name: "Benin",
    ISO: "+229",
    countryCode: "BJ",
  },
  {
    name: "Bermuda",
    ISO: "+1441",
    countryCode: "BM",
  },
  {
    name: "Bhutan",
    ISO: "+975",
    countryCode: "BT",
  },
  {
    name: "Bolivia, Plurinational State of bolivia",
    ISO: "+591",
    countryCode: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    ISO: "+387",
    countryCode: "BA",
  },
  {
    name: "Botswana",
    ISO: "+267",
    countryCode: "BW",
  },
  // {
  //   name: "Bouvet Island",
  //   ISO: "+47",
  //   countryCode: "BV",
  // },
  {
    name: "Brazil",
    ISO: "+55",
    countryCode: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    ISO: "+246",
    countryCode: "IO",
  },
  {
    name: "Brunei Darussalam",
    ISO: "+673",
    countryCode: "BN",
  },
  {
    name: "Bulgaria",
    ISO: "+359",
    countryCode: "BG",
  },
  {
    name: "Burkina Faso",
    ISO: "+226",
    countryCode: "BF",
  },
  {
    name: "Burundi",
    ISO: "+257",
    countryCode: "BI",
  },
  {
    name: "Cambodia",
    ISO: "+855",
    countryCode: "KH",
  },
  {
    name: "Cameroon",
    ISO: "+237",
    countryCode: "CM",
  },
  {
    name: "Canada",
    ISO: "+1",
    countryCode: "CA",
  },
  {
    name: "Cape Verde",
    ISO: "+238",
    countryCode: "CV",
  },
  {
    name: "Cayman Islands",
    ISO: "+345",
    countryCode: "KY",
  },
  {
    name: "Central African Republic",
    ISO: "+236",
    countryCode: "CF",
  },
  {
    name: "Chad",
    ISO: "+235",
    countryCode: "TD",
  },
  {
    name: "Chile",
    ISO: "+56",
    countryCode: "CL",
  },
  {
    name: "China",
    ISO: "+86",
    countryCode: "CN",
  },
  {
    name: "Christmas Island",
    ISO: "+61",
    countryCode: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",
    ISO: "+61",
    countryCode: "CC",
  },
  {
    name: "Colombia",
    ISO: "+57",
    countryCode: "CO",
  },
  {
    name: "Comoros",
    ISO: "+269",
    countryCode: "KM",
  },
  {
    name: "Congo",
    ISO: "+242",
    countryCode: "CG",
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    ISO: "+243",
    countryCode: "CD",
  },
  {
    name: "Cook Islands",
    ISO: "+682",
    countryCode: "CK",
  },
  {
    name: "Costa Rica",
    ISO: "+506",
    countryCode: "CR",
  },
  {
    name: "Cote d'Ivoire",
    ISO: "+225",
    countryCode: "CI",
  },
  {
    name: "Croatia",
    ISO: "+385",
    countryCode: "HR",
  },
  {
    name: "Cuba",
    ISO: "+53",
    countryCode: "CU",
  },
  {
    name: "Cyprus",
    ISO: "+357",
    countryCode: "CY",
  },
  {
    name: "Czech Republic",
    ISO: "+420",
    countryCode: "CZ",
  },
  {
    name: "Denmark",
    ISO: "+45",
    countryCode: "DK",
  },
  {
    name: "Djibouti",
    ISO: "+253",
    countryCode: "DJ",
  },
  {
    name: "Dominica",
    ISO: "+1767",
    countryCode: "DM",
  },
  {
    name: "Dominican Republic",
    ISO: "+1849",
    countryCode: "DO",
  },
  {
    name: "Ecuador",
    ISO: "+593",
    countryCode: "EC",
  },
  {
    name: "Egypt",
    ISO: "+20",
    countryCode: "EG",
  },
  {
    name: "El Salvador",
    ISO: "+503",
    countryCode: "SV",
  },
  {
    name: "Equatorial Guinea",
    ISO: "+240",
    countryCode: "GQ",
  },
  {
    name: "Eritrea",
    ISO: "+291",
    countryCode: "ER",
  },
  {
    name: "Estonia",
    ISO: "+372",
    countryCode: "EE",
  },
  {
    name: "Ethiopia",
    ISO: "+251",
    countryCode: "ET",
  },
  {
    name: "Falkland Islands (Malvinas)",
    ISO: "+500",
    countryCode: "FK",
  },
  {
    name: "Faroe Islands",
    ISO: "+298",
    countryCode: "FO",
  },
  {
    name: "Fiji",
    ISO: "+679",
    countryCode: "FJ",
  },
  {
    name: "Finland",
    ISO: "+358",
    countryCode: "FI",
  },
  {
    name: "France",
    ISO: "+33",
    countryCode: "FR",
  },
  {
    name: "French Guiana",
    ISO: "+594",
    countryCode: "GF",
  },
  {
    name: "French Polynesia",
    ISO: "+689",
    countryCode: "PF",
  },
  {
    name: "French Southern Territories",
    ISO: "+262",
    countryCode: "TF",
  },
  {
    name: "Gabon",
    ISO: "+241",
    countryCode: "GA",
  },
  {
    name: "Gambia",
    ISO: "+220",
    countryCode: "GM",
  },
  {
    name: "Georgia",
    ISO: "+995",
    countryCode: "GE",
  },
  {
    name: "Germany",
    ISO: "+49",
    countryCode: "DE",
  },
  {
    name: "Ghana",
    ISO: "+233",
    countryCode: "GH",
  },
  {
    name: "Gibraltar",
    ISO: "+350",
    countryCode: "GI",
  },
  {
    name: "Greece",
    ISO: "+30",
    countryCode: "GR",
  },
  {
    name: "Greenland",
    ISO: "+299",
    countryCode: "GL",
  },
  {
    name: "Grenada",
    ISO: "+1473",
    countryCode: "GD",
  },
  {
    name: "Guadeloupe",
    ISO: "+590",
    countryCode: "GP",
  },
  {
    name: "Guam",
    ISO: "+1671",
    countryCode: "GU",
  },
  {
    name: "Guatemala",
    ISO: "+502",
    countryCode: "GT",
  },
  {
    name: "Guernsey",
    ISO: "+44",
    countryCode: "GG",
  },
  {
    name: "Guinea",
    ISO: "+224",
    countryCode: "GN",
  },
  {
    name: "Guinea-Bissau",
    ISO: "+245",
    countryCode: "GW",
  },
  {
    name: "Guyana",
    ISO: "+592",
    countryCode: "GY",
  },
  {
    name: "Haiti",
    ISO: "+509",
    countryCode: "HT",
  },
  {
    name: "Heard Island and Mcdonald Islands",
    ISO: "+0",
    countryCode: "HM",
  },
  {
    name: "Holy See (Vatican City State)",
    ISO: "+379",
    countryCode: "VA",
  },
  {
    name: "Honduras",
    ISO: "+504",
    countryCode: "HN",
  },
  {
    name: "Hong Kong",
    ISO: "+852",
    countryCode: "HK",
  },
  {
    name: "Hungary",
    ISO: "+36",
    countryCode: "HU",
  },
  {
    name: "Iceland",
    ISO: "+354",
    countryCode: "IS",
  },
  {
    name: "India",
    ISO: "+91",
    countryCode: "IN",
  },
  {
    name: "Indonesia",
    ISO: "+62",
    countryCode: "ID",
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    ISO: "+98",
    countryCode: "IR",
  },
  {
    name: "Iraq",
    ISO: "+964",
    countryCode: "IQ",
  },
  {
    name: "Ireland",
    ISO: "+353",
    countryCode: "IE",
  },
  {
    name: "Isle of Man",
    ISO: "+44",
    countryCode: "IM",
  },
  {
    name: "Israel",
    ISO: "+972",
    countryCode: "IL",
  },
  {
    name: "Italy",
    ISO: "+39",
    countryCode: "IT",
  },
  {
    name: "Jamaica",
    ISO: "+1876",
    countryCode: "JM",
  },
  {
    name: "Japan",
    ISO: "+81",
    countryCode: "JP",
  },
  {
    name: "Jersey",
    ISO: "+44",
    countryCode: "JE",
  },
  {
    name: "Jordan",
    ISO: "+962",
    countryCode: "JO",
  },
  {
    name: "Kazakhstan",
    ISO: "+7",
    countryCode: "KZ",
  },
  {
    name: "Kenya",
    ISO: "+254",
    countryCode: "KE",
  },
  {
    name: "Kiribati",
    ISO: "+686",
    countryCode: "KI",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    ISO: "+850",
    countryCode: "KP",
  },
  {
    name: "Korea, Republic of South Korea",
    ISO: "+82",
    countryCode: "KR",
  },
  {
    name: "Kosovo",
    ISO: "+383",
    countryCode: "XK",
  },
  {
    name: "Kuwait",
    ISO: "+965",
    countryCode: "KW",
  },
  {
    name: "Kyrgyzstan",
    ISO: "+996",
    countryCode: "KG",
  },
  {
    name: "Laos",
    ISO: "+856",
    countryCode: "LA",
  },
  {
    name: "Latvia",
    ISO: "+371",
    countryCode: "LV",
  },
  {
    name: "Lebanon",
    ISO: "+961",
    countryCode: "LB",
  },
  {
    name: "Lesotho",
    ISO: "+266",
    countryCode: "LS",
  },
  {
    name: "Liberia",
    ISO: "+231",
    countryCode: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    ISO: "+218",
    countryCode: "LY",
  },
  {
    name: "Liechtenstein",
    ISO: "+423",
    countryCode: "LI",
  },
  {
    name: "Lithuania",
    ISO: "+370",
    countryCode: "LT",
  },
  {
    name: "Luxembourg",
    ISO: "+352",
    countryCode: "LU",
  },
  {
    name: "Macao",
    ISO: "+853",
    countryCode: "MO",
  },
  {
    name: "Macedonia",
    ISO: "+389",
    countryCode: "MK",
  },
  {
    name: "Madagascar",
    ISO: "+261",
    countryCode: "MG",
  },
  {
    name: "Malawi",
    ISO: "+265",
    countryCode: "MW",
  },
  {
    name: "Malaysia",
    ISO: "+60",
    countryCode: "MY",
  },
  {
    name: "Maldives",
    ISO: "+960",
    countryCode: "MV",
  },
  {
    name: "Mali",
    ISO: "+223",
    countryCode: "ML",
  },
  {
    name: "Malta",
    ISO: "+356",
    countryCode: "MT",
  },
  {
    name: "Marshall Islands",
    ISO: "+692",
    countryCode: "MH",
  },
  {
    name: "Martinique",
    ISO: "+596",
    countryCode: "MQ",
  },
  {
    name: "Mauritania",
    ISO: "+222",
    countryCode: "MR",
  },
  {
    name: "Mauritius",
    ISO: "+230",
    countryCode: "MU",
  },
  {
    name: "Mayotte",
    ISO: "+262",
    countryCode: "YT",
  },
  {
    name: "Mexico",
    ISO: "+52",
    countryCode: "MX",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    ISO: "+691",
    countryCode: "FM",
  },
  {
    name: "Moldova",
    ISO: "+373",
    countryCode: "MD",
  },
  {
    name: "Monaco",
    ISO: "+377",
    countryCode: "MC",
  },
  {
    name: "Mongolia",
    ISO: "+976",
    countryCode: "MN",
  },
  {
    name: "Montenegro",
    ISO: "+382",
    countryCode: "ME",
  },
  {
    name: "Montserrat",
    ISO: "+1664",
    countryCode: "MS",
  },
  {
    name: "Morocco",
    ISO: "+212",
    countryCode: "MA",
  },
  {
    name: "Mozambique",
    ISO: "+258",
    countryCode: "MZ",
  },
  {
    name: "Myanmar",
    ISO: "+95",
    countryCode: "MM",
  },
  {
    name: "Namibia",
    ISO: "+264",
    countryCode: "NA",
  },
  {
    name: "Nauru",
    ISO: "+674",
    countryCode: "NR",
  },
  {
    name: "Nepal",
    ISO: "+977",
    countryCode: "NP",
  },
  {
    name: "Netherlands",
    ISO: "+31",
    countryCode: "NL",
  },
  {
    name: "Netherlands Antilles",
    ISO: "+599",
    countryCode: "AN",
  },
  {
    name: "New Caledonia",
    ISO: "+687",
    countryCode: "NC",
  },
  {
    name: "New Zealand",
    ISO: "+64",
    countryCode: "NZ",
  },
  {
    name: "Nicaragua",
    ISO: "+505",
    countryCode: "NI",
  },
  {
    name: "Niger",
    ISO: "+227",
    countryCode: "NE",
  },
  {
    name: "Nigeria",
    ISO: "+234",
    countryCode: "NG",
  },
  {
    name: "Niue",
    ISO: "+683",
    countryCode: "NU",
  },
  {
    name: "Norfolk Island",
    ISO: "+672",
    countryCode: "NF",
  },
  {
    name: "Northern Mariana Islands",
    ISO: "+1670",
    countryCode: "MP",
  },
  {
    name: "Norway",
    ISO: "+47",
    countryCode: "NO",
  },
  {
    name: "Oman",
    ISO: "+968",
    countryCode: "OM",
  },
  {
    name: "Pakistan",
    ISO: "+92",
    countryCode: "PK",
  },
  {
    name: "Palau",
    ISO: "+680",
    countryCode: "PW",
  },
  {
    name: "Palestinian Territory, Occupied",
    ISO: "+970",
    countryCode: "PS",
  },
  {
    name: "Panama",
    ISO: "+507",
    countryCode: "PA",
  },
  {
    name: "Papua New Guinea",
    ISO: "+675",
    countryCode: "PG",
  },
  {
    name: "Paraguay",
    ISO: "+595",
    countryCode: "PY",
  },
  {
    name: "Peru",
    ISO: "+51",
    countryCode: "PE",
  },
  {
    name: "Philippines",
    ISO: "+63",
    countryCode: "PH",
  },
  {
    name: "Pitcairn",
    ISO: "+64",
    countryCode: "PN",
  },
  {
    name: "Poland",
    ISO: "+48",
    countryCode: "PL",
  },
  {
    name: "Portugal",
    ISO: "+351",
    countryCode: "PT",
  },
  {
    name: "Puerto Rico",
    ISO: "+1939",
    countryCode: "PR",
  },
  {
    name: "Qatar",
    ISO: "+974",
    countryCode: "QA",
  },
  {
    name: "Romania",
    ISO: "+40",
    countryCode: "RO",
  },
  {
    name: "Russia",
    ISO: "+7",
    countryCode: "RU",
  },
  {
    name: "Rwanda",
    ISO: "+250",
    countryCode: "RW",
  },
  {
    name: "Reunion",
    ISO: "+262",
    countryCode: "RE",
  },
  {
    name: "Saint Barthelemy",
    ISO: "+590",
    countryCode: "BL",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    ISO: "+290",
    countryCode: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    ISO: "+1869",
    countryCode: "KN",
  },
  {
    name: "Saint Lucia",
    ISO: "+1758",
    countryCode: "LC",
  },
  {
    name: "Saint Martin",
    ISO: "+590",
    countryCode: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    ISO: "+508",
    countryCode: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    ISO: "+1784",
    countryCode: "VC",
  },
  {
    name: "Samoa",
    ISO: "+685",
    countryCode: "WS",
  },
  {
    name: "San Marino",
    ISO: "+378",
    countryCode: "SM",
  },
  {
    name: "Sao Tome and Principe",
    ISO: "+239",
    countryCode: "ST",
  },
  {
    name: "Saudi Arabia",
    ISO: "+966",
    countryCode: "SA",
  },
  {
    name: "Senegal",
    ISO: "+221",
    countryCode: "SN",
  },
  {
    name: "Serbia",
    ISO: "+381",
    countryCode: "RS",
  },
  {
    name: "Seychelles",
    ISO: "+248",
    countryCode: "SC",
  },
  {
    name: "Sierra Leone",
    ISO: "+232",
    countryCode: "SL",
  },
  {
    name: "Singapore",
    ISO: "+65",
    countryCode: "SG",
  },
  {
    name: "Slovakia",
    ISO: "+421",
    countryCode: "SK",
  },
  {
    name: "Slovenia",
    ISO: "+386",
    countryCode: "SI",
  },
  {
    name: "Solomon Islands",
    ISO: "+677",
    countryCode: "SB",
  },
  {
    name: "Somalia",
    ISO: "+252",
    countryCode: "SO",
  },
  {
    name: "South Africa",
    ISO: "+27",
    countryCode: "ZA",
  },
  {
    name: "South Sudan",
    ISO: "+211",
    countryCode: "SS",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    ISO: "+500",
    countryCode: "GS",
  },
  {
    name: "Spain",
    ISO: "+34",
    countryCode: "ES",
  },
  {
    name: "Sri Lanka",
    ISO: "+94",
    countryCode: "LK",
  },
  {
    name: "Sudan",
    ISO: "+249",
    countryCode: "SD",
  },
  {
    name: "Suriname",
    ISO: "+597",
    countryCode: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    ISO: "+47",
    countryCode: "SJ",
  },
  {
    name: "Swaziland",
    ISO: "+268",
    countryCode: "SZ",
  },
  {
    name: "Sweden",
    ISO: "+46",
    countryCode: "SE",
  },
  {
    name: "Switzerland",
    ISO: "+41",
    countryCode: "CH",
  },
  {
    name: "Syrian Arab Republic",
    ISO: "+963",
    countryCode: "SY",
  },
  {
    name: "Taiwan",
    ISO: "+886",
    countryCode: "TW",
  },
  {
    name: "Tajikistan",
    ISO: "+992",
    countryCode: "TJ",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    ISO: "+255",
    countryCode: "TZ",
  },
  {
    name: "Thailand",
    ISO: "+66",
    countryCode: "TH",
  },
  {
    name: "Timor-Leste",
    ISO: "+670",
    countryCode: "TL",
  },
  {
    name: "Togo",
    ISO: "+228",
    countryCode: "TG",
  },
  {
    name: "Tokelau",
    ISO: "+690",
    countryCode: "TK",
  },
  {
    name: "Tonga",
    ISO: "+676",
    countryCode: "TO",
  },
  {
    name: "Trinidad and Tobago",
    ISO: "+1868",
    countryCode: "TT",
  },
  {
    name: "Tunisia",
    ISO: "+216",
    countryCode: "TN",
  },
  {
    name: "Turkey",
    ISO: "+90",
    countryCode: "TR",
  },
  {
    name: "Turkmenistan",
    ISO: "+993",
    countryCode: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    ISO: "+1649",
    countryCode: "TC",
  },
  {
    name: "Tuvalu",
    ISO: "+688",
    countryCode: "TV",
  },
  {
    name: "Uganda",
    ISO: "+256",
    countryCode: "UG",
  },
  {
    name: "Ukraine",
    ISO: "+380",
    countryCode: "UA",
  },
  {
    name: "United Arab Emirates",
    ISO: "+971",
    countryCode: "AE",
  },
  {
    name: "United Kingdom",
    ISO: "+44",
    countryCode: "GB",
  },
  {
    name: "United States",
    ISO: "+1",
    countryCode: "US",
  },
  {
    name: "Uruguay",
    ISO: "+598",
    countryCode: "UY",
  },
  {
    name: "Uzbekistan",
    ISO: "+998",
    countryCode: "UZ",
  },
  {
    name: "Vanuatu",
    ISO: "+678",
    countryCode: "VU",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    ISO: "+58",
    countryCode: "VE",
  },
  {
    name: "Vietnam",
    ISO: "+84",
    countryCode: "VN",
  },
  {
    name: "Virgin Islands, British",
    ISO: "+1284",
    countryCode: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    ISO: "+1340",
    countryCode: "VI",
  },
  {
    name: "Wallis and Futuna",
    ISO: "+681",
    countryCode: "WF",
  },
  {
    name: "Yemen",
    ISO: "+967",
    countryCode: "YE",
  },
  {
    name: "Zambia",
    ISO: "+260",
    countryCode: "ZM",
  },
  {
    name: "Zimbabwe",
    ISO: "+263",
    countryCode: "ZW",
  },
]

export default countriesWithISO