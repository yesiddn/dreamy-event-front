import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/services/supplier';

export default async function getServicesBySupplier(API, supplierId) {
  const response = await fetchData({
    API: `${API}${ENDPOINT}/${supplierId}`,
    method: 'GET',
  });

  if (response.status === 200) {
    return response.json();
  } else {
    Alert('something-went-wrong');
    return null;
  }
}
