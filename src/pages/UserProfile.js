import Header from '../templates/Header.js';
import ProfileOverview from '../components/userProfile/ProfileOverview.js'
import UserOptions from '../components/userProfile/UserOptions.js'
import UserInformation from '../components/userProfile/UserInformation.js'
import PasswordUpdate from '../components/userProfile/PasswordUpdate.js'
import '../styles/user-profile.css'
import UserSideBar from '../components/userProfile/UserSideBar.js';

const UserProfile = (API,USER) => {
  const container = document.createElement('div');
  container.classList.add('user-profile');

  Header(USER);
  const sidebar = UserSideBar(API, USER);
  UserInformation();
  PasswordUpdate();

  container.appendChild(sidebar);

  document.querySelector('#app').appendChild(container);
}

export default UserProfile;