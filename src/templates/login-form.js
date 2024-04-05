const section = document.createElement('section');
section.setAttribute('class', 'form-section');
section.setAttribute('id', 'login-section');

const divContainer = document.createElement('div');
divContainer.setAttribute('class', 'form__container');

const h2 = document.createElement('h2');
h2.innerHTML = 'Bienvenido a <span class="primary">Dreamy Event</span>';

const divSquare = document.createElement('div');
divSquare.setAttribute('class', 'square');

const form = document.createElement('form');
form.setAttribute('class', 'form');
form.setAttribute('id', 'form');

const labelEmail = document.createElement('label');
labelEmail.setAttribute('for', 'email');
labelEmail.setAttribute('class', 'form__input');
labelEmail.innerHTML = '<input id="email" type="email" name="email" placeholder="Email" onkeyup="validateInputData(\'email\')"><span class="inactive">Ingrese un valor válido.</span>';

const labelPass = document.createElement('label');
labelPass.setAttribute('for', 'pass');
labelPass.setAttribute('class', 'form__input');
labelPass.innerHTML = '<input id="pass" type="password" name="pass" placeholder="Password" onkeyup="validateInputData(\'pass\')"><span class="inactive">Ingrese un valor válido.</span>';

const button = document.createElement('button');
button.setAttribute('type', 'button');
button.setAttribute('id', 'log-in-form-button');
button.innerHTML = 'Entrar';

const anchor = document.createElement('a');
anchor.setAttribute('id', 'passwordRecoveryInput');
anchor.setAttribute('href', 'reset-password');
anchor.innerHTML = '¿Ha olvidado su contraseña?';

document.body.appendChild(section);
section.appendChild(divContainer);
divContainer.appendChild(h2);
divContainer.appendChild(divSquare);
divContainer.appendChild(form);
form.appendChild(labelEmail);
form.appendChild(labelPass);
form.appendChild(button);
form.appendChild(anchor);