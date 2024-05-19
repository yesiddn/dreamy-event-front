export default function UserSummary(USER) {

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
    ];
  
    const UserSummaryContainer = document.createElement('div');
    UserSummaryContainer.classList.add('user-information-container');
  
    const form = document.createElement('form');
    form.classList.add('form');
    form.id = 'form';
  
    const label = document.createElement('label');
    const infoTitle = document.createElement('h2');
    infoTitle.textContent = 'Perfil de usuario';
    const infoSubtittle = document.createElement('h4');
    infoSubtittle.classList.add('form__subtittle');
    infoSubtittle.textContent = 'Resumen de mi Información Personal';
    label.appendChild(infoTitle);
    label.appendChild(infoSubtittle);
    form.appendChild(label);
  
    inputs.forEach((input) => {
      const label = document.createElement('label');
      label.textContent = input.label
      label.classList.add('form__input');
      form.appendChild(label);
  
      const userInput = document.createElement('input');
      userInput.type = input.type;
      userInput.name = input.name;
      userInput.value = input.value;
      userInput.disabled = true;
      userInput.readOnly = true;
  
      label.appendChild(userInput);
    });
  
    UserSummaryContainer.appendChild(form);
  
    return UserSummaryContainer;
  }
  
  