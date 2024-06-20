import Alert from "../../templates/Alert";
import NewPassword from "../../utils/new-password";

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

export default function PasswordUpdate(API, USER) {

  const updatePasswordContainer = document.createElement('div');
  updatePasswordContainer.classList.add('update-password-container');

  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';
  updatePasswordContainer.appendChild(form);

  const label = document.createElement('label');
  const infoTitle = document.createElement('h2');
  infoTitle.textContent = 'Contraseña';
  const infoSubtittle = document.createElement('h4');
  infoSubtittle.classList.add('form__subtittle');
  infoSubtittle.textContent = 'Actualiza aqui tu contraseña';
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
    label.appendChild(userInput);
  });

  const button = document.createElement('button');
  button.type = 'submit';
  button.id = 'form-button';
  button.textContent = 'Guardar cambios';
  form.appendChild(button);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const password = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === '' || newPassword === '' || confirmPassword === '') {
      Alert('password empty');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert('password mismatch Validator');
      return;
    }

    if (newPassword.length < 8) {
      Alert('password length not valid');
      return;
    }
      const result = await NewPassword(API, USER.id, password, newPassword);
  })

  updatePasswordContainer.appendChild(form);
  return updatePasswordContainer;
}
