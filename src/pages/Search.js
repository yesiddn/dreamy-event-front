import SearchSection from "../components/search/SearchSection";
import Header from "../templates/Header";

export default async function Search(API, USER) {
  const searchQuery = window.location.search.split('=')[1].split('+').join(' ');
  const searchSection = await SearchSection(API, USER, searchQuery);

  Header(USER);

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');
  document.querySelector('#app').append(searchContainer);
  
  const searchHeader = document.createElement('div');
  searchHeader.classList.add('search-header');
  searchHeader.innerHTML = `
  <h2>Resultados de la búsqueda</h2>
  `;
  searchContainer.appendChild(searchHeader);

  searchContainer.appendChild(searchSection);  
}