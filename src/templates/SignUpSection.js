import '../styles/form-section.css';
import SignUpForm from './SignUpForm';

export default function SignUpSection(API) {
  const signUpContainer = document.createElement('section');
  signUpContainer.classList.add('form-section');

  const formContainer = document.createElement('div');
  formContainer.classList.add('form__container');
  signUpContainer.appendChild(formContainer);

  const square = document.createElement('div');
  square.classList.add('square');
  formContainer.appendChild(square);

  const title = document.createElement('h2');
  title.innerHTML =
    '¡Reserva y celebra con <span class="primary">facilidad</span>!';
  formContainer.appendChild(title);

  const signUpForm = SignUpForm(API);
  formContainer.appendChild(signUpForm);

  document.querySelector('#app').appendChild(signUpContainer);
}
