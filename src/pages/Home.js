import getServices from '../utils/get-services.js';
import Hero from '../templates/Hero.js';
import Header from '../templates/Header.js';
import RecommendedServices from '../templates/RecommendedServices.js';
import Footer from '../templates/Footer.js';
import FilterServiceSection from '../components/filterServiceByType/FilterServiceSection.js';

const Home = async (API, USER) => {
  const services = await getServices(API);

  Header(USER);
  Hero();
  RecommendedServices(API);
  FilterServiceSection(API, services);
  Footer();
};

export default Home;
