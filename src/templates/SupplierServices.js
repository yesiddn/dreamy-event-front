import getServices from '../utils/get-services';
import CardService from './Card';
import deleteService from '../utils/delete-service';

export default async function SupplierServices(API) {

  const recommendedServicesContainer = document.createElement('section');
  recommendedServicesContainer.classList.add('my-services-container');

  const recommendedServicesTitle = document.createElement('h2');
  recommendedServicesTitle.innerHTML = 'Mis Servicios';
  recommendedServicesContainer.appendChild(recommendedServicesTitle);

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
