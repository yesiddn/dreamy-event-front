// En UserProfile.js
import Header from '../templates/Header.js';
import '../styles/user-profile.css'
import UserSideBar from '../components/userProfile/UserSideBar.js';
import UserPanel from '../components/userProfile/UserPanel.js';
import logOut from '../utils/log-out.js';

let OPTION = 'summary';


const UserProfile = (API, USER) => {
  const container = document.createElement('div');
  container.classList.add('user-profile');

  Header(API, USER);
  const sidebar = UserSideBar(API, USER);
  container.appendChild(sidebar);

  const userPanel = () => UserPanel(API, USER, OPTION);

  document.querySelector('#app').appendChild(container);

  container.appendChild(userPanel());

  const optionElementList = document.querySelectorAll('.user-options li');
  // Event listener para los user options
  optionElementList.forEach(element => {
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

        const savingInfoForm = document.querySelector('.update-information-container .form');
        savingInfoForm.addEventListener('change', function () {
          const userInfoForm = document.querySelector('#form');
          const formData = new FormData(userInfoForm);
          const data = Object.fromEntries(formData.entries());
          localStorage.setItem('updatedData', JSON.stringify(data));
        });

      } else if (element.id == 'pass-option') {
        OPTION = 'pass';
        container.appendChild(userPanel());
      }

    })
  });
}

export default UserProfile;
