import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/services/';

export default async function deleteService(API, id) {
  const response = await fetchData({
    API: API + ENDPOINT + id,
    method: 'DELETE',
  });

  if (response.status === 200) {
    Alert('service deleted');
    return true;
  } else {
    Alert('something-went-wrong');
    return false;
  }
}


