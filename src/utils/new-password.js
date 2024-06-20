import Alert from "../templates/Alert";
import fetchData from './fetch-data.js';

const ENDPOINT = '/user/newPassword';

export default async function NewPassword(API, id, password,newPassword) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: "PUT",
    params: {id, password, newPassword}
  });

  if (response.status === 200) {
    Alert('password changed', '/profile')
  return  true;
  } else {
    Alert('error-password');
    return null;
  }
}
