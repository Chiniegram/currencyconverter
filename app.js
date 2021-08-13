const currencyURL = 'https://v6.exchangerate-api.com/v6/0dd2b174b580b59b13604adb/latest/USD';

document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('country'); // variable for input
    const searchBtn = document.getElementById('btnSearch'); // variable for button
    const currencyData = document.getElementById('currencyData'); // variable for the field where we put our response
    let searchCurrencyCode = ''; // variable for currency code depending on country
    let countryFound = false; // this boolean to avoid call to API in case user input is not in the list
    let countryName = '';
    
    searchBtn.addEventListener('click', ()=> {
        // variable to store the input text
        let searchTerm = titleCase(inputBox.value.trim());
        // to display country name for the user in our response
        countryName = searchTerm; 
        // First of all check if input country is in European Union
        for (let i = 0; i < euro.length; i++) { 
            if (searchTerm == euro[i]) {
                searchTerm = 'European Union';
            }
         };
         // Second check if input country is a part of United Kingdom
         
         for (let i = 0; i < greatBritain.length; i++) { 
            if (searchTerm == greatBritain[i]) {
                searchTerm = 'United Kingdom';
            }
         };

        // loop through the countries
        for (let i = 0; i < currencyCountries.length; i++) {
                // before API call checking if input text matches with any country in our list
                if(searchTerm == currencyCountries[i]) {
                // if there is a match we assign currency code to the variable
                searchCurrencyCode = currencyCodes[i];
                // turning to true to confirm we found country in the list
                countryFound = true;
                // if user already made search we need to delete the row from previous search
                let tr = document.querySelector('tr');
                if(tr != null) {tr.remove();}

                // API call
                fetch(currencyURL)
                .then((response) => {
                return response.json();
                })
                .then((jsonData) => {
                // variable to store the response
                const rate = jsonData.conversion_rates[searchCurrencyCode];
                // creating new row in DOM
                const newRow = buildRow(rate, countryName, searchCurrencyCode);
                // adding our new line in DOM
                currencyData.appendChild(newRow); 
                })
                // in case there is an error in our code when we unpacking the response
                .catch((err) => {
                    // text of an error
                    alert('Surprise!');
                    // also message to console
                    console.error(err);
                });
                } 
            } 
        // in case we didn't find user's country we need to inform him
        if (!countryFound) { alert('We are case sensitive! Check the spelling!'); } 
    })
    
});
// function to create a row
function buildRow(data, country, currencyCode) {
    const tr = document.createElement('tr');
    const currentRateBox = document.createElement('td');
    currentRateBox.innerText = '1 USD in ' + country + ' = ' + data + ' ' + currencyCode;
    tr.append(currentRateBox);
    return tr; 
};
// function to help case sensitive of input word
function titleCase(title, exceptionWords) {
    const exceptions = exceptionWords === undefined ? [] : exceptionWords.toLowerCase().split(' ');
    let words = title.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      if (!exceptions.includes(words[i]) || i === 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
    return words.join(' ');
  }

// Great Britain countries

const greatBritain = [
    'England',
    'Scotland',
    'Northern Ireland',
    'Wales'
];

//Euro countries
const euro = [
    'Austria',
    'Belgium',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Ireland',
    'Italy',
    'Latvia',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Netherlands',
    'Poland',
    'Portugal',
    'Romania',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden'
];

// variable with a list of countries
const currencyCountries = [
    'United Arab Emirates',
    'Afghanistan',
    'Albania',
    'Armenia',
    'Netherlands Antilles',
    'Angola',
    'Argentina',
    'Australia',
    'Aruba',
    'Azerbaijan',
    'Bosnia and Herzegovina',
    'Barbados',
    'Bangladesh',
    'Bulgaria',
    'Bahrain',
    'Burundi',
    'Bermuda',
    'Brunei',
    'Bolivia',
    'Brazil',
    'Bahamas',
    'Bhutan',
    'Botswana',
    'Belarus',
    'Belize',
    'Canada',
    'Democratic Republic of the Congo',
    'Switzerland',
    'Chile',
    'China',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Cape Verde',
    'Czech Republic',
    'Djibouti',
    'Denmark',
    'Dominican Republic',
    'Algeria',
    'Egypt',
    'Eritrea',
    'Ethiopia',
    'European Union',
    'Fiji',
    'Falkland Islands',
    'Faroe Islands',
    'United Kingdom',
    'Georgia',
    'Guernsey',
    'Ghana',
    'Gibraltar',
    'The Gambia',
    'Guinea',
    'Guatemala',
    'Guyana',
    'Hong Kong',
    'Honduras',
    'Croatia',
    'Haiti',
    'Hungary',
    'Indonesia',
    'Israel',
    'Isle of Man',
    'India',
    'Iraq',
    'Iran',
    'Iceland',
    'Jamaica',
    'Jordan',
    'Japan',
    'Kenya',
    'Kyrgyzstan',
    'Cambodia',
    'Kiribati',
    'Comoros',
    'South Korea',
    'Kuwait',
    'Cayman Islands',
    'Kazakhstan',
    'Laos',
    'Lebanon',
    'Sri Lanka',
    'Liberia',
    'Lesotho',
    'Libya',
    'Morocco',
    'Moldova',
    'Madagascar',
    'North Macedonia',
    'Myanmar',
    'Mongolia',
    'Macau',
    'Mauritania',
    'Mauritius',
    'Maldives',
    'Malawi',
    'Mexico',
    'Malaysia',
    'Mozambique',
    'Namibia',
    'Nigeria',
    'Nicaragua',
    'Norway',
    'Nepal',
    'New Zealand',
    'Oman',
    'Panama',
    'Peru',
    'Papua New Guinea',
    'Philippines',
    'Pakistan',
    'Poland',
    'Paraguay',
    'Qatar',
    'Romania',
    'Serbia',
    'Russia',
    'Rwanda',
    'Saudi Arabia',
    'Solomon Islands',
    'Seychelles',
    'Sudan',
    'Sweden',
    'Singapore',
    'Saint Helena',
    'Sierra Leone',
    'Somalia',
    'Suriname',
    'South Sudan',
    'Sao Tome and Principe',
    'Syria',
    'Eswatini',
    'Thailand',
    'Tajikistan',
    'Turkmenistan',
    'Tunisia',
    'Tonga',
    'Turkey',
    'Trinidad and Tobago',
    'Tuvalu',
    'Taiwan',
    'Tanzania',
    'Ukraine',
    'Uganda',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Vanuatu',
    'Samoa',
    'CEMAC',
    'Organisation of Eastern Caribbean States',
    'International Monetary Fund',
    'CFA',
    'Collectivites d Outre-Mer',
    'Yemen',
    'South Africa',
    'Zambia'
];
// variable with a list of currency codes
const currencyCodes = [
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYN',
    'BZD',
    'CAD',
    'CDF',
    'CHF',
    'CLP',
    'CNY',
    'COP',
    'CRC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'FOK',
    'GBP',
    'GEL',
    'GGP',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'IMP',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KID',
    'KMF',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLL',
    'SOS',
    'SRD',
    'SSP',
    'STN',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TVD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'UYU',
    'UZS',
    'VES',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XCD',
    'XDR',
    'XOF',
    'XPF',
    'YER',
    'ZAR',
    'ZMW'
];