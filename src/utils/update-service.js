import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/services';

export default async function updateService(API, data) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'PUT',
    data,
  });

  if (response.status === 200) {
    return response.json();
  } else {
    Alert('service-update-error');
    return null;
  }
}
