import Hero from '../templates/Hero.js';
import Header from '../templates/Header.js';
import RecommendedServices from '../templates/RecommendedServices.js';
import FilterBar from '../templates/filter-bar.js';
import Footer from '../templates/Footer.js';
import favoritesList from '../utils/get-favorites.js';

const Home = (API, USER) => {

  /* crear una condicion para verificar si existe una llave de favoritos en el localstorage */

  if (favoritesList(API)) {
    favoritesList(API)
      .then(result => {
        console.log(result[0]);
      })
      .catch(error => {
        console.error('Error al obtener los favoritos:', error);
      });
  } else {
    'user without favorite data'
  }  
  
  Header(USER);
  Hero();
  RecommendedServices(API);
  FilterBar();
  Footer();
};

export default Home;