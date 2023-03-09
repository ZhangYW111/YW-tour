import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://codercba.com:1888/api',
  // timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default instance