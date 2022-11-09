const mostlySunny = require('../assets/images/icon_mostly_sunny_small.png');
const rain = require('../assets/images/icon_rain_small.png');
const mostlyCloudy = require('../assets/images/icon_mostly_cloudy_small.png');
const partlyCloudy = require('../assets/images/icon_partly_cloudy_small.png');
const thunderstorm = require('../assets/images/icon_thunderstorm_small.png');
const clearNight = require('../assets/images/icon_clear_night_small.png');



export const DataList = [
    {
        city: 'Udupi',
        id: 'Udupi',
        region: 'Karnataka',
        weatherImage: mostlySunny,
        temperature: '31°C',
        detail: 'Mostly Sunny',
    },
    {
        city: 'Bengaluru',
        id: 'Bengaluru',
        region: 'Karnataka',
        weatherImage: rain,
        temperature: '29°C',
        detail: 'Rain',

    },
    {
        city: 'Mumbai',
        id: 'Mumbai',
        region: 'Maharashtra',
        weatherImage: mostlyCloudy,
        temperature: '32°C',
        detail: 'Mostly Cloudy',

    },
    {
        city: 'Kolkatta',
        id: 'Kolkatta',
        region: 'West Bengal',
        weatherImage: partlyCloudy,
        temperature: '30°C',
        detail: 'Partly Cloudy',

    },
    {
        city: 'Panaji',
        id: 'Panaji',
        region: 'Goa',
        weatherImage: thunderstorm,
        temperature: '31°C',
        detail: 'Thunderstorm',

    },
    {
        city: 'Newyork',
        id: 'Newyork',
        region: 'United States',
        weatherImage: clearNight,
        temperature: '24°C',
        detail: 'Clear Night',

    },
];

export const RecentDataList = [
    {
        city: 'Karwar, Karnataka',
        weatherImage: mostlySunny,
        temperature: '31°C',
        detail: 'Mostly Sunny',
        favourite: require('../assets/images/favourite.png'),
    },
    {
        city: 'Coorg, Karnataka',
        weatherImage: rain,
        temperature: '29°C',
        detail: 'Rain',
        favourite: require('../assets/images/favourite.png'),

    },
    {
        city: 'Mumbai, Maharashtra',
        weatherImage: mostlyCloudy,
        temperature: '32°C',
        detail: 'Mostly Cloudy',
        favourite: require('../assets/images/icon_favourite_active.png'),

    },
    {
        city: 'Manipal, Karnataka',
        weatherImage: partlyCloudy,
        temperature: '30°C',
        detail: 'Partly Cloudy',
        favourite: require('../assets/images/favourite.png'),
    },
    {
        city: 'Panaji, Goa',
        weatherImage: thunderstorm,
        temperature: '31°C',
        detail: 'Thunderstorm',
        favourite: require('../assets/images/icon_favourite_active.png'),
    },
    {
        city: 'Newyork, United States',
        weatherImage: clearNight,
        temperature: '24°C',
        detail: 'Clear Night',
        favourite: require('../assets/images/icon_favourite_active.png'),
    },

];
// export default DataList;
