import Alert from "../templates/Alert";
import fetchData from './fetch-data.js';

const ENDPOINT = '/user/changePassword';

export default async function newPassword(API, email, newPassword) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: "POST",
    params: {email, newPassword}
  });

  if (response.status === 200) {
    Alert('password changed')
  return {success: true};
  } else {
    alert('cambio no realizado');
    return null;
  }
}
