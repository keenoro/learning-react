//Custom client for unsplash API
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID be75912055381ff0856507098c0a8ed287c208809ee9a5d84059bc3bdea0e625'
  }
});