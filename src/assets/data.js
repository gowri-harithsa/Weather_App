const mostlySunny = require('../assets/images/icon_mostly_sunny_small.png');
const rain = require('../assets/images/icon_rain_small.png');
const mostlyCloudy = require('../assets/images/icon_mostly_cloudy_small.png');
const partlyCloudy = require('../assets/images/icon_partly_cloudy_small.png');
const thunderstorm = require('../assets/images/icon_thunderstorm_small.png');
const clearNight = require('../assets/images/icon_clear_night_small.png');



const DataList = [
    {
        city: 'Udupi, Karnataka',
        weatherImage: mostlySunny,
        temperature: '31°C',
        detail: 'Mostly Sunny',
    },
    {
        city: 'Bengaluru, Karnataka',
        weatherImage: rain,
        temperature: '29°C',
        detail: 'Rain'
    },
    {
        city: 'Mumbai, Maharashtra',
        weatherImage: mostlyCloudy,
        temperature: '32°C',
        detail: 'Mostly Cloudy'
    },
    {
        city: 'Kolkatta, West Bengal',
        weatherImage: partlyCloudy,
        temperature: '30°C',
        detail: 'Partly Cloudy'
    },
    {
        city: 'Panaji, Goa',
        weatherImage: thunderstorm,
        temperature: '31°C',
        detail: 'Thunderstorm'
    },
    {
        city: 'Newyork, United States',
        weatherImage: clearNight,
        temperature: '24°C',
        detail: 'Clear Night'
    },
];
export default DataList;