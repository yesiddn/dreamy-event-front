import UserInformation from './UserInformation.js';
import PasswordUpdate from './PasswordUpdate.js';

export default function UserPanel(API, USER) {
    const panel = document.createElement('div');
    panel.classList.add('user-panel');

    const userInformation = PasswordUpdate(USER);
    panel.appendChild(userInformation);

    return panel;
}