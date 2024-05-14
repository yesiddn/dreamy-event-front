import '../styles/form.css';
import login from '../utils/login';
import saveLogin from '../utils/save-login';

export default function LoginForm(API) {
  const form = document.createElement('form');
  form.classList.add('form');

  const labelEmail = document.createElement('label');
  labelEmail.htmlFor = 'email';
  labelEmail.classList.add('form__input');
  labelEmail.textContent = 'Email:';
  form.appendChild(labelEmail);

  const inputEmail = document.createElement('input');
  inputEmail.id = 'email';
  inputEmail.type = 'text';
  inputEmail.name = 'email';
  inputEmail.placeholder = 'Email';
  inputEmail.addEventListener('keyup', function () {
    validateInputData('email');
  });
  labelEmail.appendChild(inputEmail);

  const labelPass = document.createElement('label');
  labelPass.htmlFor = 'password';
  labelPass.classList.add('form__input');
  labelPass.textContent = 'Contraseña:';
  form.appendChild(labelPass);

  const inputPass = document.createElement('input');
  inputPass.id = 'password';
  inputPass.type = 'password';
  inputPass.name = 'password';
  inputPass.placeholder = 'Password';
  inputPass.addEventListener('keyup', function () {
    validateInputData('password');
  });
  labelPass.appendChild(inputPass);

  const button = Button(API, inputEmail, inputPass);
  form.appendChild(button);

  const anchor = document.createElement('a');
  anchor.href = '/reset-password';
  anchor.textContent = '¿Olvidaste tu contraseña?';
  form.appendChild(anchor);

  return form;
}

function Button(API, inputEmail, inputPass) {
  const button = document.createElement('button');
  button.id = 'button';
  button.type = 'button';
  button.textContent = 'Ingresar';

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const data = {
      email: inputEmail.value,
      password: inputPass.value,
    };

    loginProcess(API, JSON.stringify(data));
  });

  return button;
}

async function loginProcess(API, data) {
  const response = await login(API, data);

  if (response) {
    saveLogin(response, 'welcome');
  }
}