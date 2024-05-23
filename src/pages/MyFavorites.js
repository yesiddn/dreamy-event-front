import Header from '../templates/Header.js';
import '../styles/favorites.css'
import FavoriteCards from '../templates/FavoriteCards.js';

const myFavorites = (API, USER) => {
    Header(USER);
    FavoriteCards();
};

export default myFavorites;