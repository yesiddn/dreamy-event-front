import Alert from "../templates/Alert";
import fetchData from "./fetch-data";

const ENDPOINT = "/auth/login";

export default async function login(API, data) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: "POST",
    data,
  });

  if (response.status === 200) {
    return response.json();
  } else if (response.status === 401 || response.status === 400) {
    Alert("login-error");
    return null;
  } else {
    Alert("something-went-wrong");
    return null;
  }
}