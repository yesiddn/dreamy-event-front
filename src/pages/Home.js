import Header from '../../src/templates/Header.js';
import Hero from '../../src/templates/Hero.js';
import RecommendedServices from '../templates/RecommendedServices.js';
import EditServices from '../templates/EditServices.js';
const Home = (API) => {
  Header();
  Hero();
  RecommendedServices(API);
  EditServices(API);
};

export default Home;