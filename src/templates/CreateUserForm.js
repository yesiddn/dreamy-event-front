import '../styles/form.css';


export default function CreateUser (){
const form = document.createElement('form');
form.classList.add('form');
form.id = 'form';

const labelEmail = document.createElement('label');
labelEmail.htmlFor = 'email';
labelEmail.classList.add('form__input');
labelEmail.innerHTML = '<input id="email" type="email" name="email" placeholder="Email" onkeyup="validateInputData(\'email\')"><span class="inactive">Ingrese un valor válido.</span>';
form.appendChild(labelEmail);

const labelPass = document.createElement('label');
labelPass.htmlFor = 'pass';
labelPass.classList.add('form__input');
labelPass.innerHTML = '<input id="pass" type="password" name="pass" placeholder="Password" onkeyup="validateInputData(\'pass\')"><span class="inactive">Ingrese un valor válido.</span>';
form.appendChild(labelPass);

const button = document.createElement('button');
button.type = 'submit';
button.id = 'log-in-form-button';
button.innerHTML = 'Entrar';
form.appendChild(button);

const anchor = document.createElement('a');
anchor.id = 'passwordRecoveryInput';
anchor.href = 'reset-password';
anchor.innerHTML = '¿Ha olvidado su contraseña?';
form.appendChild(anchor);

return form;

}