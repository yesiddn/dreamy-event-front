import '../styles/recovery-code.css';
import verifyCode from '../utils/verify-code.js';

export default function RecoveryCode(API){
    const emailUser = localStorage.getItem('email');
    
    const containerRecovery = document.createElement('div');
    containerRecovery.classList.add('recovery-container'), 'show';

    const title = document.createElement('h2');
    title.textContent = 'Código de recuperación';
    containerRecovery.appendChild(title);

    const text = document.createElement('p');
    text.innerHTML = `Le enviamos un código de recuperación de 4 dígitos al correo electrónico <b>${emailUser}</b> <br /> Ingrese el código a continuación para confirmar su identidad.`;
    containerRecovery.appendChild(text);

    const codeContainer = document.createElement('div');
    codeContainer.classList.add('code-container');

    for (let i = 0; i < 4; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.classList.add('code');
        input.placeholder = '0';
        input.min = '0';
        input.max = '9';
       input.required = true;
        codeContainer.appendChild(input);
    }

    containerRecovery.appendChild(codeContainer);

    const buttonContainer = document.createElement('div');
    const button = document.createElement('button');
    button.classList.add('recovery');
    button.type = 'submit';
    button.textContent = 'Verificar';
    button.setAttribute('api',API);
    buttonContainer.appendChild(button);
    containerRecovery.appendChild(buttonContainer);

    const initCodeInputs = () =>{
        const codes = document.querySelectorAll('.code');
        codes[0].focus();
    
        codes.forEach((code, idx) => {
            code.addEventListener('keydown', (e) => {
                const codes = document.querySelectorAll('.code');
                if(e.key >= 0 && e.key <=9) {
                    codes[idx].value = ''
                    setTimeout(() => codes[idx + 1].focus(), 10)
                } else if(e.key === 'Backspace') {
                    setTimeout(() => codes[idx - 1].focus(), 10)
                }
            })
        });
    }    
    setTimeout(initCodeInputs,100)

    button.addEventListener('click', async () => {
       const codes = document.querySelectorAll('.code');
       const code = Array.from(codes).map(input => input.value).join('');
     
       try {
        const response = await verifyCode(API, emailUser, code);
        if (response) {
            setTimeout(() => {
                window.location.href = '/change-password';
              }, 1500); 
        }
      } catch (error) {
        console.error('Error al verificar el código:', error);
      }
    })

    document.querySelector('#app').appendChild(containerRecovery);
}
