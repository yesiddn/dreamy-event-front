import fetchData from './fetch-data';

const ENDPOINT = '/services';

export default function saveServices(API, data) {
  return fetchData({
    API: API + ENDPOINT,
    method: 'POST',
    data,
  });
}
