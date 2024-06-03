import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/events/delete/';

export default async function deleteEvents(API, id) {
  const response = await fetchData({
    API: API + ENDPOINT + id,
    method: 'DELETE',
  });

  if (response.status === 200) {
    Alert('event deleted');
    return true;
  } else {
    Alert('something-went-wrong');
    return false;
  }
}
