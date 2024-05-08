import Header from '../templates/Header.js';
import ProfileOverview from '../templates/ProfileOverview.js'
import '../styles/user-profile.css'

const UserProfile = (API,USER) => {
  Header(USER);
  ProfileOverview(USER,API)

  /* const text = document.createElement('H1');
  text.textContent = 'hi';

  const divs = document.createElement('div');
  divs.classList.add('AlejoShox');
  divs.id = "AlejoShox ID";


  divs.appendChild();
  document.body.appendChild(divs); */

}

export default UserProfile;