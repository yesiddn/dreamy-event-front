export default function FavoriteCards(){

    const favoritesSection = document.createElement('section');
    favoritesSection.classList.add('my-favorites');

    const favoritesHeader = document.createElement('div');
    favoritesHeader.classList.add('my-favorites__header');

    const favoritesTitle = document.createElement('h2');
    favoritesTitle.textContent = 'Favoritos';

    favoritesHeader.appendChild(favoritesTitle);
    favoritesSection.appendChild(favoritesHeader);
    document.body.appendChild(favoritesSection);

}