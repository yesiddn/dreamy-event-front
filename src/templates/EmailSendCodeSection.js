import '../styles/form-section.css'
import Alert from '../templates/Alert.js';
import sendCodeEmail from '../utils/send-code.js';
import SendCode from './EmailSendCodeForm.js';

export default function SendCodeSection(API){
    const emailSendCode = document.createElement('section');
    emailSendCode.classList.add('form-section', 'show');
  
    const containerEmailSend = document.createElement('div');
    containerEmailSend.classList.add('form__container');
    emailSendCode.appendChild(containerEmailSend);

    const title = document.createElement('h2');
    title.innerHTML = 'Restablecer contraseña';
    containerEmailSend.appendChild(title);

    const descripction = document.createElement('p');
    descripction.style.padding = '0px';
    descripction.textContent = 'Introduce la dirección de correo electrónico que usaste para registrarte.';
    containerEmailSend.appendChild(descripction);

    const sendCode = SendCode();
    containerEmailSend.appendChild(sendCode);


    sendCode.addEventListener('submit', async (event) =>{
        event.preventDefault();
        const inputEmail = event.target.querySelector('#email-send-code');
        const email = inputEmail.value;
    
        if (email !== '') {
          try {
            localStorage.setItem('email',email);
            const response = await sendCodeEmail(API, email);
               if (response) {
                setTimeout(() => {
                  window.location.href = '/verify-code';
                }, 1500)
               }
          } catch (error) {
            console.log('Error al cargar la página: ', error)
          }
        } else {
          Alert('email empty')
        }
    })

    document.querySelector('#app').appendChild(emailSendCode);
}