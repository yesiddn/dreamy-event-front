import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/services';

export default async function saveServices(API, data) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'POST',
    data,
  });

  if (response.status === 201) {
    return response.json();
  } else {
    Alert('service-error');
    return null;
  }
}
