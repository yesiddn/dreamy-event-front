import '../styles/form-section.css';
import SignUpSupplierForm from './SignUpSupplierForm';

export default function SignUpSupplierSection(API) {
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

  const signUpForm = SignUpSupplierForm(API);
  formContainer.appendChild(signUpForm);

  document.querySelector('#app').appendChild(signUpContainer);
}
