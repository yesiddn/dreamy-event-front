import '../styles/form-section.css'
import newPassword from '../utils/change-password.js';
import Alert from './Alert.js';
import changePassword from "./ChangePasswordForm.js";

 export default function changePasswordSection(API){
  const emailUser = localStorage.getItem('email');

    const changePasswordSection = document.createElement('section');
    changePasswordSection.classList.add('form-section');
  
    const containerChangePassword = document.createElement('div');
    containerChangePassword.classList.add('form__container');
    changePasswordSection.appendChild(containerChangePassword);

    const title = document.createElement('h2');
    title.innerHTML = 'Nueva contraseña';
    containerChangePassword.appendChild(title);

    const descripction = document.createElement('p');
    descripction.style.padding = '0px';
    descripction.textContent = 'Escribe tu nueva contraseña de mínimo 8 dígitos';
    containerChangePassword.appendChild(descripction);

    const changePasswordForm = changePassword();
    containerChangePassword.appendChild(changePasswordForm);

    changePasswordForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const inputPassword = event.target.querySelector('#change-password');
      const password = inputPassword.value;

      if (password) {
        try {
          const response = await newPassword(API, emailUser, password);
      if (response) {
        setTimeout(() => {
          window.location.href = '/log-in';
        }, 1500); 
      }
        } catch (error) {
          console.error('Error al cambiar contraseña:', error);
        }
      } else {
        Alert('password empty')
      }
    })

    document.querySelector("#app").appendChild(changePasswordSection)
 }