import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/payment';

export default async function getPaymentURL(API, eventId) {
  const response = await fetchData({
    API: `${API}${ENDPOINT}/${eventId}`,
    method: 'GET',
  });

  if (response.status === 200) {
    return response.json();
  } else {
    Alert('something-went-wrong', window.location.href);
    return null;
  }
}
