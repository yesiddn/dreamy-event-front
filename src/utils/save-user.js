import fetchData from './fetch-data.js';

const ENDPOINT = '/user/save';

export default function saveUser(API, data) {
  return fetchData({
    API: API + ENDPOINT,
    method: 'POST',
    data,
  });
}
