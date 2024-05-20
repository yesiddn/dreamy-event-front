import UserInformation from './UserInformation.js';
import PasswordUpdate from './PasswordUpdate.js';
import UserSummary from './UserSummary.js';

export default function UserPanel(API, USER, OPTION) {
    
    if (OPTION === 'summary') {
        const userSummaryContainer = UserSummary(USER);
        return userSummaryContainer;
    }
    if (OPTION === 'info') {
        const userInformationContainer = UserInformation(USER);
        return userInformationContainer;
    }

    if (OPTION === 'pass') {
        const updatePasswordContainer = PasswordUpdate(USER);
        return updatePasswordContainer;
    }
}