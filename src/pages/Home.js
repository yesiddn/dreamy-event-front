import Hero from '../templates/Hero.js';
import Header from '../templates/Header.js';
import RecommendedServices from '../templates/RecommendedServices.js';
import FilterServiceByType from '../templates/filter-service-by-type.js';
import Footer from '../templates/Footer.js';

const Home = (API, USER) => {
  Header(USER);
  Hero();
  RecommendedServices(API);
  FilterServiceByType(API);
  Footer();
};

export default Home;
