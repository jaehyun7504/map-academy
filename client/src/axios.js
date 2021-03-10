import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://map-academy-7504-default-rtdb.firebaseio.com',
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
