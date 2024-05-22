import Hero from '../templates/Hero.js';
import Header from '../templates/Header.js';
import RecommendedServices from '../templates/RecommendedServices.js';
import FilterBar from '../templates/filter-bar.js';
import Footer from '../templates/Footer.js';
import getFavorites from '../utils/get-favorites.js'

const Home = (API, USER) => {

  /* crear una condicion para verificar si existe una llave de favoritos en el localstorage */
  getFavorites(API);
  Header(USER);
  Hero();
  RecommendedServices(API);
  FilterBar();
  Footer();
};

export default Home;