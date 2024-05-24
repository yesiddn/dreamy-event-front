/* crear aqui la peticion a la API para traer la lista de los favoritos en la pagina */

import fetchData from "./fetch-data";

const ENDPOINT = "/favorites";


export default async function getFavorites(API) {
  const response = await fetchData({
    API: API + ENDPOINT,
    method: 'GET'
  });

  if (response.status === 200) { 
    const result = await response.json();
    return result;

}  else {
    Alert('something-went-wrong');
    return null;
  }
}