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
    const files = createService.querySelector('#file-service').files;
    console.log(files);
    let images = [];

    for (let i = 0; i < files.length; i++) {
      try {
        const imageData = await saveImages(files[i]);
        const image = { url: imageData.location };
        images.push(image);
      } catch (error) {
        console.log('Error al guardar la imagen:', error);
      }
    }

    const serviceData = {
      name: formData.get('name-service'),
      description: formData.get('description-service'),
      price: Number(formData.get('price-service')),
      address: formData.get('location-service'),
      city: formData.get('city-service'),
      country: formData.get('country-service'),
      amountPeople: Number(formData.get('peopleAmount-service')),
      characteristics: formData.get('characterisitcs-service'),
      images,
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

async function saveImages(image) {
  const formData = new FormData();
  formData.append('file', image);

  const response = await fetch('http://localhost:3000/api/v1/files', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  return data;
}