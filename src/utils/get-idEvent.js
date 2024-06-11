import Alert from "../templates/Alert.js";
import fetchData from "./fetch-data.js";

const ENDPOINT = '/events/summary'

export default async function getEventById(API, eventId) {
  const response = await fetchData({
    API: `${API}${ENDPOINT}/${eventId}`,
    method: 'GET'
  });
  
  if (response.status === 200) {
    return response.json();
  } else {
    Alert('something-went-wrong');
    return null;
  }
}