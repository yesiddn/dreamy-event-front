import Alert from "../templates/Alert";
import fetchData from "./fetch-data";

const ENDPOINT = '/events'

export default async function getEvents(API, customerId) {
  const response = await fetchData({
    API: `${API}${ENDPOINT}/${customerId}`,
    method: 'GET'
  });

  if (response.status === 200) {
    return response.json();
  } else {
    Alert('something-went-wrong');
    return null;
  }
}