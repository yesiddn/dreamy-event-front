import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/files';

export default async function saveFile(API, data) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'POST',
    data,
    headers: {},
  });

  if (response.status === 201) {
    return response.json();
  } else if (response.status === 413) {
    Alert('file-too-large');
    return null;
  } else {
    Alert('something-went-wrong');
    return null;
  }
}
