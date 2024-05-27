import Hero from '../templates/Hero.js';
import Header from '../templates/Header.js';
import RecommendedServices from '../templates/RecommendedServices.js';
import FilterBar from '../templates/filter-bar.js';
import Footer from '../templates/Footer.js';
import getFavorites from '../utils/get-favorites.js';

const Home = (API, USER) => {

  getFavorites(API, USER).then(favorites => {
    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      console.log('usuario sin listado de favoritos encontrado');
    }
  }).catch(error => {
    console.error('Error al intentar obtener favoritos:', error);
  });


  Header(USER);
  Hero();
  RecommendedServices(API);
  FilterBar();
  Footer();
};

export default Home;