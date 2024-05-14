export default function UserInformation(USER) {

  const inputs = [
    {
      label: 'Nombre',
      id: 'name',
      type: 'text',
      name: 'name',
      value: USER.customer.name,
      errorMesage: 'El nombre debe tener al menos 3 caracteres.',
      validate: false,
      minLength: 3,
    },
    {
      label: 'Apellido',
      id: 'lastname',
      type: 'text',
      name: 'lastname',
      value: USER.customer.lastname,
      errorMesage: 'El apellido debe tener al menos 3 caracteres.',
      validate: false,
      minLength: 3,
    },
    {
      label: 'Telefono',
      id: 'phone',
      type: 'number',
      name: 'phone',
      value: USER.customer.phone,
      errorMesage: 'El teléfono debe tener 10 caracteres.',
      validate: false,
    },
    {
      label: 'Ciudad',
      id: 'city',
      type: 'text',
      name: 'city',
      value: USER.customer.city,
      errorMesage: 'La ciudad debe tener al menos 3 caracteres.',
      validate: false,
      minLength: 3,
    },
    {
      label: 'Pais',
      id: 'country',
      type: 'text',
      name: 'country',
      value: USER.customer.country,
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

  const userFormContainer = document.createElement('div');
  userFormContainer.classList.add('user-information-container');
  document.body.appendChild(userFormContainer);

  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';
  userFormContainer.appendChild(form);

  inputs.forEach((input) => {
    const label = document.createElement('label');
    label.textContent = input.label
    label.textcontent = input.placeholder;
    label.classList.add('form__input');
    form.appendChild(label);

    const userInput = document.createElement('input');
    userInput.type = input.type;
    userInput.name = input.name;

    if (input.type !== 'file') {
      userInput.value = input.value;};

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




