import fetchData from "./fetch-data";

const ENDPOINT = '/services';

export default function saveServices(API) {
    return fetchData({
      API: API + ENDPOINT,
      method: 'POST'
    });
  }