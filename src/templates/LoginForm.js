import '../styles/form.css';

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
  inputPass.type = 'text';
  inputPass.name = 'password';
  inputPass.placeholder = 'Password';
  inputPass.addEventListener('keyup', function () {
    validateInputData('password');
  });
  labelPass.appendChild(inputPass);

  const button = document.createElement('button');
  button.id = 'button';
  button.type = 'button';
  button.textContent = 'Ingresar';
  form.appendChild(button);

  button.addEventListener('click', async (event) => {
    event.preventDefault();

    // TODO: Implement login functionality
  });

  const anchor = document.createElement('a');
  anchor.href = 'reset-password';
  anchor.textContent = '¿Olvidaste tu contraseña?';
  form.appendChild(anchor);

  return form;
}
