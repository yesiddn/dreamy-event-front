import Alert from "../templates/Alert";
import fetchData from './fetch-data.js';

const ENDPOINT = '/user/sendCode';

export default async function sendCodeEmail(API, email) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: "POST",
    params: {email}
  });

  if (response.status === 200) {
    Alert('code sent')
  return {success: true};
  } else {
    Alert('email not Found');
    return null;
  }
}
