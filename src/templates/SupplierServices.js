import getServices from '../utils/get-services.js';
import CardService from './Card.js';
import deleteService from '../utils/delete-service.js';
import '../styles/my-services.css';

export default async function SupplierServices(API) {
  const recommendedServicesContainer = document.createElement('section');
  recommendedServicesContainer.classList.add('my-services-container');

  const recommendedServicesHeader = document.createElement('div');
  recommendedServicesHeader.classList.add('my-services__header');
  recommendedServicesContainer.appendChild(recommendedServicesHeader);

  const recommendedServicesTitle = document.createElement('h2');
  recommendedServicesTitle.innerHTML = 'Mis Servicios';
  recommendedServicesHeader.appendChild(recommendedServicesTitle);
  // <a href="create-services" class="my-services__header__create">Nuevo servicio<span></span></a>

  const recommendedServicesHeaderCreate = document.createElement('a');
  recommendedServicesHeaderCreate.href = '/create-service';
  recommendedServicesHeaderCreate.classList.add('my-services__header__create');
  recommendedServicesHeaderCreate.innerHTML = 'Nuevo servicio<span></span>';
  recommendedServicesHeader.appendChild(recommendedServicesHeaderCreate);

  const recommendedServicesList = document.createElement('div');
  recommendedServicesList.classList.add('my-services__list');
  recommendedServicesContainer.appendChild(recommendedServicesList);

  const services = await getServices(API);

  console.log(services);
  services.forEach((service) => {
    const card = CardService(service, 'card-supplier');
    recommendedServicesList.appendChild(card);

    const serviceDelete = card.querySelector('.service__options__delete');
    serviceDelete.addEventListener('click', async (e) => {
      e.preventDefault();
  
      const serviceId = service.serviceId;
     const response =  await deleteService(API, serviceId)
        if(response){
          console.log('Servicio eliminado');
          card.remove();
        }else {
          console.log('Error al eliminar servicio')
        }
      })
  });
  document.querySelector('#app').appendChild(recommendedServicesContainer);
}
