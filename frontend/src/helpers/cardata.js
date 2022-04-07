import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://car-data.p.rapidapi.com/cars/types',
  headers: {
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
    'X-RapidAPI-Key': '920b90c12emshf9514894a42fba7p1cf6dbjsn485cb5781996',
  },
}

export const cardata = async () => {
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
}
