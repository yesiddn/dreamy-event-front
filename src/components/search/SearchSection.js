import ListOfServices from "../../templates/list-of-services";
import getServices from "../../utils/get-services";

export default async function SearchSection(API, USER, searchQuery) {
  const searchSection = document.createElement('section');
  searchSection.classList.add('search-section');

  // TODO: Implement search functionality
  const services = await getServices(API);

  const searchResults = ListOfServices(services);
  searchSection.appendChild(searchResults);

  return searchSection;
}