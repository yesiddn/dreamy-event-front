import Header from '../templates/Header.js';
import ProfileOverview from '../templates/ProfileOverview.js'

const UserProfile = (API,USER) => {
  Header(USER);
  ProfileOverview(USER);
}

export default UserProfile;