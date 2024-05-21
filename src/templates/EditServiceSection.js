import '../styles/form-section.css';
import EditServiceForm from './EditServiceForm.js';

export default async function EditServiceSection(API) {
  const editServiceSection = document.createElement('section');
  editServiceSection.classList.add('form-section');

  const serviceContainer = document.createElement('div');
  serviceContainer.classList.add('form__container');
  editServiceSection.appendChild(serviceContainer);

  const square = document.createElement('div');
  square.classList.add('square');
  serviceContainer.appendChild(square);

  const title = document.createElement('h2');
  title.innerHTML = 'Editar <span class="primary">servicio</span>';
  serviceContainer.appendChild(title);

  const editServiceForm = await EditServiceForm(API);
  serviceContainer.appendChild(editServiceForm);

  document.querySelector('#app').appendChild(editServiceSection);
}
