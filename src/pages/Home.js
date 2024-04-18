import Hero from '../templates/Hero.js';
import Header from '../templates/Header.js';
import RecommendedServices from '../templates/RecommendedServices.js';
import FilterBar from '../templates/filter-bar.js';

const Home = (API) => {
  Header();
  Hero();
  FilterBar();
  RecommendedServices(API);
};

export default Home;