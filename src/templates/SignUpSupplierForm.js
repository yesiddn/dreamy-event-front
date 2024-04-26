import validateInputData from '../utils/validate-input-data';
import '../styles/form.css';
import validateForm from '../utils/validate-form';
import saveFile from '../utils/save-file';
import saveUser from '../utils/save-user';
import saveLogin from '../utils/save-login';

const inputs = [
  {
    id: 'name',
    type: 'text',
    name: 'name',
    placeholder: 'Nombre de la empresa',
    errorMesage: 'El nombre debe tener al menos 3 caracteres.',
    validate: false,
    minLength: 3,
  },
  {
    id: 'email',
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    errorMesage: 'El correo debe tener un formato válido.',
    validate: false,
    minLength: 3,
  },
  {
    id: 'phone',
    type: 'number',
    name: 'phone',
    placeholder: 'Número de contacto',
    errorMesage: 'El teléfono debe tener 10 caracteres.',
    validate: false,
  },
  {
    id: 'rut',
    type: 'number',
    name: 'rut',
    placeholder: 'Número de RUT',
    errorMesage: 'El RUT debe tener al menos 8 caracteres.',
    validate: false,
  },
  {
    id: 'city',
    type: 'text',
    name: 'city',
    placeholder: 'Ciudad en la que se encuentra la empresa',
    errorMesage: 'La ciudad debe tener al menos 3 caracteres.',
    validate: false,
  },
  {
    id: 'country',
    type: 'text',
    name: 'country',
    placeholder: 'País en el que se encuentra la empresa',
    errorMesage: 'El país debe tener al menos 3 caracteres.',
    validate: false,
    minLength: 3,
  },
  {
    id: 'image',
    type: 'file',
    name: 'image',
    placeholder: 'Imagen de la empresa',
    accept: 'image/*',
    errorMesage: 'Seleccione un archivo válido.',
    validate: false,
  },
];

export default function SignUpSupplierForm(API) {
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
  label.textContent = `${input.placeholder}:`;

  const inputElement = document.createElement('input');
  inputElement.id = input.id;
  inputElement.type = input.type;
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
  const data = {
    customer: {},
  };

  for (let input of inputs) {
    const inputValue = document.getElementById(input.id).value;

    // TODO
  }

  const response = await saveUser(API, JSON.stringify(data));

  if (response) {
    saveLogin(response, 'user-created');
  }
}

function saveImage(API, image) {
  const formData = new FormData();
  formData.append('file', image);

  return saveFile(API, formData);
}
