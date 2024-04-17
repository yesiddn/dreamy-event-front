import Hero from '../templates/Hero.js';
import Header from '../templates/Header.js';
import RecommendedServices from '../templates/RecommendedServices.js';

const Home = (API, USER) => {
  Header(USER);
  Hero();
  RecommendedServices(API);
};

export default Home;