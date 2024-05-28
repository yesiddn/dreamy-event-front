/* crear aqui la peticion a la API para traer la lista de los favoritos en la pagina */

import fetchData from "./fetch-data";

const ENDPOINT = "/favorites";


export default async function getFavorites(API, USER) {
  const userId = USER.customer.customerId;
  const response = await fetchData({
    API: API + ENDPOINT + '/customer/' + userId,
    method: 'GET'
  });

  if (response.status === 200) {
    const result = await response.json();

    const alejoArrayList = [];
    for (let index = 0; index < result.length; index++) {
      const element = result[index].service;
      alejoArrayList.push(element)
    }
    return alejoArrayList;

  } else {
    Alert('something-went-wrong');
    return null;
  }
}