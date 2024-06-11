import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/events/summary';

export default async function saveEventSummary(API, data) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'POST',
    data,
  });

  if (response.status === 201) {
    return response.json();
  } else if (response.status === 400) {
    Alert('event-error');
    return null;
  } else {
    Alert('something-went-wrong');
    return null;
  }
}
