import Header from '../../src/templates/Header.js';
import Hero from '../../src/templates/Hero.js';
import RecommendedServices from '../templates/RecommendedServices.js';

const Home = (API) => {
  Header();
  Hero();
  RecommendedServices(API);
};

export default Home;