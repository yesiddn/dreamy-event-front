import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/services/by/';

export default async function getServicesByName(API, name) {
  const response = await fetchData({
    API: API + ENDPOINT + name,
    method: 'GET',
  });

  if (response.status === 200) {
    return response.json();
  } else {
    Alert('something-went-wrong', '/');
    return null;
  }
}
