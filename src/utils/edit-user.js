import Alert from '../templates/Alert';
import fetchData from './fetch-data';

const ENDPOINT = '/customer/update/';

export default async function editUser(API,id,updateDataUser) {
  const response = await fetchData({
    API: API + ENDPOINT + id,
    method: 'PUT',
    data: JSON.stringify(updateDataUser),
  });

  if (response.status === 200) {    
    Alert('user-edit-successfully','/profile');
    return response.json();
  } else {
    Alert('editUser-error');
    return null;
  }
}
