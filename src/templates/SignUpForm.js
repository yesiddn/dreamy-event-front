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
    placeholder: 'Nombre',
    errorMesage: 'El nombre debe tener al menos 3 caracteres.',
    validate: false,
    minLength: 3,
  },
  {
    id: 'lastname',
    type: 'text',
    name: 'lastname',
    placeholder: 'Apellido',
    errorMesage: 'El apellido debe tener al menos 3 caracteres.',
    validate: false,
    minLength: 3,
  },
  {
    id: 'email',
    type: 'email',
    name: 'email',
    placeholder: 'Correo',
    errorMesage: 'El correo debe tener un formato válido.',
    validate: false,
    minLength: 3,
  },
  {
    id: 'password',
    type: 'password',
    name: 'password',
    placeholder: 'Contraseña',
    errorMesage: 'La contraseña debe tener al menos 8 caracteres.',
    validate: false,
    minLength: 8,
  },
  {
    id: 'phone',
    type: 'number',
    name: 'phone',
    placeholder: 'Teléfono',
    errorMesage: 'El teléfono debe tener 10 caracteres.',
    validate: false,
  },
  {
    id: 'city',
    type: 'text',
    name: 'city',
    placeholder: 'Ciudad',
    errorMesage: 'La ciudad debe tener al menos 3 caracteres.',
    validate: false,
    minLength: 3,
  },
  {
    id: 'country',
    type: 'text',
    name: 'country',
    placeholder: 'País',
    errorMesage: 'El país debe tener al menos 3 caracteres.',
    validate: false,
    minLength: 3,
  },
  {
    id: 'image',
    type: 'file',
    name: 'image',
    placeholder: 'Imagenes',
    accept: 'image/*',
    errorMesage: 'Seleccione un archivo válido.',
    validate: false,
  },
];

export default function SignUpForm(API) {
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
  if (input.type === 'number') inputElement.min = 1000000000;
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

    if (input.name === 'email' || input.name === 'password') {
      data[input.name] = inputValue;
    } else {
      if (input.type === 'file') {
        const file = document.getElementById(input.id).files[0];
        const image = await saveImage(API, file);

        if (!image) return

        data.customer[input.name] = image.location;
      } else {
        data.customer[input.name] = inputValue;
      }
    }
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
