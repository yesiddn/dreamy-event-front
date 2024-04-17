import '../styles/form-section.css';
import LoginForm from './LoginForm';

export default function LoginSection(API) {
  const loginContainer = document.createElement('section');
  loginContainer.classList.add('form-section');

  const formContainer = document.createElement('div');
  formContainer.classList.add('form__container');
  loginContainer.appendChild(formContainer);

  const square = document.createElement('div');
  square.classList.add('square');
  formContainer.appendChild(square);

  const title = document.createElement('h2');
  title.innerHTML = 'Bienvenido a <span class="primary">Dreamy Event</span>';
  formContainer.appendChild(title);

  const loginForm = LoginForm(API);
  formContainer.appendChild(loginForm);

  document.querySelector('#app').appendChild(loginContainer);
}