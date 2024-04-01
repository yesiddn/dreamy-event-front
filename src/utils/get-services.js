import fetchData from "./fetch-data";

export default function getServices(API) {
  return fetchData({
    API: `${API}/services`,
    method: 'GET'
  });
}