import getServices from '../utils/get-services.js';
import CardService from './Card.js';
import '../styles/recommended-services.css';

export default async function RecommendedServices(API) {
  const recommendedServicesContainer = document.createElement('section');
  recommendedServicesContainer.classList.add('recommended-services-container');

  const recommendedServicesTitle = document.createElement('h2');
  recommendedServicesTitle.innerHTML = 'Servicios recomendados';
  recommendedServicesContainer.appendChild(recommendedServicesTitle);

  const recommendedServicesList = document.createElement('div');
  recommendedServicesList.classList.add('recommended-services__list');
  recommendedServicesContainer.appendChild(recommendedServicesList);

  const services = await getServices(API);

  console.log(services);
  services.forEach((service) => {
    const card = CardService(service);
    recommendedServicesList.appendChild(card);
  });

  document.querySelector('#app').appendChild(recommendedServicesContainer);
}
