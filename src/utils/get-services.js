import fetchData from "./fetch-data";

const ENDPOINT = '/services'

export default function getServices(API) {
  return fetchData({
    API: API + ENDPOINT,
    method: 'GET'
  });
}