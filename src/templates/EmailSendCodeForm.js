import '../styles/form.css'

export default function SendCode(){
    const form = document.createElement('form');
    form.classList.add('form');
  
    const labelEmail = document.createElement('label');
    labelEmail.htmlFor = 'email-send-code';
    labelEmail.classList.add('form__input');
    form.appendChild(labelEmail);
  
    const inputEmail = document.createElement('input');
    inputEmail.id = 'email-send-code';
    inputEmail.type = 'email';
    inputEmail.name = 'email-send-code';
    inputEmail.placeholder = 'Correo electrónico';
    inputEmail.addEventListener('keyup', function () {
        validateInputData('email-send-code');
      });
    labelEmail.appendChild(inputEmail)

    const buttonSendEmail = document.createElement('button');
    buttonSendEmail.id = 'button';
    buttonSendEmail.type = 'submit';
    buttonSendEmail.textContent = 'Enviar Código';

    form.appendChild(buttonSendEmail)
    return form;
}

