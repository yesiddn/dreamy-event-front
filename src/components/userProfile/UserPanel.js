import UserInformation from './UserInformation.js';

export default function UserPanel(API, USER) {
    const panel = document.createElement('div');
    panel.classList.add('user-panel');

    const userInformation = UserInformation(USER);

    panel.appendChild(userInformation);

    return panel;
}