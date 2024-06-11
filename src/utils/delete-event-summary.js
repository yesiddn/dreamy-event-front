import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/events/summary/';

export default async function deleteEventSummary(API, summaryId) {
  const response = await fetchData({
    API: API + ENDPOINT + summaryId,
    method: 'DELETE',
  });

  if (response.status === 200) {
    return true;
  } else {
    Alert('something-went-wrong');
    return false;
  }
}
