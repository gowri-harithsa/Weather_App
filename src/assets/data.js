const mostlySunny = require('../assets/images/icon_mostly_sunny_small.png');
const rain = require('../assets/images/icon_rain_small.png');
const mostlyCloudy = require('../assets/images/icon_mostly_cloudy_small.png');
const partlyCloudy = require('../assets/images/icon_partly_cloudy_small.png');
const thunderstorm = require('../assets/images/icon_thunderstorm_small.png');
const clearNight = require('../assets/images/icon_clear_night_small.png');



export const DataList = [
    {
        city: 'Udupi, Karnataka',
        weatherImage: mostlySunny,
        temperature: '31°C',
        detail: 'Mostly Sunny',
        id: 1,
    },
    {
        city: 'Bengaluru, Karnataka',
        weatherImage: rain,
        temperature: '29°C',
        detail: 'Rain',
        id: 2,
    },
    {
        city: 'Mumbai, Maharashtra',
        weatherImage: mostlyCloudy,
        temperature: '32°C',
        detail: 'Mostly Cloudy',
        id: 3,
    },
    {
        city: 'Kolkatta, West Bengal',
        weatherImage: partlyCloudy,
        temperature: '30°C',
        detail: 'Partly Cloudy',
        id: 4,
    },
    {
        city: 'Panaji, Goa',
        weatherImage: thunderstorm,
        temperature: '31°C',
        detail: 'Thunderstorm',
        id: 5,
    },
    {
        city: 'Newyork, United States',
        weatherImage: clearNight,
        temperature: '24°C',
        detail: 'Clear Night',
        id: 6,
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
