import CardService from '../../templates/Card';


export default function FavoriteSection(API, USER){
    
    const favoritesSection = document.createElement('section');
    favoritesSection.classList.add('my-favorites');

    const favoritesHeader = document.createElement('div');
    favoritesHeader.classList.add('my-favorites__header');

    const favoritesTitle = document.createElement('h2');
    favoritesTitle.textContent = 'Favoritos';

    const favoriteListContainer = document.createElement('div');
    favoriteListContainer.classList.add('recommended-services__list');

    const recommendedServicesList = document.createElement('div');
    recommendedServicesList.classList.add('recommended-services__list');
    favoriteListContainer.appendChild(recommendedServicesList); 

    favoritesHeader.appendChild(favoritesTitle);
    favoritesSection.appendChild(favoritesHeader);
    favoritesSection.appendChild(favoriteListContainer);

    const favorites = JSON.parse(localStorage.getItem('favorites'));

    console.log(favorites);

    if (!favorites) {
      return;
    }
    favorites.forEach((service) => {
      const card = CardService(service, 'card-user', API);
      recommendedServicesList.appendChild(card);
    });

    document.querySelector('#app').appendChild(favoritesSection);


}

