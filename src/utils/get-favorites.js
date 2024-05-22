/* crear aqui la peticion a la API para traer la lista de los favoritos en la pagina */
import fetchData from "./fetch-data";

const ENDPOINT = "/favorites";

export default async function getFavorites(API, USER) {
    const response = await fetchData({
        API: API + ENDPOINT,
        method: "GET",
    });
};

return response.json();