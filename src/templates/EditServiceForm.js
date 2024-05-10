import validateInputData from '../utils/validate-input-data';
import '../styles/form.css';
import validateForm from '../utils/validate-form';
import saveFile from '../utils/save-file';
import saveLogin from '../utils/save-login';
import saveSupplier from '../utils/save-supplier';

const inputs = [
  {
    id: 'name',
    type: 'text',
    name: 'name',
    label: 'Nombre del servicio',
    placeholder: 'Restaurante',
    errorMesage: 'El nombre no puede estar vacío.',
    validate: false,
  },
  {
    id: 'description',
    element: 'textarea',
    name: 'description',
    label: 'Description',
    placeholder: 'Gran variedad de platos y bebidas.',
    errorMesage: 'La descripción no puede estar vacía.',
    validate: false,
  },
  {
    id: 'location',
    type: 'text',
    name: 'location',
    label: 'Dirección del servicio o empresa',
    placeholder: 'Calle 123',
    errorMesage: 'La dirección no puede estar vacía.',
    validate: false,
  },

  {
    id: 'department',
    type: 'text',
    name: 'department',
    label: 'Departamento en el que se encuentra el servicio o empresa',
    placeholder: 'Boyacá',
    errorMesage: 'El departamento no puede estar vacío.',
    validate: false,
  },
  {
    id: 'city',
    type: 'text',
    name: 'city',
    label: 'Ciuadad en la que se encuentra el servicio o empresa',
    placeholder: 'Duitama',
    errorMesage: 'La ciudad no puede estar vacía.',
    validate: false,
  },
  {
    id: 'people-amount',
    type: 'number',
    name: 'peopleAmount',
    label: 'Aforo del servicio',
    placeholder: '10',
    errorMesage: 'El aforo no puede estar vacío.',
    validate: false,
  },
  {
    id: 'characteristics',
    element: 'textarea',
    name: 'characteristics',
    label: 'Características del servicio',
    placeholder: 'Platos a la carta, menú del día, bebidas, postres.',
    errorMesage: 'Las características no pueden estar vacías.',
    validate: false,
  },
  {
    id: 'images',
    type: 'file',
    name: 'images',
    label: 'Imágenes del servicio',
    accept: 'image/*',
    errorMesage: 'Seleccione un archivo válido.',
    validate: false,
  },
];

export default function EditServiceForm(API) {
  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';

  const button = document.createElement('button');

  inputs.forEach((input) => {
    const label = createInput(input, button);
    form.appendChild(label);
  });

  button.type = 'button';
  button.id = 'form-button';
  button.textContent = 'Registrarse';
  button.disabled = true;

  button.addEventListener('click', () => {
    handleRegistration(API, inputs);
  });

  form.appendChild(button);

  return form;
}

function createInput(input, button) {
  const label = document.createElement('label');
  label.htmlFor = input.id;
  label.classList.add('form__input');
  label.textContent = `${input.label}:`;

  const inputElement = input.element ? document.createElement(input.element) : document.createElement('input');
  inputElement.id = input.id;
  input.element ? null : inputElement.type = input.type;
  inputElement.name = input.name;
  inputElement.placeholder = input.placeholder;

  if (input.minLength) inputElement.minLength = input.minLength;
  if (input.id === 'rut') inputElement.min = 10000000;
  if (input.id === 'phone') inputElement.min = 1000000000;
  if (input.type === 'file') {
    inputElement.accept = input.accept;

    inputElement.addEventListener('change', () => {
      validateProcess(input, inputElement, spanError, button);
    });
  }

  const spanError = document.createElement('span');
  spanError.classList.add('inactive');
  spanError.textContent = input.errorMesage;

  inputElement.addEventListener('keyup', () => {
    validateProcess(input, inputElement, spanError, button);
  });

  label.appendChild(inputElement);
  label.appendChild(spanError);

  return label;
}

function validateProcess(input, inputElement, spanError, button) {
  validateInputData(inputElement, spanError)
    ? (input.validate = true)
    : (input.validate = false);

  validateForm(inputs) ? (button.disabled = false) : (button.disabled = true);
}

async function handleRegistration(API, inputs) {
  const data = JSON.parse(localStorage.getItem('user'));
  data.supplier = {};

  for (let input of inputs) {
    const inputValue = document.getElementById(input.id).value;

    if (input.type === 'file') {
      const file = document.getElementById(input.id).files[0];
      const image = await saveImage(API, file);

      if (!image) return;

      data.supplier[input.name] = image.location;
    } else {
      data.supplier[input.name] = inputValue;
    }
  }

  const response = await saveSupplier(API, JSON.stringify(data));

  if (response) {
    saveLogin(response, 'supplier-created');
  }
}

function saveImage(API, image) {
  const formData = new FormData();
  formData.append('file', image);

  return saveFile(API, formData);
}
