import UserInformation from './UserInformation.js';
import PasswordUpdate from './PasswordUpdate.js';

export default function UserPanel(API, USER, OPTION) {
    if (OPTION === 'info') {
        const userInformationContainer = UserInformation(USER);
        return userInformationContainer;
    }

    if (OPTION === 'pass') {
        const updatePasswordContainer = PasswordUpdate(USER);
        return updatePasswordContainer;
    }
}