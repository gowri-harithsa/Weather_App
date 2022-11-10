export const searchCity = async string => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0cefb33721mshd56eeff59af5d4bp150fafjsn8f12d10b38c7',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/search.json?q=${string}`,
    options,
  );
  try {
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
