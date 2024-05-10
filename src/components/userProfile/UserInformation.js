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

export default function UserInformation() {


  const userFormContainer = document.createElement('div');
  userFormContainer.classList.add('user-information-container');
  document.body.appendChild(userFormContainer);


  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';
  userFormContainer.appendChild(form);

  inputs.forEach((input) => {
    const label = document.createElement('label');
    label.textcontent = input.placeholder;
    label.classList.add('form__input');
    form.appendChild(label);

    const userInput = document.createElement('input');
    userInput.type = input.type;
    userInput.name = input.name;
    userInput.placeholder = input.placeholder;
    label.appendChild(userInput);
  });

  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'form-button';
  button.textContent = 'Guardar cambios';
  button.disabled = true;
  form.appendChild(button);

  return form;
}




