import Alert from '../templates/Alert.js';
import fetchData from './fetch-data.js';

const ENDPOINT = '/services';

export default async function getServiceDetails(API, serviceId) {
  const response = await fetchData({
    API: `${API}${ENDPOINT}/${serviceId}`,
    method: 'GET',
  });

  if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    Alert('service-not-found');
    return null;
  } else {
    Alert('something-went-wrong');
    return null;
  }
}
