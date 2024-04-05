import '../styles/create-service.css'
import CreateServiceForm from './CreateServiceForm.js';
import saveServices from '../utils/save-service.js';

export default async function CreateServiceSection(API) {
  const createServiceContainer = document.createElement('section');
  createServiceContainer.classList.add('form-section');

  const serviceContainer = document.createElement('div');
  serviceContainer.classList.add('form__container');
  createServiceContainer.appendChild(serviceContainer);
  
    const square = document.createElement('div');
    square.classList.add('square');
    serviceContainer.appendChild(square);

  const title = document.createElement('h2');
  title.innerHTML = 'Registrar nuevo <span class="primary">servicio</span>';
  serviceContainer.appendChild(title);

  const createService = CreateServiceForm();
  serviceContainer.appendChild(createService);

  createService.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(createService);
    const serviceData = {
      name: formData.get('name-service'),
      description: formData.get('description-service'),
      price: Number(formData.get('price-service')),
      address: formData.get('location-service'),
      city: formData.get('city-service'),
      country: formData.get('country-service'),
      amountPeople: Number(formData.get('peopleAmount-service')),
      characteristics: formData.get('characterisitcs-service'),
      images: [
        {
          url: 'files/98c6e683-8985-48a5-ae41-8f00b0d69130-chisato-y-takina.jpg',
        },
      ],
    };

    const serviceDataString = JSON.stringify(serviceData);

    try {
      await saveServices(API,  serviceDataString);
      console.log('Servicio registrado');
    } catch (error) {
      console.log('Error al registrar el servicio:', error);
    }
  });

  document.querySelector('#app').appendChild(createServiceContainer);
}
