const inputs = [
    {
      id: 'current-password',
      type: 'password',
      name: 'current-password',
      placeholder: 'Contraseña actual',
      validate: false,
      minLength: 8,
    },
    {
      id: 'new-password',
      type: 'password',
      name: 'new-password',
      placeholder: 'Nueva contraseña',
      validate: false,
      minLength: 8,
    },
    {
      id: 'confirm-password',
      type: 'password',
      name: 'confirm-password',
      placeholder: 'Confirmar contraseña',
      minLength: 8,
      validate: false,
    },
  ];
  
  export default function PasswordUpdate() {
  
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
  