import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/favorites/';

export default async function deleteFavorite(API, id) {
  const response = await fetchData({
    API: API + ENDPOINT + id,
    method: 'DELETE',
  });

  if (response.status === 200) {
    Alert('favorite-removed');
    return true;
  } else {
    Alert('something-went-wrong');
    return false;
  }
}
