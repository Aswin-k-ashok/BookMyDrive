const Car = {
  method: 'GET',
  // url: search,
  url: 'https://car-data.p.rapidapi.com/cars/makes',
  params: { limit: '20' },
  headers: {
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
    'X-RapidAPI-Key': '920b90c12emshf9514894a42fba7p1cf6dbjsn485cb5781996',
  },
}

export default Car
