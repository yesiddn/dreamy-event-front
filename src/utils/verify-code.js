import Alert from "../templates/Alert";
import fetchData from './fetch-data.js';

const ENDPOINT = '/user/verifyCode';

export default async function verifyCode(API, email, code) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: "POST",
    params: {email,code}
  });

  if (response.status === 200) {
      Alert('code correct')
      return {success: true};
  } else {
    Alert('wrong verification code')
    return null;
  }
}
