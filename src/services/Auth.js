// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0cefb33721mshd56eeff59af5d4bp150fafjsn8f12d10b38c7',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Udupi', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = 'https://weatherapi-com.p.rapidapi.com/';

export const DisplayData = async (body) => {
    const res = await fetch(BASE_URL + 'current.json?q=Udupi', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0cefb33721mshd56eeff59af5d4bp150fafjsn8f12d10b38c7',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	},
      body: JSON.stringify(body),
    });
    const response = await res.json();
    console.warn(response);
    try {
      const stringifiedCurrent = JSON.stringify(response.current);
      const stringifiedLocation = JSON.stringify(response.location);

    } catch (error) {
      console.log(error);
    }
    // console.log(response);
    return response;
  };