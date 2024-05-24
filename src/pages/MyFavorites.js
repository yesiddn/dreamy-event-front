import Header from '../templates/Header.js';
import '../styles/favorites.css'
import FavoriteSection from '../components/Favorites/FavoriteSection.js';

const myFavorites = (API, USER) => {
    Header(USER);
    FavoriteSection(API);
};

export default myFavorites;