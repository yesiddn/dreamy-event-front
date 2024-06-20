import Alert from '../templates/Alert.js';
import fetchData from './fetch-data.js';

const ENDPOINT = '/typeevent';

export default async function getTypeEvents(API) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'GET',
  });

  if (response.status === 200) {
    return response.json();
  } else {
    Alert('something-went-wrong');
    return null;
  }
}
