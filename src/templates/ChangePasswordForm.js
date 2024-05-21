import '../styles/form.css'

export default function changePassword(){
    const form = document.createElement('form');
    form.classList.add('form');
  
    const labelChange = document.createElement('label');
    labelChange.htmlFor = 'change-password';
    labelChange.classList.add('form__input');
    form.appendChild(labelChange);
  
    const inputPassword = document.createElement('input');
    inputPassword.id = 'change-password';
    inputPassword.type = 'password';
    inputPassword.name = 'change-password';
    inputPassword.placeholder = 'Nueva contraseña';
    inputPassword.minLength = 8;
    inputPassword.addEventListener('keyup', function () {
        validateInputData('change-password');
      });
    labelChange.appendChild(inputPassword)

    const buttonNewPassword = document.createElement('button');
    buttonNewPassword.id = 'button';
    buttonNewPassword.type = 'submit';
    buttonNewPassword.textContent = 'Guardar';

    form.appendChild(buttonNewPassword)
    return form;
}
