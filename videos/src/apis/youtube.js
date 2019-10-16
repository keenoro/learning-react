import axios from 'axios';

const KEY = 'AIzaSyD5-nEWEHUWja8PxDm35p5Kio0g6nLD6VU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});