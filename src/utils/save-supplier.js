import Alert from '../templates/Alert.js';
import fetchData from './fetch-data.js';

const ENDPOINT = '/supplier';

export default async function saveSupplier(API, data) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: "POST",
    data,
  });

  if (response.status === 201) {
    return response.json();
  } else if (response.status === 400 || response.status === 404) {
    Alert('user-not-found');
    return null;
  } else {
    Alert('something-went-wrong');
    return null;
  }
}
