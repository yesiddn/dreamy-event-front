import CardService from './Card';
import getFavorites from '../utils/get-favorites';

export default async function FavoriteCards(API){
    /* cuerpo */ 
    const favoritesSection = document.createElement('section');
    favoritesSection.classList.add('my-favorites');

    const favoritesHeader = document.createElement('div');
    favoritesHeader.classList.add('my-favorites__header');

    const favoritesTitle = document.createElement('h2');
    favoritesTitle.textContent = 'Favoritos';

    const favoriteListContainer = document.createElement('div');
    favoriteListContainer.classList.add('recommended-services__list');
  

    favoritesHeader.appendChild(favoritesTitle);
    favoritesSection.appendChild(favoritesHeader);
    favoritesSection.appendChild(favoriteListContainer);

   

    const favorites = await getFavorites(API);
    if (!favorites) {
        return;
      }
      const array = [];
      array.push(favorites)
      
      array.forEach((service) => {
        const card = CardService(service);
        favoriteListContainer.appendChild(card);
      });
      

    document.querySelector('#app').appendChild(favoritesSection);


}