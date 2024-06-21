// En UserProfile.js
import Header from '../templates/Header.js';
import '../styles/user-profile.css';
import UserSideBar from '../components/userProfile/UserSideBar.js';
import UserPanel from '../components/userProfile/UserPanel.js';
import logOut from '../utils/log-out.js';

let OPTION = 'summary';

const UserProfile = (API, USER) => {
  const container = document.createElement('div');
  container.classList.add('user-profile');

  Header(USER);
  const sidebar = UserSideBar(API, USER);
  container.appendChild(sidebar);

  const userPanel = () => UserPanel(API, USER, OPTION);

  document.querySelector('#app').appendChild(container);

  container.appendChild(userPanel());

  const optionElementList = document.querySelectorAll('.user-options li');
  // Event listener para los user options
  optionElementList.forEach((element) => {
    element.addEventListener('click', () => {
      if (container.children[1] && element.id !== 'logout-option') {
        const optionToDelete = container.children[1];
        optionToDelete.remove();
      } else {
        logOut();
      }

      if (element.id == 'summary-option') {
        OPTION = 'summary';
        container.appendChild(userPanel());
      } else if (element.id == 'info-option') {
        OPTION = 'info';
        container.appendChild(userPanel());

        const savingInfoForm = document.querySelector(
          '.update-information-container .form'
        );
        savingInfoForm.addEventListener('change', function () {
          const userInfoForm = document.querySelector('#form');

          const formData = new FormData(userInfoForm);
          const formDataObject = Object.fromEntries(formData.entries());
          console.log(USER.customer.customerId);
          
          const completeData = {
            id: USER.id,
            email: USER.email,
            customer: {
              customerId: USER.customer.customerId,
              ...formDataObject,
              image: USER.customer.image 
            },
            supplier: USER.supplier
          };
          
          localStorage.setItem('updatedData', JSON.stringify(completeData));
          /*
          const formData = new FormData(userInfoForm);
          const data = Object.fromEntries(formData.entries());
          localStorage.setItem('updatedData', JSON.stringify(data)); */
        });
      } else if (element.id == 'pass-option') {
        OPTION = 'pass';
        container.appendChild(userPanel());

        const validDiv = document.createElement('div');
        validDiv.classList.add('validDiv');
        const invalidDiv = document.createElement('div');
        invalidDiv.classList.add('invalidDiv');
        /* invalidDiv.textContent = 'Wrong'; */

        const newPasswordInput = document.getElementById('new-password');
        const confirmPasswordInput = document.getElementById('confirm-password');

        const confirmLabel = confirmPasswordInput.parentNode
        const newPasLabel = newPasswordInput.parentNode;

        newPasswordInput.addEventListener('input', () => {
          const inputLength = document.getElementById('new-password').value.length

          if (inputLength < 8) {
            console.log('faltan caracteres');
            newPasswordInput.style.setProperty('border', 'solid 1px red', 'important');
            newPasLabel.appendChild(invalidDiv);
            invalidDiv.textContent = 'contraseña debe tener al menos 8 caracteres';
          } else {
            newPasswordInput.style.removeProperty('border');
            newPasLabel.removeChild(invalidDiv);
            newPasLabel.removeChild(validDiv);
          }
        })

        confirmPasswordInput.addEventListener('input', () => {

          var passInputLengthM = (newPasswordInput.value.length === confirmPasswordInput.value.length);
          if (confirmPasswordInput.value !== newPasswordInput.value && passInputLengthM !== true) {
            confirmPasswordInput.style.setProperty('border', 'solid 1px red', 'important');
            confirmLabel.appendChild(invalidDiv);
            confirmLabel.removeChild(validDiv);
            invalidDiv.textContent = 'las contraseñas no coincide';
          } else {
            confirmPasswordInput.style.removeProperty('border');
            confirmLabel.removeChild(invalidDiv);
            confirmLabel.appendChild(validDiv);
            validDiv.textContent = '¡perfecto!';
          }
        })
      }
    });
  });
};

export default UserProfile;
