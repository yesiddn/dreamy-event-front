// En UserProfile.js
import Header from '../templates/Header.js';
import '../styles/user-profile.css'
import UserSideBar from '../components/userProfile/UserSideBar.js';
import UserPanel from '../components/userProfile/UserPanel.js';

let OPTION = 'summary';
let updatedUserData = {};


const UserProfile = (API, USER) => {
  const container = document.createElement('div');
  container.classList.add('user-profile');

  Header(USER);
  const sidebar = UserSideBar(API, USER);
  container.appendChild(sidebar);

  const userPanel = () => UserPanel(API, USER, OPTION);

  document.querySelector('#app').appendChild(container);

  container.appendChild(userPanel());

  // localStorage data
  const savingInfoForm = document.querySelector('#form');
  savingInfoForm.addEventListener('change', function () {
    const userInfoForm = document.querySelector('#form');
    const formData = new FormData(userInfoForm);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem('updatedData', JSON.stringify(data));
  });




  const optionElementList = document.querySelectorAll('.user-options li');
  // Event listener para los user options
  optionElementList.forEach(element => {
    element.addEventListener('click', () => {

      if (element.id == 'pass-option') {
        OPTION = 'pass';
        if (!container.querySelector('.update-password-container')) {
          container.querySelector('.user-information-container')?.remove();
          container.appendChild(userPanel());
        }

      } else if (element.id == 'info-option') {
        OPTION = 'info';
        if (!container.querySelector('.user-information-container')) {
          container.querySelector('.update-password-container')?.remove();
          container.appendChild(userPanel());
        }
      }else if(element.id == 'summary-option'){
        console.log('summary clicked');
      }
    })
  });
}

export default UserProfile;
