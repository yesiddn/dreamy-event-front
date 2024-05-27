import ListOfServices from "../../templates/list-of-services";
import getServicesByName from "../../utils/get-services-by-name";

export default async function SearchSection(API, USER, searchQuery) {
  const searchSection = document.createElement('section');
  searchSection.classList.add('search-section');

  const services = await getServicesByName(API, searchQuery);

  const searchResults = ListOfServices(services);
  searchSection.appendChild(searchResults);

  return searchSection;
}