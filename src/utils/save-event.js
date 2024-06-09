import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/events';

export default async function saveEvents(API, data) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'POST',
    data,
  });

  if (response.status === 201) {
    return response.json();
  } else {
    Alert('event-error');
    return null;
  }
}
