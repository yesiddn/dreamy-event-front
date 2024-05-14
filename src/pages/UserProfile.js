import Header from '../templates/Header.js';
import PasswordUpdate from '../components/userProfile/PasswordUpdate.js' /* pendiente a cargar dinamicamente */
import '../styles/user-profile.css'
import UserSideBar from '../components/userProfile/UserSideBar.js';
import UserPanel from '../components/userProfile/UserPanel.js';


const UserProfile = (API, USER) => {
  const container = document.createElement('div');
  container.classList.add('user-profile');

  Header(USER);
  const sidebar = UserSideBar(API, USER);
  const userPanel = UserPanel(API, USER);

  container.appendChild(sidebar);
  

  document.querySelector('#app').appendChild(container);

  const optionElementList = document.querySelectorAll('.user-options li');

  optionElementList.forEach(element => {
    element.addEventListener('click', () => {
      if (element.id == 'pass-option') {
        container.appendChild(userPanel);
        
      }
    })
    
  });

}

export default UserProfile;