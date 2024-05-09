import Header from '../templates/Header.js';
import ProfileOverview from '../components/userProfile/ProfileOverview.js'
import ProfileSideBar from '../components/userProfile/ProfileSideBar.js'
import UserInformation from '../components/userProfile/UserInformation.js'
import '../styles/user-profile.css'

const UserProfile = (API,USER) => {
  Header(USER);
  ProfileOverview(USER,API)
  ProfileSideBar();
  UserInformation();

  /* const text = document.createElement('H1');
  text.textContent = 'hi';

  const divs = document.createElement('div');
  divs.classList.add('AlejoShox');
  divs.id = "AlejoShox ID";


  divs.appendChild();
  document.body.appendChild(divs); */

}

export default UserProfile;