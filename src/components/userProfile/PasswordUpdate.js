const inputs = [
    {
      label: 'Contraseña actual',
      id: 'current-password',
      type: 'password',
      name: 'current-password',
      placeholder: 'Contraseña actual',
      validate: false,
      minLength: 8,
    },
    {
      label: 'Nueva contraseña',
      id: 'new-password',
      type: 'password',
      name: 'new-password',
      placeholder: 'Nueva contraseña',
      validate: false,
      minLength: 8,
    },
    {
      label: 'Confirmar contraseña',
      id: 'confirm-password',
      type: 'password',
      name: 'confirm-password',
      placeholder: 'Confirmar contraseña',
      minLength: 8,
      validate: false,
    },
  ];
  
  export default function PasswordUpdate() {
  
    const updatePasswordContainer = document.createElement('div');
    updatePasswordContainer.classList.add('update-password-container');
  
    const form = document.createElement('form');
    form.classList.add('form');
    form.id = 'form';
    updatePasswordContainer.appendChild(form);

    const label = document.createElement('label');
    const infoTitle = document.createElement('h2');
    infoTitle.textContent = 'Actualizar contraseña';
    label.appendChild(infoTitle);
    form.appendChild(label);
  
    inputs.forEach((input) => {
      const label = document.createElement('label');
      label.textContent = input.label
      label.classList.add('form__input');
      form.appendChild(label);
  
      const userInput = document.createElement('input');
      userInput.type = input.type;
      userInput.name = input.name;
      label.appendChild(userInput);
    });
  
    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'form-button';
    button.textContent = 'Guardar cambios';
    form.appendChild(button);
  
    updatePasswordContainer.appendChild(form);
    return updatePasswordContainer;
  }
  