import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/events/update/';

export default async function editEvents(API, id, updateData) {
  const response = await fetchData({
    API: API + ENDPOINT + id,
    method: 'PUT',
    data: updateData,
  });

  if (response.status === 200) {
    Alert('event-edit-successfully', '/my-events');
    return response.json();
  } else {
    Alert('editEvent-error');
    return null;
  }
}
