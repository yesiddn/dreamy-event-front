import Alert from "../templates/Alert";
import fetchData from "./fetch-data";

const ENDPOINT = '/services'

export default async function getServices(API) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'GET'
  });

  if (response.status === 200) {
    return response.json();
  } else {
    Alert('something-went-wrong');
    return null;
  }
}