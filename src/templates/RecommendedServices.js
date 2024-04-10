import getServices from '../utils/get-services';
import CardService from './Card';
import '../styles/list-of-services.css';

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

  if (!services) {
    return;
  }

  services.forEach((service) => {
    const card = CardService(service);
    recommendedServicesList.appendChild(card);
  });

  document.querySelector('#app').appendChild(recommendedServicesContainer);
}
