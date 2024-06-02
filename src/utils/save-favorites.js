/* crear aqui la peticion a la API para guardar la lista de los favoritos en la pagina */

import fetchData from "./fetch-data";

const ENDPOINT = "/favorites";


export default async function saveFavorites(API, service) {
  const customer = JSON.parse(localStorage.getItem('user')).customer;
  const rBody = {
    service,
    customer
  };
  
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'POST',
    data: JSON.stringify(rBody)
  });

  if (response.status === 201) {
    return response.json();
  } else if (response.status === 400 || response.status === 409) {
    Alert('unsuccesful request');
    return null;
  } else {
    Alert('something-went-wrong');
    return null;
  }
}