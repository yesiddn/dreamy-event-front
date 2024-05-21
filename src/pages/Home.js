import Hero from '../templates/Hero.js';
import Header from '../templates/Header.js';
import RecommendedServices from '../templates/RecommendedServices.js';
import FilterBar from '../templates/filter-bar.js';
import Footer from '../templates/Footer.js';

const Home = (API, USER) => {
  Header(USER);
  Hero();
  RecommendedServices(API);
  FilterBar();
  Footer();
};

export default Home;