import axios from 'axios';

export const footballApi = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'ef58fad221ee68719ae6b7d580e3c5ff'
  }
});
