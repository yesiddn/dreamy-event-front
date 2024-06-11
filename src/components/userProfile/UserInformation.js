import editUser from "../../utils/edit-user";

export default function UserInformation(API,USER) {

  let userObjProp = {}

  if (localStorage.getItem('updatedData')) {
    let gettingData = JSON.parse(localStorage.getItem('updatedData'));
    userObjProp = gettingData;
  } else {
    userObjProp = USER.customer;
  };

  const inputs = [
    {
      label: 'Nombre',
      id: 'name',
      type: 'text',
      name: 'name',
      value: userObjProp.name,
      errorMesage: 'El nombre debe tener al menos 3 caracteres.',
      validate: false,
      minLength: 3,
    },
    {
      label: 'Apellido',
      id: 'lastname',
      type: 'text',
      name: 'lastname',
      value: userObjProp.lastname,
      errorMesage: 'El apellido debe tener al menos 3 caracteres.',
      validate: false,
      minLength: 3, 
    },
    {
      label: 'Telefono',
      id: 'phone',
      type: 'number',
      name: 'phone',
      value: userObjProp.phone,
      errorMesage: 'El teléfono debe tener 10 caracteres.',
      validate: false,
    },
    {
      label: 'Ciudad',
      id: 'city',
      type: 'text',
      name: 'city',
      value: userObjProp.city,
      errorMesage: 'La ciudad debe tener al menos 3 caracteres.',
      validate: false,
      minLength: 3,
    },
    {
      label: 'Pais',
      id: 'country',
      type: 'text',
      name: 'country',
      value: userObjProp.country,
      errorMesage: 'El país debe tener al menos 3 caracteres.',
      validate: false,
      minLength: 3,
    },
  ];

  const userInformationContainer = document.createElement('div');
  userInformationContainer.classList.add('update-information-container');

  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';

  const label = document.createElement('label');
  const infoTitle = document.createElement('h2');
  infoTitle.textContent = 'Actualizar perfil';
  const infoSubtittle = document.createElement('h4');
  infoSubtittle.classList.add('form__subtittle');
  infoSubtittle.textContent = 'Actualiza aqui tus detalles de contacto';
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
    userInput.id = input.id;
    userInput.value = input.value;

    label.appendChild(userInput);
  });

  const button = document.createElement('button');
  button.type = 'submit';
  button.id = 'form-button';
  button.textContent = 'Guardar cambios';
  form.appendChild(button);
  userInformationContainer.appendChild(form);


  form.addEventListener('submit',async (event) => {
    event.preventDefault();

      const updateUser = {
        name: document.getElementById('name').value,
        lastname: document.getElementById('lastname').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value
      }
    
    try {
      const response = await editUser(API, USER.customer.customerId, updateUser);
  
      if (response) {
        console.log('usuario editado')
      }else{
        console.log('no editado')
      }
    } catch (error) {
      console.log('error:', error)
    }
  
  })

  return userInformationContainer;
}




